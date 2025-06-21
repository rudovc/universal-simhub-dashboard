// @ts-check
"use strict";

/**
 * ==== 5. TYRES SECTION ====
 * All information regarding tyre temperatures and wear goes here
 * ========================
 */
/**
 * ---- 5.a FL TEMP SECTION ----
 */
/** @type {StringRecord} */
const FL_TYRE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "TyreTemperatureFrontLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FL_TYRE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°FL",
};
/** @type {HigherOrderFunctionRecord} */
const FL_TYRE_TEMP_TRANSFORMATION_MAP = {
  TyreTemperatureFrontLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 5.b FL WEAR SECTION ----
 */
/** @type {StringRecord} */
const FL_TYRE_WEAR_GAME_PROPERTY_MAP = {
  Generic: "TyreWearFrontLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FL_TYRE_WEAR_UI_PROPERTY_MAP = {
  Generic: "%FL",
};
/** @type {HigherOrderFunctionRecord} */
const FL_TYRE_WEAR_TRANSFORMATION_MAP = {
  TyreWearFrontLeft:
    (currentGame, carClass, carId) =>
    /**
     * @param {number} temp
     */
    (temp) =>
      getGameOrClassFunctionOverrides(
        currentGame,
        carClass,
        WEAR_TRANSFORMATION_PER_GAME_MAP,
        carId
      )(Number.parseInt(temp.toFixed(0))),
};
/**
 * ---- 5.b FL PRES SECTION ----
 */
/** @type {StringRecord} */
const FL_TYRE_PRES_GAME_PROPERTY_MAP = {
  Generic: "TyrePressureFrontLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FL_TYRE_PRES_UI_PROPERTY_MAP = {
  Generic: "%FL",
};
/** @type {HigherOrderFunctionRecord} */
const FL_TYRE_PRES_TRANSFORMATION_MAP = {
  TyrePressureFrontLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseFloat(temp.toFixed(1)),
};

/**
 * ---- 5.d FR TEMP SECTION ----
 */
/** @type {StringRecord} */
const FR_TYRE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "TyreTemperatureFrontRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FR_TYRE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°FR",
};
/** @type {HigherOrderFunctionRecord} */
const FR_TYRE_TEMP_TRANSFORMATION_MAP = {
  TyreTemperatureFrontRight:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 5.e FR WEAR SECTION ----
 */
/** @type {StringRecord} */
const FR_TYRE_WEAR_GAME_PROPERTY_MAP = {
  Generic: "TyreWearFrontRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FR_TYRE_WEAR_UI_PROPERTY_MAP = {
  Generic: "%FR",
};
/** @type {HigherOrderFunctionRecord} */
const FR_TYRE_WEAR_TRANSFORMATION_MAP = {
  TyreWearFrontRight:
    (currentGame, carClass, carId) =>
    /**
     * @param {number} temp
     */
    (temp) =>
      getGameOrClassFunctionOverrides(
        currentGame,
        carClass,
        WEAR_TRANSFORMATION_PER_GAME_MAP,
        carId
      )(Number.parseInt(temp.toFixed(0))),
};
/**
 * ---- 5.f FR PRES SECTION ----
 */
/** @type {StringRecord} */
const FR_TYRE_PRES_GAME_PROPERTY_MAP = {
  Generic: "TyrePressureFrontRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FR_TYRE_PRES_UI_PROPERTY_MAP = {
  Generic: "%FR",
};
/** @type {HigherOrderFunctionRecord} */
const FR_TYRE_PRES_TRANSFORMATION_MAP = {
  TyrePressureFrontRight:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseFloat(temp.toFixed(1)),
};

/**
 * ---- 5.g RL TEMP SECTION ----
 */
/** @type {StringRecord} */
const RL_TYRE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "TyreTemperatureRearLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RL_TYRE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°RL",
};
/** @type {HigherOrderFunctionRecord} */
const RL_TYRE_TEMP_TRANSFORMATION_MAP = {
  TyreTemperatureRearLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 5.h RL WEAR SECTION ----
 */
/** @type {StringRecord} */
const RL_TYRE_WEAR_GAME_PROPERTY_MAP = {
  Generic: "TyreWearRearLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RL_TYRE_WEAR_UI_PROPERTY_MAP = {
  Generic: "%RL",
};
/** @type {HigherOrderFunctionRecord} */
const RL_TYRE_WEAR_TRANSFORMATION_MAP = {
  TyreWearRearLeft:
    (currentGame, carClass, carId) =>
    /**
     * @param {number} temp
     */
    (temp) =>
      getGameOrClassFunctionOverrides(
        currentGame,
        carClass,
        WEAR_TRANSFORMATION_PER_GAME_MAP,
        carId
      )(Number.parseInt(temp.toFixed(0))),
};
/**
 * ---- 5.i RL PRES SECTION ----
 */
/** @type {StringRecord} */
const RL_TYRE_PRES_GAME_PROPERTY_MAP = {
  Generic: "TyrePressureRearLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RL_TYRE_PRES_UI_PROPERTY_MAP = {
  Generic: "%RL",
};
/** @type {HigherOrderFunctionRecord} */
const RL_TYRE_PRES_TRANSFORMATION_MAP = {
  TyrePressureRearLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseFloat(temp.toFixed(1)),
};

/**
 * ---- 5.j RR TEMP SECTION ----
 */
/** @type {StringRecord} */
const RR_TYRE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "TyreTemperatureRearRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RR_TYRE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°RR",
};
/** @type {HigherOrderFunctionRecord} */
const RR_TYRE_TEMP_TRANSFORMATION_MAP = {
  TyreTemperatureRearRight:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 5.k RR WEAR SECTION ----
 */
/** @type {StringRecord} */
const RR_TYRE_WEAR_GAME_PROPERTY_MAP = {
  Generic: "TyreWearRearRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RR_TYRE_WEAR_UI_PROPERTY_MAP = {
  Generic: "%RR",
};
/** @type {HigherOrderFunctionRecord} */
const RR_TYRE_WEAR_TRANSFORMATION_MAP = {
  TyreWearRearRight:
    (currentGame, carClass, carId) =>
    /**
     * @param {number} temp
     */
    (temp) =>
      getGameOrClassFunctionOverrides(
        currentGame,
        carClass,
        WEAR_TRANSFORMATION_PER_GAME_MAP,
        carId
      )(Number.parseInt(temp.toFixed(0))),
};
/**
 * ---- 5.l RR PRES SECTION ----
 */
/** @type {StringRecord} */
const RR_TYRE_PRES_GAME_PROPERTY_MAP = {
  Generic: "TyrePressureRearRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RR_TYRE_PRES_UI_PROPERTY_MAP = {
  Generic: "%RR",
};
/** @type {HigherOrderFunctionRecord} */
const RR_TYRE_PRES_TRANSFORMATION_MAP = {
  TyrePressureRearRight:
    () =>
    /**
     * @param {number} pres
     */
    (pres) =>
      Number.parseFloat(pres.toFixed(1)),
};
/**
 * ---- 5.m WEAR TRANSFORMATION ----
 * Transformation for tyre wear depending on the game
 */
/** @type {GameOrCarClassNullableFunctionRecord} */
const WEAR_TRANSFORMATION_PER_GAME_MAP = {
  Generic: (wear) => wear,
  LMU: { Generic: (wear) => wear },
  AssettoCorsaCompetizione: { Generic: (wear) => 100 - wear },
};
/**
 * ---- 5.n IDEAL RANGES ----
 * Ideal ranges for tempreature, pressure, wear depending on game/car class
 * Consists of the following properties: { optimal, goodThreshold, criticalThreshold }
 * Optimal is considered ideal, and is the center around which the ranges are calculated
 * Everything in a `goodThreshold` around optimal is considered good
 * Everything in a `criticalThreshold` around optimal is considered bad, but not extreme
 * Everything outside of `badThreshold` is displayed as critical
 */
/** @type {GameOrCarClassNullableStringRecord} */
const PRIMARY_TYRE_METRIC_PER_GAME_MAP = {
  Generic: "Pres",
};
/** @type {GameOrCarClassNullableStringRecord} */
const IDEAL_TYRE_TEMP_GAME_PROPERTY_MAP = {
  Generic: null,
  LMU: {
    Hard: "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Hard",
    Medium: "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Medium",
    Soft: "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Soft",
    Wet: "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Wet",
  },
};
/** @type {GameOrCarClassOptimalRangeRecord} */
const IDEAL_TYRE_TEMP_RANGES_MAP = {
  Generic: null,
  LMU: { Generic: { optimal: 90, goodThreshold: 10, criticalThreshold: 25 } },
};
/** @type {GameOrCarClassOptimalRangeRecord} */
const IDEAL_TYRE_WEAR_RANGES_MAP = {
  Generic: {
    optimal: 100,
    goodThreshold: 20,
    criticalThreshold: 40,
  },
};
/** @type {GameOrCarClassOptimalRangeRecord} */
const IDEAL_TYRE_PRES_RANGES_MAP = {
  Generic: null,
  Automobilista2: {
    Generic: { optimal: 28, goodThreshold: 1, criticalThreshold: 3 },
    "F-Ultimate_Gen1": { optimal: 24, goodThreshold: 1, criticalThreshold: 3 },
    "F-Ultimate_Gen2": { optimal: 24, goodThreshold: 1, criticalThreshold: 3 },
    "F-Reiza": { optimal: 24, goodThreshold: 1, criticalThreshold: 3 },
  },
  AssettoCorsaCompetizione: { Generic: { optimal: 28, goodThreshold: 1, criticalThreshold: 3 } },
  Hyper: { optimal: 25, goodThreshold: 1, criticalThreshold: 3 },
  LMDh: { optimal: 28, goodThreshold: 1, criticalThreshold: 3 },
  LMU: {
    GT3: { optimal: 28, goodThreshold: 1, criticalThreshold: 3 },
    GTE: { optimal: 28, goodThreshold: 1, criticalThreshold: 3 },
    Hyper: { optimal: 25, goodThreshold: 1, criticalThreshold: 3 },
    LMP2: { optimal: 25, goodThreshold: 1, criticalThreshold: 3 },
  },
};
/**
 * ---- 5.o FL TYRE SECTION ----
 */
/** @type {GameOrCarClassNullableStringRecord} */
const FL_TYRE_TYPE_GAME_PROPERTY_MAP = {
  Generic: null,
  LMU: "LMU_NeoRedPlugin.Tyre.FL_TyreCompound_Name",
};
/**
 * ---- 5.p FR TYRE SECTION ----
 */
/** @type {GameOrCarClassNullableStringRecord} */
const FR_TYRE_TYPE_GAME_PROPERTY_MAP = {
  Generic: null,
  LMU: "LMU_NeoRedPlugin.Tyre.FR_TyreCompound_Name",
};
/**
 * ---- 5.q RL TYRE SECTION ----
 */
/** @type {GameOrCarClassNullableStringRecord} */
const RL_TYRE_TYPE_GAME_PROPERTY_MAP = {
  Generic: null,
  LMU: "LMU_NeoRedPlugin.Tyre.RL_TyreCompound_Name",
};
/**
 * ---- 5.r RR TYRE SECTION ----
 */
/** @type {GameOrCarClassNullableStringRecord} */
const RR_TYRE_TYPE_GAME_PROPERTY_MAP = {
  Generic: null,
  LMU: "LMU_NeoRedPlugin.Tyre.RR_TyreCompound_Name",
};
