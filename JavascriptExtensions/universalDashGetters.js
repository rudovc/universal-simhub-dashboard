// @ts-check

/**
 * ==== TABLE OF CONTENTS ====
 * When a "game name" is referred to, it means the [CurrentGame] property in SimHub.
 * When a "label map" is referred to, it means an object with one of the following shapes:
 * {
 *   [key]: string | { label: string, color: string }
 * }
 * It can include only a string label, or a label and color for text display.
 * Colors are formatted as ARGB hex, as such: `#AARRGGBB`
 *
 * Every section consists of constants in the following order:
 * - Game and/or car class specific labels for the outline of the full section on the dashboard, if any such are necessary. These control the visibility of the whole section.
 *   To make the segment invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 * - Misc. game specific maps, which map the value coming from the game to arbitrary useful values
 * - Global misc. maps, which maps game and/or car class names to their respective game specific misc. maps
 * - Game and/or car class specific label maps, which map the value coming from the game to human-readable text
 * - Global label maps, which maps game names to their respective game specific label maps
 * - Global game property maps, which maps game names to the specific game property that supplies that value for that game
 * - Global transformation maps, which maps game properties to whatever transformation should be performed on them to normalize the value
 * - Global UI property maps, which maps game and/or car class names to the UI labels for dashboard elements. These control the visibility of the subsection.
 *   To make the segment invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 * - Global popup property maps, which maps game and/or car class names to the UI labels for the popup elements when the property is modified. These control the enabled state of the popup
 *   To make the popup invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 *
 * 0. UTILS
 * --------
 * 1. ERS
 *	- 1.a ERS MODE
 *	- 1.b ERS SOC
 *	- 1.c ERS CURRENT
 *	- 1.d ERS RECOVERY
 *  - 1.e ERS DELTA
 *  - 1.e ERS LAP
 *   ------------
 *  2. CAR CONTROL
 *	- 2.a TRACTION CONTROL
 *  - 2.b TC SLIP
 *  - 2.c TC CUT
 *  - 2.d ABS
 *  - 2.e BRAKE BIAS
 *  - 2.f BRAKE MIGRATION
 *  ----------------------------------------------------------------
 *  TODO: ------ Everything below this is not yet implemented ------
 *  3. FUEL
 *  - 3.a FUEL STATE
 *  - 3.b FUEL USAGE
 *  4. TEMPS
 *  - 4.a OIL TEMP
 *  - 4.b WATER TEMP
 *  - 4.c ENGINE TEMP
 *  5. TYRES
 *  - 5.a FL TEMP
 *  - 5.b FL WEAR
 *  - 5.c FR TEMP
 *  - 5.d FR WEAR
 *  - 5.e RL TEMP
 *  - 5.f RL WEAR
 *  - 5.g RR TEMP
 *  - 5.h RR WEAR
 *  6. BRAKES
 *  - 6.a FL TEMP
 *  - 6.b FR TEMP
 *  - 6.c RL TEMP
 *  - 6.d RR TEMP
 *  7. DAMAGE
 *  - 7.a FRONT BODY
 *  - 7.b FL BODY
 *  - 7.c FR BODY
 *  - 7.d MID RIGHT BODY
 *  - 7.e MID LEFT BODY
 *  - 7.f REAR BODY
 *  - 7.g RL BODY
 *  - 7.h RL BODY
 *  - 7.i FL WING
 *  - 7.j FR WING
 *  - 7.k REAR WING
 *  8. SUSPENSION
 *  - 8.a FRONT ARB
 *  - 8.b REAR ARB
 *  9. MISCELLANEOUS
 *  - 9.a PIT LIMITER
 * ===========================
 */

/**
 * ==== 0. UTILS SECTION ====
 * Reusable logic, classes, helpers, etc
 * It's very likely you don't have to change anything in this section
 * ========================
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
 * @typedef {{[key: GamePropertyKey]: NullableStringRecord | string | null}} GameOrCarClassNullableStringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: function(any): any}} FunctionRecord
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
  get(key) {
    return this._map[key];
  }
}

/**
 * @param {number} value
 * @param {number} decimalPrecision
 */
