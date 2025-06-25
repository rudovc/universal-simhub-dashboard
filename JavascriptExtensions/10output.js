// @ts-check
"use strict";

/**
 * ==== 10. OUTPUT SECTION ====
 * Master output function, this is the underlying function called by every other function on SimHub's side, which exposes everything in this file based on current car/class/car id
 * !!! YOU **MUST** ADD NEW VALUES TO THE OUTPUT OF `getTelemetryLabelsAndValues` IF YOU ADD NEW MAPPING SECTIONS !!!
 * ========================
 */

/**
 * ---- 10.a MASTER OUTPUT FUNCTION ----
 */

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 * @param {string | undefined} currentTyre
 */
function getTelemetryLabelsAndValues(
  currentGame,
  currentCarClass,
  debugMode = false,
  currentCarId = undefined,
  currentTyre = undefined,
  currentLap = undefined,
  root = undefined
) {
  // 6.a
  const frontLeftBrakeTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FL_BRAKE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 6.b
  const frontRightBrakeTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FR_BRAKE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 6.c
  const rearLeftBrakeTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RL_BRAKE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 6.d
  const rearRightBrakeTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RR_BRAKE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 6.e
  const optimalBrakeTempRanges = getGameOrClassNumberOverrides(
    currentGame,
    currentCarClass,
    IDEAL_BRAKE_TEMP_RANGES_MAP,
    currentCarId,
    currentTyre
  );

  const resultMaps = {
    labelMaps: {
      fuel: {
        fuelState: null,
        fuelUsage: null,
        fuelTime: null,
        fuelLaps: null,
        fuelDelta: null,
        nrgState: null,
        nrgUsage: null,
      },
      tyre: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
        flWear: null,
        frWear: null,
        rlWear: null,
        rrWear: null,
        flPres: null,
        frPres: null,
        rlPres: null,
        rrPres: null,
      },
      brake: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
      },
    },
    gameProperties: {
      brake: {
        flTemp: frontLeftBrakeTemperatureGameProperty,
        frTemp: frontRightBrakeTemperatureGameProperty,
        rlTemp: rearLeftBrakeTemperatureGameProperty,
        rrTemp: rearRightBrakeTemperatureGameProperty,
      },
    },
    transformations: {
      tyre: {
        flTemp: FL_TYRE_TEMP_TRANSFORMATION_MAP,
        frTemp: FR_TYRE_TEMP_TRANSFORMATION_MAP,
        rlTemp: RL_TYRE_TEMP_TRANSFORMATION_MAP,
        rrTemp: RR_TYRE_TEMP_TRANSFORMATION_MAP,
        flWear: FL_TYRE_WEAR_TRANSFORMATION_MAP,
        frWear: FR_TYRE_WEAR_TRANSFORMATION_MAP,
        rlWear: RL_TYRE_WEAR_TRANSFORMATION_MAP,
        rrWear: RR_TYRE_WEAR_TRANSFORMATION_MAP,
        flPres: FL_TYRE_PRES_TRANSFORMATION_MAP,
        frPres: FR_TYRE_PRES_TRANSFORMATION_MAP,
        rlPres: RL_TYRE_PRES_TRANSFORMATION_MAP,
        rrPres: RR_TYRE_PRES_TRANSFORMATION_MAP,
        wear: WEAR_TRANSFORMATION_PER_GAME_MAP,
      },
      brake: {
        flTemp: FL_BRAKE_TEMP_TRANSFORMATION_MAP,
        frTemp: FR_BRAKE_TEMP_TRANSFORMATION_MAP,
        rlTemp: RL_BRAKE_TEMP_TRANSFORMATION_MAP,
        rrTemp: RR_BRAKE_TEMP_TRANSFORMATION_MAP,
      },
    },
    uiLabels: {
      tyre: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
        flWear: null,
        frWear: null,
        rlWear: null,
        rrWear: null,
        flPres: null,
        frPres: null,
        rlPres: null,
        rrPres: null,
      },
      brake: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
      },
    },
    popupLabels: {
      fuel: {
        fuelState: null,
        fuelUsage: null,
        fuelTime: null,
        fuelLaps: null,
        fuelDelta: null,
        nrgState: null,
        nrgUsage: null,
      },
      tyre: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
        flWear: null,
        frWear: null,
        rlWear: null,
        rrWear: null,
        flPres: null,
        frPres: null,
        rlPres: null,
        rrPres: null,
      },
      brake: {
        flTemp: null,
        frTemp: null,
        rlTemp: null,
        rrTemp: null,
      },
    },
    optimalRanges: {
      brake: {
        flTemp: optimalBrakeTempRanges,
        frTemp: optimalBrakeTempRanges,
        rlTemp: optimalBrakeTempRanges,
        rrTemp: optimalBrakeTempRanges,
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

const GETTER_MAPPING = {
  labelMaps: getGameOrClassStringOverrides,
  gameProperties: getGameOrClassStringOverrides,
  uiLabels: getGameOrClassStringOverrides,
  popupLabels: getGameOrClassStringOverrides,
  optimalRanges: getGameOrClassNumberOverrides,
};

/**
 * @param {{ [key: string]: unknown }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentCarId
 * @param {string | undefined} currentTyre
 * @param {boolean} debugMode
 * @returns {any}
 */
function getTelemetryLabelsAndValuesFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId = undefined,
  debugMode = false,
  currentTyre = undefined,
  currentLap = undefined,
  root = undefined
) {
  const resultMaps = {
    ...Object.fromEntries(
      Object.entries(configContents)
        .filter(([topLevelKey]) => topLevelKey !== "masterSectionUiLabels")
        .map(([topLevelKey, sections]) => [
          topLevelKey,
          Object.fromEntries(
            Object.entries(sections).map(([sectionKey, section]) => [
              sectionKey,
              Object.fromEntries(
                Object.entries(section).map(([subSectionKey, subSection]) => {
                  if (topLevelKey === "transformations") {
                    return [subSectionKey, subSection];
                  }

                  if (topLevelKey === "optimalRanges") {
                    // TODO: Finish optimal ranges mapping.
                    // subSectionKey here is "ideal"
                    // its children are "primaryMetric", "temp", "wear", "pres"
                    // Handle the cases
                    return [subSectionKey, subSection];
                  }

                  const sectionGetter = GETTER_MAPPING[topLevelKey];

                  if (typeof sectionGetter !== "function") {
                    throw new Error(
                      `Section getter does not exist for ${topLevelKey}:${subSectionKey}. Double-check the configuration file.`
                    );
                  }

                  return [
                    subSectionKey,
                    typeof subSection === "object"
                      ? sectionGetter(currentGame, currentCarClass, subSection, currentCarId, currentTyre)
                      : subSection,
                  ];
                })
              ),
            ])
          ),
        ])
    ),
    masterSectionUiLabels: Object.fromEntries(
      Object.entries(configContents.masterSectionUiLabels).map(([key, value]) => [
        key,
        getGameOrClassStringOverrides(currentGame, currentCarClass, value, currentCarId, currentTyre),
      ])
    ),
  };

  return resultMaps;

  return {
    availableValues: debugMode
      ? JSON.stringify(resultMaps, null, 2)
      : "To see possible mappings, activate debug mode by passing `debugMode = true` to this function, as such: `getTelemetryLabelsAndValues(currentGame, currentCar, true)`",
    ...resultMaps,
  };
}
