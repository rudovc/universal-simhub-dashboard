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
  // 1
  const ersMasterSectionUiLabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MASTER_SECTION_UI_LABELS,
    currentCarId
  );
  // 1.a
  const ersModeGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersModeLabelMap = getGameOrClassLabelMapOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_LABEL_MAP,
    currentCarId
  );
  const ersModeUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_UI_PROPERTY_MAP,
    currentCarId
  );
  const ersModePopupMap = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_MODE_POPUP_MAP, currentCarId);
  // 1.b
  const ersSocGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_SOC_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersSocUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_SOC_UI_PROPERTY_MAP,
    currentCarId
  );
  // 1.c
  const ersCurrentGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersCurrentLabel = getGameOrClassLabelMapOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_LABEL_MAP,
    currentCarId
  );
  const ersCurrentUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_UI_PROPERTY_MAP,
    currentCarId
  );
  // 1.d
  const ersRecoveryGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersRecoveryUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_UI_PROPERTY_MAP,
    currentCarId
  );
  const ersRecoveryPopupMap = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_POPUP_MAP,
    currentCarId
  );
  // 1.e
  const ersDeltaGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_DELTA_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersDeltaUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_DELTA_UI_PROPERTY_MAP,
    currentCarId
  );
  // 1.f
  const ersLapGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_LAP_GAME_PROPERTY_MAP,
    currentCarId
  );
  const ersLapUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_LAP_UI_PROPERTY_MAP,
    currentCarId
  );

  // 2
  const carControlMasterSectionUILabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    CAR_CONTROL_MASTER_SECTION_UI_LABELS,
    currentCarId
  );
  // 2.a
  const tcGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TC_GAME_PROPERTY_MAP,
    currentCarId
  );
  const tcUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_UI_PROPERTY_MAP, currentCarId);
  const tcPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_POPUP_MAP, currentCarId);
  // 2.b
  const tcSlipGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TC_SLIP_GAME_PROPERTY_MAP,
    currentCarId
  );
  const tcSlipUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TC_SLIP_UI_PROPERTY_MAP,
    currentCarId
  );
  const tcSlipPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_SLIP_POPUP_MAP, currentCarId);
  // 2.c
  const tcCutGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TC_CUT_GAME_PROPERTY_MAP,
    currentCarId
  );
  const tcCutUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TC_CUT_UI_PROPERTY_MAP,
    currentCarId
  );
  const tcCutPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, TC_CUT_POPUP_MAP, currentCarId);
  // 2.d
  const absLabelMap = getGameOrClassLabelMapOverrides(currentGame, currentCarClass, ABS_LABEL_MAP, currentCarId);
  const absGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ABS_GAME_PROPERTY_MAP,
    currentCarId
  );
  const absUiProperty = getGameOrClassStringOverrides(currentGame, currentCarClass, ABS_UI_PROPERTY_MAP, currentCarId);
  const absPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, ABS_POPUP_MAP, currentCarId);
  // 2.e
  const brakeBiasGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    BB_GAME_PROPERTY_MAP,
    currentCarId
  );
  const brakeBiasUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    BB_UI_PROPERTY_MAP,
    currentCarId
  );
  const brakeBiasPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, BB_POPUP_MAP, currentCarId);
  // 2.f
  const brakeMigrationGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    BM_GAME_PROPERTY_MAP,
    currentCarId
  );
  const brakeMigrationUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    BM_UI_PROPERTY_MAP,
    currentCarId
  );
  const brakeMigrationPopup = getGameOrClassStringOverrides(currentGame, currentCarClass, BM_POPUP_MAP, currentCarId);

  // 3
  const fuelMasterSectionUILabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_MASTER_SECTION_UI_LABELS,
    currentCarId
  );
  // 3.a
  const fuelStateGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_STATE_GAME_PROPERTY_MAP,
    currentCarId
  );
  const fuelStateUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_STATE_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.b
  const fuelUsageGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_USAGE_GAME_PROPERTY_MAP,
    currentCarId
  );
  const fuelUsageUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_USAGE_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.c
  const fuelTimeGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_TIME_GAME_PROPERTY_MAP,
    currentCarId
  );
  const fuelTimeUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_TIME_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.d
  const fuelLapsGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_LAPS_GAME_PROPERTY_MAP,
    currentCarId
  );
  const fuelLapsUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_LAPS_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.e
  const fuelDeltaGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_DELTA_GAME_PROPERTY_MAP,
    currentCarId
  );
  const fuelDeltaUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FUEL_DELTA_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.f
  const nrgStateGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    NRG_STATE_GAME_PROPERTY_MAP,
    currentCarId
  );
  const nrgStateUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    NRG_STATE_UI_PROPERTY_MAP,
    currentCarId
  );
  // 3.g
  const nrgUsageGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    NRG_USAGE_GAME_PROPERTY_MAP,
    currentCarId
  );
  const nrgUsageUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    NRG_USAGE_UI_PROPERTY_MAP,
    currentCarId
  );

  // 4
  const tempMasterSectionUILabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    TEMP_MASTER_SECTION_UI_LABELS,
    currentCarId
  );
  // 4.a
  const oilTempGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    OIL_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  const oilTempUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    OIL_TEMP_UI_PROPERTY_MAP,
    currentCarId
  );
  // 4.b
  const waterTempGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    WATER_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  const waterTempUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    WATER_TEMP_UI_PROPERTY_MAP,
    currentCarId
  );
  // 4.c
  const engineTempGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ENGINE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  const engineTempUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ENGINE_TEMP_UI_PROPERTY_MAP,
    currentCarId
  );

  // 5.a
  const frontLeftTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FL_TYRE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.b
  const frontLeftWearGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FL_TYRE_WEAR_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.c
  const frontLeftPressureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FL_TYRE_PRES_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.d
  const frontRightTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FR_TYRE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.e
  const frontRightWearGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FR_TYRE_WEAR_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.f
  const frontRightPressureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FR_TYRE_PRES_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.g
  const rearLeftTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RL_TYRE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.h
  const rearLeftWearGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RL_TYRE_WEAR_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.i
  const rearLeftPressureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RL_TYRE_PRES_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.j
  const rearRightTemperatureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RR_TYRE_TEMP_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.k
  const rearRightWearGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RR_TYRE_WEAR_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.l
  const rearRightPressureGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RR_TYRE_PRES_GAME_PROPERTY_MAP,
    currentCarId
  );
  // 5.n
  const primaryTyreMetric = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    PRIMARY_TYRE_METRIC_PER_GAME_MAP,
    currentCarId,
    currentTyre
  );
  const optimalTyreTempProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    IDEAL_TYRE_TEMP_GAME_PROPERTY_MAP,
    currentCarId,
    currentTyre
  );
  const optimalTyreTempRanges = getGameOrClassNumberOverrides(
    currentGame,
    currentCarClass,
    IDEAL_TYRE_TEMP_RANGES_MAP,
    currentCarId,
    currentTyre
  );
  const optimalTyreWearRanges = getGameOrClassNumberOverrides(
    currentGame,
    currentCarClass,
    IDEAL_TYRE_WEAR_RANGES_MAP,
    currentCarId,
    currentTyre
  );
  const optimalTyrePresRanges = getGameOrClassNumberOverrides(
    currentGame,
    currentCarClass,
    IDEAL_TYRE_PRES_RANGES_MAP,
    currentCarId,
    currentTyre
  );
  // 5.o
  const frontLeftTyreTypeProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FL_TYRE_TYPE_GAME_PROPERTY_MAP,
    currentCarClass
  );
  // 5.p
  const frontRightTyreTypeProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    FR_TYRE_TYPE_GAME_PROPERTY_MAP,
    currentCarClass
  );
  // 5.q
  const rearLeftTyreTypeProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RL_TYRE_TYPE_GAME_PROPERTY_MAP,
    currentCarClass
  );
  // 5.r
  const rearRightTyreTypeProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    RR_TYRE_TYPE_GAME_PROPERTY_MAP,
    currentCarClass
  );

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
    masterSectionUiLabels: {
      ers: ersMasterSectionUiLabels,
      carControl: carControlMasterSectionUILabels,
      fuel: fuelMasterSectionUILabels,
      temperature: tempMasterSectionUILabels,
    },
    labelMaps: {
      ers: {
        ersMode: ersModeLabelMap,
        ersSoc: null,
        ersCurrent: ersCurrentLabel,
        ersRecovery: null,
        ersDelta: null,
        ersLap: null,
      },
      carControl: {
        tc: null,
        tcCut: null,
        tcSlip: null,
        abs: absLabelMap,
        brakeBias: null,
        brakeMigration: null,
      },
      fuel: {
        fuelState: null,
        fuelUsage: null,
        fuelTime: null,
        fuelLaps: null,
        fuelDelta: null,
        nrgState: null,
        nrgUsage: null,
      },
      temperature: {
        oil: null,
        water: null,
        engine: null,
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
      ers: {
        ersMode: ersModeGameProperty,
        ersSoc: ersSocGameProperty,
        ersCurrent: ersCurrentGameProperty,
        ersRecovery: ersRecoveryGameProperty,
        ersDelta: ersDeltaGameProperty,
        ersLap: ersLapGameProperty,
      },
      carControl: {
        tc: tcGameProperty,
        tcSlip: tcSlipGameProperty,
        tcCut: tcCutGameProperty,
        abs: absGameProperty,
        brakeBias: brakeBiasGameProperty,
        brakeMigration: brakeMigrationGameProperty,
      },
      fuel: {
        fuelState: fuelStateGameProperty,
        fuelUsage: fuelUsageGameProperty,
        fuelTime: fuelTimeGameProperty,
        fuelLaps: fuelLapsGameProperty,
        fuelDelta: fuelDeltaGameProperty,
        nrgState: nrgStateGameProperty,
        nrgUsage: nrgUsageGameProperty,
      },
      temperature: {
        oil: oilTempGameProperty,
        water: waterTempGameProperty,
      },
      tyre: {
        flTemp: frontLeftTemperatureGameProperty,
        frTemp: frontRightTemperatureGameProperty,
        rlTemp: rearLeftTemperatureGameProperty,
        rrTemp: rearRightTemperatureGameProperty,
        flWear: frontLeftWearGameProperty,
        frWear: frontRightWearGameProperty,
        rlWear: rearLeftWearGameProperty,
        rrWear: rearRightWearGameProperty,
        flPres: frontLeftPressureGameProperty,
        frPres: frontRightPressureGameProperty,
        rlPres: rearLeftPressureGameProperty,
        rrPres: rearRightPressureGameProperty,
        flType: frontLeftTyreTypeProperty,
        frType: frontLeftTyreTypeProperty,
        rlType: frontLeftTyreTypeProperty,
        rrType: frontLeftTyreTypeProperty,
      },
      brake: {
        flTemp: frontLeftBrakeTemperatureGameProperty,
        frTemp: frontRightBrakeTemperatureGameProperty,
        rlTemp: rearLeftBrakeTemperatureGameProperty,
        rrTemp: rearRightBrakeTemperatureGameProperty,
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
      fuel: {
        fuelState: {},
        fuelUsage: {},
        fuelTime: {},
        fuelLaps: {},
        fuelDelta: FUEL_DELTA_TRANSFORMATION_MAP,
        nrgState: NRG_STATE_TRANSFORMATION_MAP,
        nrgUsage: NRG_USAGE_TRANSFORMATION_MAP,
      },
      temperature: {
        oil: OIL_TEMP_TRANSFORMATION_MAP,
        water: WATER_TEMP_TRANSFORMATION_MAP,
      },
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
      ers: {
        ersMode: ersModeUiProperty,
        ersSoc: ersSocUiProperty,
        ersCurrent: ersCurrentUiProperty,
        ersRecovery: ersRecoveryUiProperty,
        ersDelta: ersDeltaUiProperty,
        ersLap: ersLapUiProperty,
      },
      carControl: {
        tc: tcUiProperty,
        tcCut: tcCutUiProperty,
        tcSlip: tcSlipUiProperty,
        abs: absUiProperty,
        brakeBias: brakeBiasUiProperty,
        brakeMigration: brakeMigrationUiProperty,
      },
      fuel: {
        fuelState: fuelStateUiProperty,
        fuelUsage: fuelUsageUiProperty,
        fuelTime: fuelTimeUiProperty,
        fuelLaps: fuelLapsUiProperty,
        fuelDelta: fuelDeltaUiProperty,
        nrgState: nrgStateUiProperty,
        nrgUsage: nrgUsageUiProperty,
      },
      temperature: {
        oil: oilTempUiProperty,
        water: waterTempUiProperty,
        engine: engineTempUiProperty,
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
    popupLabels: {
      ers: {
        ersMode: ersModePopupMap,
        ersSoc: null,
        ersCurrent: null,
        ersRecovery: ersRecoveryPopupMap,
        ersDelta: null,
        ersLap: null,
      },
      carControl: {
        tc: tcPopup,
        tcCut: tcCutPopup,
        tcSlip: tcSlipPopup,
        abs: absPopup,
        brakeBias: brakeBiasPopup,
        brakeMigration: brakeMigrationPopup,
      },
      fuel: {
        fuelState: null,
        fuelUsage: null,
        fuelTime: null,
        fuelLaps: null,
        fuelDelta: null,
        nrgState: null,
        nrgUsage: null,
      },
      temperature: {
        oil: null,
        water: null,
        engine: null,
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
      tyre: {
        primaryTyreMetric,
        optimalTyreTempGameProperty: optimalTyreTempProperty,
        optimalTyrePresGameProperty: null,
        flTemp: optimalTyreTempRanges,
        frTemp: optimalTyreTempRanges,
        rlTemp: optimalTyreTempRanges,
        rrTemp: optimalTyreTempRanges,
        flWear: optimalTyreWearRanges,
        frWear: optimalTyreWearRanges,
        rlWear: optimalTyreWearRanges,
        rrWear: optimalTyreWearRanges,
        flPres: optimalTyrePresRanges,
        frPres: optimalTyrePresRanges,
        rlPres: optimalTyrePresRanges,
        rrPres: optimalTyrePresRanges,
      },
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
  debugMode = false,
  currentCarId = undefined,
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
    masterSectionUiLabels: configContents.masterSectionUiLabels,
  };

  return {
    availableValues: debugMode
      ? JSON.stringify(resultMaps, null, 2)
      : "To see possible mappings, activate debug mode by passing `debugMode = true` to this function, as such: `getTelemetryLabelsAndValues(currentGame, currentCar, true)`",
    ...resultMaps,
  };
}
