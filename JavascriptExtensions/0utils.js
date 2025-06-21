// @ts-check
"use strict";

/**
 * ==== 0. UTILS SECTION ====
 * Reusable logic, classes, helpers, etc
 * It's very likely you don't have to change anything in this section
 * ========================
 */

/**
 * 0.a INTERNAL HELPERS
 */

/**
 * @typedef {string | number} GamePropertyKey
 */

/**
 * @typedef {{[key: GamePropertyKey]: string}} StringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: string | null}} NullableStringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: {[key: GamePropertyKey]: FunctionRecord} | (function(...any): any) | GameOrCarClassNullableFunctionRecord}} GameOrCarClassNullableFunctionRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: NullableStringRecord | string | null}} GameOrCarClassNullableStringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: null | { optimal: number, goodThreshold: number, criticalThreshold: number } | GameOrCarClassOptimalRangeRecord}} GameOrCarClassOptimalRangeRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: function(...any): string | number}} FunctionRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: function(...any): function(...any): string | number}} HigherOrderFunctionRecord
 */

/**
 * @typedef {{ label: string; color: string | null; } | string} LabelColor
 */

/**
 * @typedef {{[key: GamePropertyKey]: { label: string; color: string | null; } | string}} LabelColorRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: LabelMap | {[key: GamePropertyKey]: LabelMap}}} GameOrCarClassLabelMapRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: null | LabelMap | {[key: GamePropertyKey]: LabelMap }}} NullableGameOrCarClassLabelMapRecord
 */

/**
 * @param {string[]} accessorArray
 * @param {object} value
 * @returns
 */
function deepAccess(accessorArray, value) {
  if (!value || typeof value !== "object") {
    return value;
  }

  if (!(accessorArray[0] in value)) {
    return undefined;
  }

  const nestedValue = value[accessorArray[0]];

  if (accessorArray.length === 1) {
    return nestedValue;
  }

  return deepAccess(accessorArray.slice(1), nestedValue);
}

/**
 * @param {string} accessorString
 * @param {object} value
 * @returns
 */
function deepStringAccess(accessorString, value) {
  return deepAccess(accessorString.split("."), value);
}

/**
 * @param {string} configInput
 */
function parseConfig(configInput) {
  const MASTER_SECTION_REQUIRED_KEYS = ["section_label"];
  const MASTER_SECTION_OPTIONAL_KEYS = [];

  const SUB_SECTION_REQUIRED_KEYS = ["property", "label"];
  const SUB_SECTION_OPTIONAL_KEYS = ["value", "transformation", "popup", "optimal"];

  const parsedConfig = TOML.parse(configInput);
  const parsedConfigSections = Object.entries(parsedConfig);

  parsedConfigSections.forEach(([sectionKey, section]) => {
    MASTER_SECTION_REQUIRED_KEYS.forEach((requiredChildKey) => {
      if (requiredChildKey in section) {
        return;
      }

      throw new Error(
        `Section ${sectionKey} is missing required child ${requiredChildKey}. Add it to the configuration.`
      );
    });

    Object.entries(section).forEach(([subSectionKey, subSection]) => {
      // Skip master section keys, we're only interested in subsections
      if (
        MASTER_SECTION_REQUIRED_KEYS.includes(subSectionKey) ||
        MASTER_SECTION_OPTIONAL_KEYS.includes(subSectionKey)
      ) {
        return;
      }

      SUB_SECTION_REQUIRED_KEYS.forEach((requiredChildKey) => {
        if (requiredChildKey in subSection) {
          return;
        }

        throw new Error(
          `Subsection ${sectionKey}.${subSectionKey} is missing required child ${requiredChildKey}. Add it to the configuration.`
        );
      });

      Object.keys(subSection).forEach((subSectionChildKey) => {
        if (
          !SUB_SECTION_REQUIRED_KEYS.includes(subSectionChildKey) &&
          !SUB_SECTION_OPTIONAL_KEYS.includes(subSectionChildKey)
        ) {
          throw new Error(
            `Subsection ${sectionKey}.${subSectionKey} includes unknown key ${subSectionChildKey}. Double-check the configuration.`
          );
        }
      });
    });
  });

  return parsedConfig;
}

/** `parseConfig` already validates the config file, you can use the return value safely */
function parseConfigFile() {
  return parseConfig(configurationData);
}