function numberToFixed(value, decimalPrecision = 2) {
  return parseFloat(value.toFixed(decimalPrecision));
}

/**
 * @param {number | string} currentValue
 * @param {string} currentFormattedTime
 * @param {{ [x: string]: string | number | null | undefined; }} root
 * @param {number} delayInMS
 */
function changedSinceTimeMs(currentValue, currentFormattedTime, root, delayInMS = 2000) {
  if (!root) {
    return `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`;
  }

  if (currentFormattedTime === null || currentFormattedTime === undefined) {
    return "You must enable System Info plugin in Simhub Settings for this function to work!";
  }

  const currentTimeMs = Date.parse(currentFormattedTime);

  root["time"] = currentTimeMs;
  root["oldState"] = root["oldState"] === null || root["oldState"] === undefined ? currentValue : root["newState"];
  root["newState"] = currentValue;

  if (root["newState"] != root["oldState"]) {
    root["triggerTime"] = root["time"];
  }

  return root["triggerTime"] === null || root["triggerTime"] === undefined
    ? false
    : // @ts-expect-error Time is always a number, it's ok
      root["time"] - root["triggerTime"] <= delayInMS;
}

/**
 * @param {number} currentLapNumber
 * @param {number | string} currentValue
 * @param {{ previousLapNumber: number | null | undefined, valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNLaps(currentLapNumber, currentValue, root, nValues = 3) {
  if (!root) {
    return `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`;
  }

  root["previousLapNumber"] = root["previousLapNumber"] ?? currentLapNumber;

  if (root["valuesToCycle"] === null || root["valuesToCycle"] === undefined) {
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  if (root["previousLapNumber"] !== currentLapNumber) {
    root["previousLapNumber"] = currentLapNumber;
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  return root["valuesToCycle"];
}

/**
 * @param {number | string} currentValue
 * @param {{ valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNEntries(currentValue, root, nValues = 3) {
  root["valuesToCycle"] = root["valuesToCycle"] ?? Array(nValues).fill(null);
  root["valuesToCycle"].shift();
  root["valuesToCycle"].push(currentValue);

  return root["valuesToCycle"];
}

/**
 * @param {number} currentLapNumber
 * @param {number} currentValue
 * @param {{ [x: string]: number | null | undefined; }} root
 * @param {number} decimalPrecision
 */
