// @ts-check
"use strict";

/**
 * ==== 10. OUTPUT SECTION ====
 * Master output function, this is the underlying function called by every other function on SimHub's side, which exposes everything in this file based on current car/class/car id
 * ========================
 */

/**
 * ---- 10.a MASTER OUTPUT FUNCTION ----
 */
const GETTER_MAPPING = {
  labelMaps: getGameOrClassLabelMapOverrides,
  gameProperties: getGameOrClassStringOverrides,
  uiLabels: getGameOrClassStringOverrides,
  popupLabels: getGameOrClassStringOverrides,
  optimalRanges: getGameOrClassNumberOverrides,
  colors: getGameOrClassStringOverrides,
};

/**
 * @param {{ [key: string]: unknown }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentCarId
 * @param {string | undefined} selectedTyre
 * @param {string | undefined} tyreType
 * @param {number | undefined} currentLap
 * @param {Object | undefined} root
 * @param {boolean} debugMode
 * @param {string | undefined} masterSection
 * @returns {any}
 */
function getTelemetryLabelsAndValuesFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId = undefined,
  debugMode = false,
  selectedTyre = undefined,
  tyreType = undefined,
  currentLap = undefined,
  root = undefined,
  masterSection = undefined
) {
  let resultMaps = {};

  if (root && root.telemetryCache) {
    return root.telemetryCache;
  }

  try {
    resultMaps = {
      ...Object.fromEntries(
        Object.entries(configContents)
          .filter(([topLevelKey]) => topLevelKey !== "masterSectionUiLabels")
          .map(([topLevelKey, sections]) => [
            topLevelKey,
            Object.fromEntries(
              Object.entries(sections).map(([sectionKey, section]) => [
                sectionKey,
                sectionKey === masterSection
                  ? Object.fromEntries(
                      Object.entries(section).map(([subSectionKey, subSection]) => {
                        if (topLevelKey === "transformations") {
                          return [subSectionKey, subSection];
                        }

                        if (topLevelKey === "optimalRanges") {
                          const subSectionResult = Object.fromEntries(
                            Object.entries(subSection).map(([optimalRangeKey, optimalRangeSection]) => {
                              if (optimalRangeKey === "primaryMetric") {
                                return [
                                  optimalRangeKey,
                                  getGameOrClassStringOverrides(
                                    currentGame,
                                    currentCarClass,
                                    optimalRangeSection,
                                    currentCarId,
                                    tyreType || selectedTyre
                                  ),
                                ];
                              }

                              const optimalRangeSubsectionResult = Object.fromEntries(
                                Object.entries(optimalRangeSection).map(
                                  ([optimalRangeSectionKey, optimalRangeSubSection]) => [
                                    optimalRangeSectionKey,
                                    optimalRangeSectionKey === "property"
                                      ? getGameOrClassStringOverrides(
                                          currentGame,
                                          currentCarClass,
                                          optimalRangeSubSection,
                                          currentCarId,
                                          tyreType || selectedTyre
                                        )
                                      : getGameOrClassNumberOverrides(
                                          currentGame,
                                          currentCarClass,
                                          optimalRangeSubSection,
                                          currentCarId,
                                          tyreType || selectedTyre
                                        ),
                                  ]
                                )
                              );

                              return [optimalRangeKey, optimalRangeSubsectionResult];
                            })
                          );

                          return [subSectionKey, subSectionResult];
                        }

                        const sectionGetter = GETTER_MAPPING[topLevelKey];

                        if (typeof sectionGetter !== "function") {
                          throw new Error(
                            `Section getter does not exist for ${topLevelKey}:${subSectionKey}. Double-check the configuration file.`
                          );
                        }
                        if (topLevelKey === "colors" && typeof subSection === "object") {
                          return [
                            subSectionKey,
                            Object.fromEntries(
                              Object.entries(subSection).map(([colorKey, colorMap]) => [
                                colorKey,
                                sectionGetter(currentGame, currentCarClass, colorMap, currentCarId, selectedTyre),
                              ])
                            ),
                          ];
                        }

                        return [
                          subSectionKey,
                          typeof subSection === "object"
                            ? sectionGetter(currentGame, currentCarClass, subSection, currentCarId, selectedTyre)
                            : subSection,
                        ];
                      })
                    )
                  : undefined,
              ])
            ),
          ])
      ),
      masterSectionUiLabels: Object.fromEntries(
        Object.entries(configContents.masterSectionUiLabels).map(([key, value]) => [
          key,
          getGameOrClassStringOverrides(currentGame, currentCarClass, value, currentCarId, selectedTyre),
        ])
      ),
    };
  } catch (e) {
    if (e.message !== "Early break") {
      throw new Error(e);
    }
  } finally {
    let output = {
      availableValues: debugMode
        ? JSON.stringify(resultMaps, null, 2)
        : "To see possible mappings, activate debug mode by passing `debugMode = true` to this function, as such: `getTelemetryLabelsAndValues(currentGame, currentCar, true)`",
      ...resultMaps,
    };

    if (!root) {
      return output;
    }

    root.telemetryCache = output;

    return root.telemetryCache;
  }
}