/**
 * @param {{}} transformationMap
 * @param {{} | undefined} parsedConfig
 */
function constructAndParseTransformations(transformationMap, parsedConfig = undefined) {
  if (!transformationMap) {
    return null;
  }

  if ("reference" in transformationMap) {
    if (typeof transformationMap.reference !== "string") {
      throw new Error(
        `Provided reference in ${JSON.stringify(
          transformationMap
        )} is not a string. The reference must refer to an existing transformation in the same configuration`
      );
    }

    if (parsedConfig) {
      const referencedTransformationMap = deepStringAccess(transformationMap.reference, parsedConfig);

      return constructAndParseTransformations(referencedTransformationMap, parsedConfig);
    }

    return transformationMap;
  }

  return Object.fromEntries(
    Object.entries(transformationMap).map(([property, transformations]) => {
      if (transformations.length > 1) {
        throw new Error(
          `Provided more than 1 transformation for property ${property}. Double-check the configuration.`
        );
      }

      return [
        property,
        Object.entries(transformations).map(([arg, fnBody]) => {
          const transformation = [`(${arg})`, fnBody.replaceAll(/(:?\n)|(:?<%)|(:?%>)/g, "")].join(" => ");

          return eval(transformation);
        })[0],
      ];
    })
  );
}

/**
 * @param {{}} subSection
 * @param {{} | undefined} parsedConfig
 */
function constructSubsectionResultMap(subSection, parsedConfig) {
  const CONFIG_SUBSECTION_MAP = {
    value: "labelMaps",
    property: "gameProperties",
    transformation: "transformations",
    label: "uiLabels",
    popup: "popupLabels",
    optimal: "optimalRanges",
  };

  return Object.fromEntries(
    Object.entries(subSection).map(([key, value]) => {
      let resultValue = value;

      if (key === "property") {
        if ("reference" in value) {
          if (typeof value.reference !== "string") {
            throw new Error(
              `Provided reference in ${JSON.stringify(
                value
              )} is not a string. The reference must refer to an existing transformation in the same configuration`
            );
          }

          if (parsedConfig) {
            const referencedValue = deepStringAccess(value.reference, parsedConfig);

            resultValue = referencedValue;
          }
        }
      }

      return [CONFIG_SUBSECTION_MAP[key], key === "value" ? constructLabelMapFromConfig(resultValue) : resultValue];
    })
  );
}

/**
 * @param {{}} inputObject
 */
function objectIsLabelMap(inputObject) {
  return "label" in inputObject || typeof inputObject === "string";
}

/**
 * @param {{}} inputLabelMaps
 */
function constructLabelMapFromConfig(inputLabelMaps) {
  Object.fromEntries(
    Object.entries(inputLabelMaps).map(([key, value]) => {
      // TODO: Convert to label maps from config
      return [key, value];
    })
  );
}

/**
 * @param {{}} parsedConfigSections
 */
function constructOutputResultMap(parsedConfigSections) {
  const CONFIG_SUBSECTION_MAP = {
    value: "labelMaps",
    property: "gameProperties",
    transformation: "transformations",
    label: "uiLabels",
    popup: "popupLabels",
    optimal: "optimalRanges",
  };
  const RESULT_MAP_SECTIONS = ["masterSectionUiLabels", ...Object.values(CONFIG_SUBSECTION_MAP)];
  const sectionsEntries = Object.entries(parsedConfigSections);
  const sectionResultEntries = sectionsEntries.map(([sectionKey, section]) => [
    sectionKey,
    constructSectionResultMap(section, parsedConfigSections),
  ]);

  const resultMap = RESULT_MAP_SECTIONS.reduce((acc, cur) => {
    if (cur === "masterSectionUiLabels") {
      acc.masterSectionUiLabels = {
        ...acc.masterSectionUiLabels,
        ...Object.fromEntries(sectionsEntries.map(([sectionKey, section]) => [sectionKey, section.section_label])),
      };
    } else {
      acc[cur] = {
        ...acc[cur],
        ...Object.fromEntries(
          sectionResultEntries.map(([sectionKey, section]) => {
            const subSections = Object.fromEntries(
              Object.entries(section).map(([subSectionKey, subSection]) => [
                subSectionKey,
                cur === "transformations"
                  ? constructAndParseTransformations(subSection[cur], parsedConfigSections)
                  : subSection[cur],
              ])
            );

            return [sectionKey, subSections];
          })
        ),
      };
    }

    return acc;
  }, Object.fromEntries(RESULT_MAP_SECTIONS.map((key) => [key, {}])));

  return resultMap;
}