function deltaOverLastLap(currentLapNumber, currentValue, root, decimalPrecision = 2) {
  const inputValue = Number(currentValue);

  if (!root) {
    return `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`;
  }

  if (root["previousLapNumber"] === undefined || root["previousLapNumber"] === null) {
    root["previousLapNumber"] = currentLapNumber;
  }

  if (root["previousValue"] === undefined || root["previousValue"] === null) {
    root["previousValue"] = inputValue;
  }

  if (root["previousDiff"] === undefined || root["previousDiff"] === null) {
    root["previousDiff"] = 0;
  }

  const previousLapNumber = root["previousLapNumber"];
  const previousValue = root["previousValue"];
  const previousDiff = root["previousDiff"];

  if (previousLapNumber !== currentLapNumber) {
    const valueDiff = inputValue - previousValue;

    root["previousValue"] = inputValue;
    root["previousLapNumber"] = currentLapNumber;
    root["previousDiff"] = valueDiff;

    return numberToFixed(valueDiff, decimalPrecision);
  }

  return numberToFixed(previousDiff, decimalPrecision);
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {GameOrCarClassNullableStringRecord} map
 */
function getGameOrClassStringOverrides(currentGame, currentCarClass, map) {
  if (currentGame in map) {
    const gameMap = map[currentGame];
    if (!gameMap || typeof gameMap === "string") {
      return gameMap;
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
 * @param {GameOrCarClassLabelMapRecord} map
 *
 * @returns {LabelMap | null}
 */
function getGameOrClassLabelMapOverrides(currentGame, currentCarClass, map) {
  if (currentGame in map && map[currentGame]) {
    const gameMap = map[currentGame];

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
 * ==== 1. ERS SECTION ====
 * All hardcoded maps, labels and game properties related to ERS functionality go here
 * ========================
 */
/** @type {StringRecord} */
const ERS_MASTER_SECTION_UI_LABELS = {
  Generic: "Motor",
  Hyper: "ERS",
  GT3: "Sett",
  GTE: "Sett",
};

/**
 * ---- 1.a ERS MODE SECTION ----
 * Describes current ERS deployment mode
 */
/** @type {StringRecord} */
const AMS_ERS_MODE_LABEL_MAP = {
  1: "Off",
  2: "Build",
  3: "Balanced",
  4: "Attack",
  5: "Quali",
};
/** @type {StringRecord} */
const AC1_ERS_MODE_LABEL_MAP = {
  0: "Charging",
  1: "Low 1",
  2: "Low 2",
  3: "High 1",
  4: "High 2",
  5: "Quali",
};
/** @type {GameOrCarClassLabelMapRecord} */
const ERS_MODE_LABEL_MAP = {
  // TODO: Implement generic label map
  Generic: new LabelMap({}),
  Automobilista2: new LabelMap(AMS_ERS_MODE_LABEL_MAP),
  AssettoCorsa: new LabelMap(AC1_ERS_MODE_LABEL_MAP),
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_GAME_PROPERTY_MAP = {
  Generic: "unimplemented",
  Automobilista2: "GameRawData.mErsDeploymentMode",
  AssettoCorsa: "GameRawData.Physics.ErsPowerLevel",
  LMU: {
    Hyper: "LMU_NeoRedPlugin.Extended.VM_ELECTRIC_MOTOR_MAP",
    Generic: "LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE",
  },
};
/** @type {FunctionRecord} */
const ERS_MODE_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE": (/** @type {string} */ word) => {
    if (word.length <= 6) {
      return word.toUpperCase();
    }

    const wordSections = word.split(/[-_ ,.]/);

    return wordSections.map((word) => word.charAt(0).toUpperCase()).join("");
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_UI_PROPERTY_MAP = {
  Generic: "Mode",
  Automobilista2: "Mode",
  AssettoCorsa: "Mode",
  LMU: { Hyper: "Map" },
  ACC: "Map",
  GT3: "Map",
  GTE: "Mix",
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_POPUP_MAP = {
  Generic: "MODE",
  Automobilista2: "MODE",
  AssettoCorsa: "MODE",
  LMU: { Hyper: "MOTOR MAP" },
  ACC: "MOTOR MAP",
  GT3: "MOTOR MAP",
  GTE: "ENGINE MIX",
};

/**
 * ---- 1.b ERS SOC SECTION ----
 * Describes current ERS state of charge in % units
 */
/** @type {StringRecord} */
const ERS_SOC_GAME_PROPERTY_MAP = {
  Generic: "ERSPercent",
  Automobilista2: "ERSPercent",
  AssettoCorsa: "GameRawData.Physics.KersCharge",
  LMU: "GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction",
};
/** @type {FunctionRecord} */
const ERS_SOC_TRANSFORMATION_MAP = {
  "GameRawData.Physics.KersCharge": (/** @type {number} */ charge) => charge * 100,
  "GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction": (/** @type {number} */ charge) => charge * 100,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_SOC_UI_PROPERTY_MAP = {
  Generic: "SoC",
  Automobilista2: "SoC",
  AssettoCorsa: "SoC",
  Hyper: "SoC",
  GT3: "",
  GTE: "",
};

/**
 * ---- 1.c ERS CURRENT SECTION ----
 * Describes current state of hybrid system, e.g. whether it is deploying/recharging
 */
/** @type {Object.<string | number, string>} */
const AMS2_ERS_CURRENT_LABEL_MAP = {
  1: { label: "Idle", color: "#FFFFFFFF" },
  2: { label: "Regen", color: "#FF40E0D0" },
  3: { label: "Deploy", color: "#FFFFD700" },
};
/** @type {LabelColorRecord} */
const AC1_ERS_CURRENT_LABEL_MAP = {
  1: { label: "Idle", color: "#FFFFFFFF" },
  2: { label: "unimplemented", color: "#FFFFD700" },
  3: { label: "unimplemented", color: "#FF40E0D0" },
  4: { label: "unimplemented", color: "#FFE82222" },
  5: { label: "unimplemented", color: "#FF4B0082" },
};
/** @type {LabelColorRecord} */
const LMU_ERS_CURRENT_LABEL_MAP = {
  1: { label: "Idle", color: "#FFFFFFFF" },
  2: { label: "Deploy", color: "#FFFFD700" },
  3: { label: "Regen", color: "#FF40E0D0" },
};
/** @type {GameOrCarClassLabelMapRecord} */
const ERS_CURRENT_LABEL_MAP = {
  // TODO: Implement generic label map
  Generic: new LabelMap({}),
  Automobilista2: new LabelMap(AMS2_ERS_CURRENT_LABEL_MAP),
  AssettoCorsa: new LabelMap(AC1_ERS_CURRENT_LABEL_MAP),
  LMU: new LabelMap(LMU_ERS_CURRENT_LABEL_MAP),
};
/** @type {StringRecord} */
const ERS_CURRENT_GAME_PROPERTY_MAP = {
  Generic: "unimplemented",
  Automobilista2: "GameRawData.mErsDeploymentMode",
  AssettoCorsa: "GameRawData.mErsDeploymentMode",
  LMU: "GameRawData.CurrentPlayerTelemetry.mElectricBoostMotorState",
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_CURRENT_UI_PROPERTY_MAP = {
  Generic: "ERS",
  Automobilista2: "ERS",
  AssettoCorsa: "ERS",
  Hyper: "ERS",
  GTE: "",
  GT3: "",
};

/**
 * ---- 1.d ERS RECOVERY SECTION ----
 * Describes current ERS deployment mode
 */

/** @type {StringRecord} */
const ERS_RECOVERY_GAME_PROPERTY_MAP = {
  Generic: "unimplemented",
  LMU: "LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL",
};
/** @type {FunctionRecord} */
const ERS_RECOVERY_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL": (/** @type {string} */ charge) => (charge === "N/A" ? "-" : charge),
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_RECOVERY_UI_PROPERTY_MAP = {
  Generic: "RCV",
  Automobilista2: "RCV",
  AssettoCorsa: "RCV",
  Hyper: "RGN",
  GTE: "",
  GT3: "",
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_RECOVERY_POPUP_MAP = {
  Generic: "ERS RECOVERY",
  Automobilista2: "ERS RECOVERY",
  AssettoCorsa: "ERS RECOVERY",
  LMU: { Hyper: "REGEN LEVEL" },
};

/**
 * ---- 1.e ERS DELTA SECTION ----
 * Describes ERS delta to last lap
 */
/**
 * Use the SOC as the base for the ERS Delta calculation
 *  */
const ERS_DELTA_GAME_PROPERTY_MAP = ERS_SOC_GAME_PROPERTY_MAP;
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_DELTA_UI_PROPERTY_MAP = {
  Generic: "Δ",
  Automobilista2: "Δ",
  AssettoCorsa: "Δ",
  Hyper: "Δ",
  GT3: "",
  GTE: "",
};
/**
 * Use the SOC as the base for the ERS LLap calculation
 *  */
const ERS_DELTA_TRANSFORMATION_MAP = ERS_SOC_TRANSFORMATION_MAP;

/**
 * ---- 1.f ERS LAP SECTION ----
 * Describes state of ERS at the moment of the last lap
 */
/**
 * Use the SOC as the base for the ERS LLap calculation
 *  */
const ERS_LAP_GAME_PROPERTY_MAP = ERS_SOC_GAME_PROPERTY_MAP;
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_LAP_UI_PROPERTY_MAP = {
  Generic: "Lap",
  Automobilista2: "LLap",
  AssettoCorsa: "Lap",
  Hyper: "LLap",
  GTE: "",
  GT3: "",
};
/**
 * Use the SOC as the base for the ERS LLap calculation
 *  */
const ERS_LAP_TRANSFORMATION_MAP = ERS_SOC_TRANSFORMATION_MAP;

/**
 * ==== 2. CAR CONTROL SECTION ====
 * All hardcoded maps, labels and game properties related to car control functionality go here
 * ========================
 */
/** @type {StringRecord} */
const CAR_CONTROL_MASTER_SECTION_UI_LABELS = {
  Generic: "Control",
  GTE: "Elec",
  GT3: "Elec",
};
/**
 * ---- 2.a TRACTION CONTROL SECTION ----
 * Describes current TC level
 */
/** @type {StringRecord} */
const TC_GAME_PROPERTY_MAP = {
  Generic: "TCLevel",
  Automobilista2: "TCLevel",
  AssettoCorsa: "TCLevel",
  LMU: "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_UI_PROPERTY_MAP = {
  Generic: "TC",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_POPUP_MAP = {
  Generic: "TC LEVEL",
};
/** @type {FunctionRecord} */
const TC_TRANSFORMATION_MAP = {
  /**
   * @param {string} rawTcLevel
   */
  "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP": (rawTcLevel) => {
    if (rawTcLevel.includes("OFF")) {
      return "OFF";
    }

    const labelIndex = rawTcLevel.indexOf("(");
    const label = rawTcLevel[labelIndex + 1];
    const tcLevel = parseInt(rawTcLevel);

    if (!tcLevel) {
      return "OFF";
    }

    return labelIndex > 0 ? `${tcLevel} (${label})` : tcLevel;
  },
};
/**
 * ---- 2.b TC SLIP SECTION ----
 * Describes current TC slip level
 */
/** @type {StringRecord} */
const TC_SLIP_GAME_PROPERTY_MAP = {
  LMU: "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLSLIPANGLEMAP",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_SLIP_UI_PROPERTY_MAP = {
  Generic: "SLIP",
  ACC: "TC1",
  iRacing: "TC1",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_SLIP_POPUP_MAP = {
  Generic: "TC SLIP LEVEL",
  ACC: "TC1 LEVEL",
  iRacing: "TC1 LEVEL",
};
/**
 * ---- 2.c TC CUT SECTION ----
 * Describes current TC cut level
 */
/** @type {StringRecord} */
const TC_CUT_GAME_PROPERTY_MAP = {
  LMU: "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLPOWERCUTMAP",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_CUT_UI_PROPERTY_MAP = {
  Generic: "CUT",
  ACC: "TC2",
  iRacing: "TC2",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_CUT_POPUP_MAP = {
  Generic: "TC CUT LEVEL",
  ACC: "TC2 LEVEL",
  iRacing: "TC2 LEVEL",
};
/**
 * ---- 2.d ABS SECTION ----
 * Describes current ABS level
 */
/** @type {StringRecord} */
const ABS_GAME_PROPERTY_MAP = {
  Generic: "ABSLevel",
  LMU: "LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP",
};
/** @type {FunctionRecord} */
const ABS_TRANSFORMATION_MAP = {
  /**
   * @param {string} rawAbsLevel
   */
  "LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP": (rawAbsLevel) => {
    if (rawAbsLevel.includes("OFF")) {
      return "OFF";
    }

    const labelIndex = rawAbsLevel.indexOf("(");
    const label = rawAbsLevel[labelIndex + 1];
    const absLevel = parseInt(rawAbsLevel);

    if (!absLevel) {
      return "OFF";
    }

    return labelIndex > 0 ? `${absLevel} (${label})` : absLevel;
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const ABS_UI_PROPERTY_MAP = {
  Generic: "ABS",
  Hyper: "",
};
/** @type {GameOrCarClassNullableStringRecord} */
const ABS_POPUP_MAP = {
  Generic: "ABS LEVEL",
};
/**
 * ---- 2.e BRAKE BIAS SECTION ----
 * Describes current brake bias
 */
/** @type {StringRecord} */
const BB_GAME_PROPERTY_MAP = {
  Generic: "BrakeBias",
};
/** @type {GameOrCarClassNullableStringRecord} */
const BB_UI_PROPERTY_MAP = {
  Generic: "BB",
};
/** @type {GameOrCarClassNullableStringRecord} */
const BB_POPUP_MAP = {
  Generic: "BRAKE BIAS",
};
/**
 * ---- 2.f BRAKE MIGRATION SECTION ----
 * Describes current brake migration setting
 */
/** @type {StringRecord} */
const BM_GAME_PROPERTY_MAP = {
  Generic: "LMU_NeoRedPlugin.Extended.VM_BRAKE_MIGRATION",
};
/** @type {GameOrCarClassNullableStringRecord} */
const BM_UI_PROPERTY_MAP = {
  Generic: "",
  LMU: { GTE: "BM", GT3: "BM" },
};
/** @type {GameOrCarClassNullableStringRecord} */
const BM_POPUP_MAP = {
  Generic: "BRK MIGRATION",
};

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 */
function getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode) {
  // 1
  const ersMasterSectionUiLabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MASTER_SECTION_UI_LABELS
  );

  // 1.a
  const ersModeGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_MODE_GAME_PROPERTY_MAP);
  const ersModeLabelMap = getGameOrClassLabelMapOverrides(currentGame, currentCarClass, ERS_MODE_LABEL_MAP);
  const ersModeUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_MODE_UI_PROPERTY_MAP);
  const ersModePopupMap = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_MODE_POPUP_MAP);

  // 1.b
  const ersSocGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_SOC_GAME_PROPERTY_MAP);
  const ersSocUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_SOC_UI_PROPERTY_MAP);

  // 1.c
  const ersCurrentGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_GAME_PROPERTY_MAP
  );
  const ersCurrentLabel = getGameOrClassLabelMapOverrides(currentGame, currentCarClass, ERS_CURRENT_LABEL_MAP);
  const ersCurrentUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_CURRENT_UI_PROPERTY_MAP);

  // 1.d
  const ersRecoveryGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_GAME_PROPERTY_MAP
  );
  const ersRecoveryUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_UI_PROPERTY_MAP
  );
  const ersRecoveryPopupMap = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_RECOVERY_POPUP_MAP);

  // 1.e
  const ersDeltaGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_DELTA_GAME_PROPERTY_MAP);
  const ersDeltaUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_DELTA_UI_PROPERTY_MAP);

  // 1.f
  const ersLapGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_LAP_GAME_PROPERTY_MAP);
  const ersLapUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_LAP_UI_PROPERTY_MAP);

  // 2
  const carControlMasterSectionUILabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    CAR_CONTROL_MASTER_SECTION_UI_LABELS
  );
  // 2.a
  const tcGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_GAME_PROPERTY_MAP);
  const tcUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_UI_PROPERTY_MAP);
  const tcPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_POPUP_MAP);
  // 2.b
  const tcSlipGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_SLIP_GAME_PROPERTY_MAP);
  const tcSlipUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_SLIP_UI_PROPERTY_MAP);
  const tcSlipPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_SLIP_POPUP_MAP);
  // 2.c
  const tcCutGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_CUT_GAME_PROPERTY_MAP);
  const tcCutUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_CUT_UI_PROPERTY_MAP);
  const tcCutPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_CUT_POPUP_MAP);
  // 2.d
  const absGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ABS_GAME_PROPERTY_MAP);
  const absUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ABS_UI_PROPERTY_MAP);
  const absPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, ABS_POPUP_MAP);
  // 2.e
  const brakeBiasGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, BB_GAME_PROPERTY_MAP);
  const brakeBiasUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, BB_UI_PROPERTY_MAP);
  const brakeBiasPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, BB_POPUP_MAP);
  // 2.f
  const brakeMigrationGameProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, BM_GAME_PROPERTY_MAP);
  const brakeMigrationUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, BM_UI_PROPERTY_MAP);
  const brakeMigrationPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, BM_POPUP_MAP);

  const resultMaps = {
    masterSectionUiLabels: {
      ers: ersMasterSectionUiLabels,
      carControl: carControlMasterSectionUILabels,
    },
    labelMaps: {
      ers: {
        ersMode: ersModeLabelMap ?? (ERS_MODE_LABEL_MAP.Generic || {}),
        ersSoc: {},
        ersCurrent: ersCurrentLabel ?? (ERS_CURRENT_LABEL_MAP.Generic || {}),
        ersRecovery: {},
        ersDelta: {},
        ersLap: {},
      },
      carControl: {
        tc: {},
        tcCut: {},
        tcSlip: {},
        abs: {},
        brakeBias: {},
        brakeMigration: {},
      },
    },
    gameProperties: {
      ers: {
        ersMode: ersModeGameProperty ?? (ERS_MODE_GAME_PROPERTY_MAP.Generic || {}),
        ersSoc: ersSocGameProperty ?? (ERS_SOC_GAME_PROPERTY_MAP.Generic || {}),
        ersCurrent: ersCurrentGameProperty ?? (ERS_CURRENT_GAME_PROPERTY_MAP.Generic || {}),
        ersRecovery: ersRecoveryGameProperty ?? (ERS_RECOVERY_GAME_PROPERTY_MAP.Generic || {}),
        ersDelta: ersDeltaGameProperty ?? (ERS_DELTA_GAME_PROPERTY_MAP.Generic || {}),
        ersLap: ersLapGameProperty ?? (ERS_LAP_GAME_PROPERTY_MAP.Generic || {}),
      },
      carControl: {
        tc: tcGameProperty ?? (TC_GAME_PROPERTY_MAP.Generic || {}),
        tcSlip: tcSlipGameProperty ?? (TC_SLIP_GAME_PROPERTY_MAP.Generic || {}),
        tcCut: tcCutGameProperty ?? (TC_CUT_GAME_PROPERTY_MAP.Generic || {}),
        abs: absGameProperty ?? (ABS_GAME_PROPERTY_MAP.Generic || {}),
        brakeBias: brakeBiasGameProperty ?? (BB_GAME_PROPERTY_MAP.Generic || {}),
        brakeMigration: brakeMigrationGameProperty ?? (BM_GAME_PROPERTY_MAP.Generic || {}),
      },
    },
    transformations: {
      ers: {
        ersMode: ERS_MODE_TRANSFORMATION_MAP,
        ersSoc: ERS_SOC_TRANSFORMATION_MAP,
        ersCurrent: {},
        ersRecovery: ERS_RECOVERY_TRANSFORMATION_MAP,
        ersDelta: ERS_DELTA_TRANSFORMATION_MAP,
        ersLap: ERS_LAP_TRANSFORMATION_MAP,
      },
      carControl: {
        tc: TC_TRANSFORMATION_MAP,
        tcCut: {},
        tcSlip: {},
        abs: ABS_TRANSFORMATION_MAP,
        brakeBias: {},
        brakeMigration: {},
      },
    },
    uiLabels: {
      ers: {
        ersMode: ersModeUiProperty ?? (ERS_MODE_UI_PROPERTY_MAP.Generic || {}),
        ersSoc: ersSocUiProperty ?? (ERS_SOC_UI_PROPERTY_MAP.Generic || {}),
        ersCurrent: ersCurrentUiProperty ?? (ERS_CURRENT_UI_PROPERTY_MAP.Generic || {}),
        ersRecovery: ersRecoveryUiProperty ?? (ERS_RECOVERY_UI_PROPERTY_MAP.Generic || {}),
        ersDelta: ersDeltaUiProperty ?? (ERS_DELTA_UI_PROPERTY_MAP.Generic || {}),
        ersLap: ersLapUiProperty ?? (ERS_LAP_UI_PROPERTY_MAP.Generic || {}),
      },
      carControl: {
        tc: tcUiProperty ?? (TC_UI_PROPERTY_MAP.Generic || {}),
        tcCut: tcCutUiProperty ?? (TC_CUT_UI_PROPERTY_MAP.Generic || {}),
        tcSlip: tcSlipUiProperty ?? (TC_SLIP_UI_PROPERTY_MAP.Generic || {}),
        abs: absUiProperty ?? (ABS_UI_PROPERTY_MAP.Generic || {}),
        brakeBias: brakeBiasUiProperty ?? (BB_UI_PROPERTY_MAP.Generic || {}),
        brakeMigration: brakeMigrationUiProperty ?? (BM_UI_PROPERTY_MAP.Generic || {}),
      },
    },
    popupLabels: {
      ers: {
        ersMode: ersModePopupMap ?? (ERS_MODE_POPUP_MAP.Generic || {}),
        ersSoc: {},
        ersCurrent: {},
        ersRecovery: ersRecoveryPopupMap ?? (ERS_RECOVERY_POPUP_MAP || {}),
        ersDelta: {},
        ersLap: {},
      },
      carControl: {
        tc: tcPopup ?? (TC_POPUP_MAP.Generic || {}),
        tcCut: tcCutPopup ?? (TC_CUT_POPUP_MAP.Generic || {}),
        tcSlip: tcSlipPopup ?? (TC_SLIP_POPUP_MAP.Generic || {}),
        abs: absPopup ?? (ABS_POPUP_MAP.Generic || {}),
        brakeBias: brakeBiasPopup ?? (BB_POPUP_MAP.Generic || {}),
        brakeMigration: brakeMigrationPopup ?? (BM_POPUP_MAP.Generic || {}),
      },
    },
  };

  return {
    availableValues: debugMode
      ? JSON.stringify(resultMaps, null, 2)
      : "To see possible mappings, activate debug mode by passing `debugMode = true` to this function, as such: `getTelemetryLabelsAndValues(currentGame, currentCar, true)`",
    ...resultMaps,
  };
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 */
function getPropertyValue(currentGame, currentCarClass, section, property, debugMode) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined || propertyKey === null) {
    return `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``;
  }

  // Return identity function if transformation is undefined
  /** @type function(any): any */
  const transformation = telemetry.transformations[section][property][propertyKey] ?? ((prop) => prop);

  return { property: propertyKey, transformation };
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string} section
 * @param {boolean} debugMode
 */
function getMasterSectionLabel(currentGame, currentCarClass, section, debugMode) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.masterSectionUiLabels[section];

  if (label === undefined || label === null) {
    return `${section} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``;
  }

  return label;
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 */
function getPropertyPopupLabel(currentGame, currentCarClass, section, property, debugMode) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.popupLabels[section][property];

  if (label === undefined || label === null) {
    return `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``;
  }

  return label;
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 */
function getPropertyUILabel(currentGame, currentCarClass, section, property, debugMode) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.uiLabels[section][property];

  if (label === undefined || label === null) {
    return `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``;
  }

  return label;
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 */
function getPropertyValue(currentGame, currentCarClass, section, property, debugMode) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined || propertyKey === null) {
    return `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``;
  }

  const labelMap = telemetry.labelMaps[section][property];

  // Return identity function if transformation is undefined
  /** @type function(any): any */
  const transformation = telemetry.transformations[section][property][propertyKey] ?? ((prop) => prop);

  return { property: propertyKey, transformation, labelMap };
}