/**
 * @param {{}} section
 * @param {{} | undefined} parsedConfig
 */
function constructSectionResultMap(section, parsedConfig = undefined) {
  return Object.fromEntries(
    Object.entries(section).flatMap(([subSectionKey, subSection]) =>
      subSectionKey !== "section_label" ? [[subSectionKey, constructSubsectionResultMap(subSection, parsedConfig)]] : []
    )
  );
}

function loadFromConfig() {
  const parsedConfig = parseConfigFile();
  const outputData = constructOutputResultMap(parsedConfig);

  return outputData;
}

/**
 * @param {string | number} rawValue
 * @param {LabelMap | null} labelMap
 * @param {function(any): any} transformation
 */
function calculateFinalValue(rawValue, labelMap, transformation) {
  const value = (labelMap && labelMap.getLabel(String(rawValue))) ?? rawValue;

  return (transformation ? transformation(value) : value) ?? "-";
}

/**
 * @param {LabelColor} map
 */
function getOrCreateLabelAndColor(map) {
  if (typeof map === "string") {
    // TODO: Consider replacing `null` with `#FFFFFFFF` in case `null` breaks dashboard styling
    return { label: map, color: null };
  }

  return map;
}

class LabelMap {
  /** @type {LabelColorRecord} */
  _map;

  /**
   * @param {LabelColorRecord} map
   */
  constructor(map) {
    this._map = Object.fromEntries(Object.entries(map).map(([key, value]) => [key, getOrCreateLabelAndColor(value)]));
  }

  /**
   * @param {string} key
   */
  getLabel(key) {
    return typeof this._map[key] === "string" ? this._map[key] : this._map[key].label;
  }
  /**
   * @param {string} key
   */
  getColor(key) {
    return typeof this._map[key] === "string" ? this._map[key] : this._map[key].color;
  }
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {GameOrCarClassNullableFunctionRecord} map
 * @param {string | undefined} currentCarId
 */
function getGameOrClassFunctionOverrides(currentGame, currentCarClass, map, currentCarId) {
  if (currentGame in map) {
    const gameMap = map[currentGame];

    if (!gameMap || typeof gameMap === "number") {
      return gameMap;
    }

    if (currentCarId && currentCarId in gameMap) {
      return gameMap[currentCarId];
    }

    if (currentCarClass && currentCarClass in gameMap) {
      return gameMap[currentCarClass];
    }

    if ("Generic" in gameMap) {
      return gameMap.Generic;
    }
  }

  if (currentCarClass && currentCarClass in map) {
    return map[currentCarClass];
  }

  if ("Generic" in map) {
    return map.Generic;
  }

  return null;
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {GameOrCarClassOptimalRangeRecord} map
 * @param {string | undefined} currentCarId
 * @param {string | undefined} currentTyre
 */
function getGameOrClassNumberOverrides(currentGame, currentCarClass, map, currentCarId, currentTyre) {
  if (currentGame in map) {
    const gameMap = map[currentGame];

    if (!gameMap || typeof gameMap === "number") {
      return gameMap;
    }

    if (currentCarId && currentCarId in gameMap) {
      if (currentTyre && currentTyre in gameMap[currentCarId]) {
        return gameMap[currentCarId][currentTyre];
      }

      return gameMap[currentCarId];
    }

    if (currentCarClass && currentCarClass in gameMap) {
      if (currentTyre && currentTyre in gameMap[currentCarClass]) {
        return gameMap[currentCarClass][currentTyre];
      }

      return gameMap[currentCarClass];
    }

    if ("Generic" in gameMap) {
      if (gameMap.Generic && currentTyre && currentTyre in gameMap.Generic) {
        return gameMap.Generic[currentTyre];
      }

      return gameMap.Generic;
    }
  }

  if (currentCarClass && currentCarClass in map) {
    if (map[currentCarClass] && currentTyre && currentTyre in map[currentCarClass]) {
      return map[currentCarClass][currentTyre];
    }

    return map[currentCarClass];
  }

  if (currentTyre && map && currentTyre in map) {
    return map[currentTyre];
  }

  if ("Generic" in map) {
    if (map.Generic && currentTyre && currentTyre in map.Generic) {
      return map.Generic[currentTyre];
    }

    return map.Generic;
  }

  return null;
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {GameOrCarClassNullableStringRecord} map
 * @param {string | undefined} currentCarId
 * @param {string | undefined} currentTyre
 */
function getGameOrClassStringOverrides(currentGame, currentCarClass, map, currentCarId, currentTyre = undefined) {
  /** @type {string | null} */
  let gameFallback = null;

  if (currentGame in map) {
    const gameMap = map[currentGame];
    if (!gameMap || typeof gameMap === "string") {
      return gameMap;
    }

    if (currentCarId && currentCarId in gameMap) {
      if (
        currentTyre &&
        gameMap[currentCarId] &&
        typeof gameMap[currentCarId] !== "string" &&
        currentTyre in gameMap[currentCarId]
      ) {
        return gameMap[currentCarId][currentTyre];
      }

      return gameMap[currentCarId];
    }

    if (currentCarClass && currentCarClass in gameMap) {
      if (
        currentTyre &&
        gameMap[currentCarClass] &&
        typeof gameMap[currentCarClass] !== "string" &&
        currentTyre in gameMap[currentCarClass]
      ) {
        return gameMap[currentCarClass][currentTyre];
      }

      return gameMap[currentCarClass];
    }

    if (currentTyre && gameMap[currentTyre]) {
      return gameMap[currentTyre];
    }

    if ("Generic" in gameMap) {
      if (currentTyre && gameMap.Generic && typeof gameMap.Generic !== "string" && currentTyre in gameMap.Generic) {
        return gameMap.Generic[currentTyre];
      }

      gameFallback = gameMap.Generic;
    }
  }

  if (currentCarClass && currentCarClass in map) {
    if (
      currentTyre &&
      map[currentCarClass] &&
      typeof map[currentCarClass] !== "string" &&
      currentTyre in map[currentCarClass]
    ) {
      return map[currentCarClass][currentTyre];
    }

    return map[currentCarClass];
  }

  if (gameFallback) {
    return gameFallback;
  }

  if ("Generic" in map) {
    if (currentTyre && map.Generic && typeof map.Generic !== "string" && currentTyre in map.Generic) {
      return map.Generic[currentTyre];
    }

    return map.Generic;
  }

  if (currentTyre && currentTyre in map) {
    return map[currentTyre];
  }

  return null;
}
/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {NullableGameOrCarClassLabelMapRecord} map
 * @param {string | undefined} currentCarId
 *
 * @returns {LabelMap | null}
 */
function getGameOrClassLabelMapOverrides(currentGame, currentCarClass, map, currentCarId) {
  if (currentGame in map && map[currentGame]) {
    const gameMap = map[currentGame];

    if (currentCarId && currentCarId in gameMap && gameMap[currentCarId]) {
      return gameMap[currentCarId];
    }

    if (currentCarClass && currentCarClass in gameMap && gameMap[currentCarClass]) {
      return gameMap[currentCarClass];
    }

    // @ts-expect-error
    return gameMap;
  }

  if (currentCarClass && currentCarClass in map && map[currentCarClass]) {
    // @ts-expect-error
    return map[currentCarClass];
  }

  if ("Generic" in map && map.Generic) {
    // @ts-expect-error
    return map.Generic;
  }

  return null;
}

/**
 * @param {number} value
 * @param {number} decimalPrecision
 */
function numberToFixed(value, decimalPrecision = 2) {
  return Number.parseFloat(value.toFixed(decimalPrecision));
}

/**
 * 0.b SIMHUB HELPERS (you might want to call these from SimHub. They include things like calculating a delta from the previous lap)
 */

/**
 * @param {number | string} currentValue
 * @param {string} currentFormattedTime
 * @param {{ [x: string]: string | number | null | undefined; }} root
 * @param {number} delayInMS
 */
function changedSinceTimeMs(currentValue, currentFormattedTime, root, delayInMS = 2000) {
  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`
    );
  }

  if (currentFormattedTime === null || currentFormattedTime === undefined) {
    throw new Error("You must enable System Info plugin in Simhub Settings for this function to work!");
  }

  const currentTimeMs = Date.parse(currentFormattedTime);

  root.time = currentTimeMs;
  root.oldState = root.oldState === null || root.oldState === undefined ? currentValue : root.newState;
  root.newState = currentValue;

  if (root.newState !== root.oldState) {
    root.triggerTime = root.time;
  }

  return root.triggerTime === null || root.triggerTime === undefined
    ? false
    : // @ts-expect-error Time is always a number, it's ok
      root.time - root.triggerTime <= delayInMS;
}

/**
 * @param {number} currentLapNumber
 * @param {number | string} currentValue
 * @param {{ previousLapNumber: number | null | undefined, valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNLaps(currentLapNumber, currentValue, root, nValues = 3) {
  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`
    );
  }

  root.previousLapNumber = root.previousLapNumber ?? currentLapNumber;

  if (root.valuesToCycle === null || root.valuesToCycle === undefined) {
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  if (root.previousLapNumber !== currentLapNumber) {
    root.previousLapNumber = currentLapNumber;
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  return root["valuesToCycle"];
}

/**
 * @param {number | string} currentValue
 * @param {{ valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNEntries(currentValue, root, nValues = 3) {
  root.valuesToCycle = root.valuesToCycle ?? Array(nValues).fill(null);
  root.valuesToCycle.shift();
  root.valuesToCycle.push(currentValue);

  return root.valuesToCycle;
}

/**
 * @param {number} currentLapNumber
 * @param {number} currentValue
 * @param {{ [x: string]: number | null | undefined; }} root
 * @param {number} decimalPrecision
 */
function deltaOverLastLap(currentLapNumber, currentValue, root, decimalPrecision = 2) {
  const inputValue = Number(currentValue ?? 0);

  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`
    );
  }

  if (root.previousLapNumber === undefined || root.previousLapNumber === null) {
    root.previousLapNumber = currentLapNumber;
  }

  if (root.previousValue === undefined || root.previousValue === null) {
    root.previousValue = inputValue;
  }

  if (root.previousDiff === undefined || root.previousDiff === null) {
    root.previousDiff = 0;
  }

  const previousLapNumber = root.previousLapNumber;
  const previousValue = root.previousValue;
  const previousDiff = root.previousDiff;

  if (previousLapNumber !== currentLapNumber) {
    const valueDiff = inputValue - previousValue;

    root.previousValue = inputValue;
    root.previousLapNumber = currentLapNumber;
    root.previousDiff = valueDiff;

    return numberToFixed(valueDiff, decimalPrecision);
  }

  return numberToFixed(previousDiff, decimalPrecision);
}

/**
 * @param {[]} value
 */
function debugArray(value) {
  return value.join(", ");
}

/**
 * @param {{}} value
 */
function debugObject(value) {
  return Object.keys(value).join(", ");
}

/**
 * @param {number} currentLapNumber
 * @param {number} lastLapTimeSeconds
 * @param {number} currentValue
 * @param {number} previousValue
 * @param {number} timeSpan
 * @param {{ resultEstimate: number | null, previousLapNumber: number | null; totalMeasurementTimeSeconds: number | null; valueAverageOverTimeSpan: number | null; }} root
 */
function estimateRequiredForSeconds(currentLapNumber, lastLapTimeSeconds, currentValue, previousValue, timeSpan, root) {
  root.resultEstimate = root.resultEstimate ?? 0;

  root.previousLapNumber = root.previousLapNumber ?? 0;
  root.totalMeasurementTimeSeconds = root.totalMeasurementTimeSeconds ?? 0;
  root.valueAverageOverTimeSpan = root.valueAverageOverTimeSpan ?? 0;

  if (root.previousLapNumber !== currentLapNumber) {
    root.totalMeasurementTimeSeconds = (root.totalMeasurementTimeSeconds + lastLapTimeSeconds) / 2;
    root.valueAverageOverTimeSpan = (root.valueAverageOverTimeSpan + previousValue) / 2;

    const calcTime = timeSpan / root.totalMeasurementTimeSeconds;

    root.resultEstimate = calcTime * root.valueAverageOverTimeSpan - currentValue + previousValue;
    root.previousLapNumber = currentLapNumber;
  }

  return Math.ceil(root.resultEstimate || 0) || "-";
}
