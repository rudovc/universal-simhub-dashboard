// @ts-check
"use strict";

/**
 *  6. BRAKES
 *  - 6.a FL TEMP
 *  - 6.b FR TEMP
 *  - 6.c RL TEMP
 *  - 6.d RR TEMP
 */
/**
 * ---- 6.a FL TEMP SECTION ----
 */
/** @type {StringRecord} */
const FL_BRAKE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "BrakeTemperatureFrontLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FL_BRAKE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°FL",
};
/** @type {HigherOrderFunctionRecord} */
const FL_BRAKE_TEMP_TRANSFORMATION_MAP = {
  BrakeTemperatureFrontLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 6.b FR TEMP SECTION ----
 */
/** @type {StringRecord} */
const FR_BRAKE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "BrakeTemperatureFrontRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const FR_BRAKE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°FR",
};
/** @type {HigherOrderFunctionRecord} */
const FR_BRAKE_TEMP_TRANSFORMATION_MAP = {
  BrakeTemperatureFrontRight:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 6.c FL TEMP SECTION ----
 */
/** @type {StringRecord} */
const RL_BRAKE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "BrakeTemperatureRearLeft",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RL_BRAKE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°RL",
};
/** @type {HigherOrderFunctionRecord} */
const RL_BRAKE_TEMP_TRANSFORMATION_MAP = {
  BrakeTemperatureRearLeft:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 6.d RR TEMP SECTION ----
 */
/** @type {StringRecord} */
const RR_BRAKE_TEMP_GAME_PROPERTY_MAP = {
  Generic: "BrakeTemperatureRearRight",
};

/** @type {GameOrCarClassNullableStringRecord} */
const RR_BRAKE_TEMP_UI_PROPERTY_MAP = {
  Generic: "°RR",
};
/** @type {HigherOrderFunctionRecord} */
const RR_BRAKE_TEMP_TRANSFORMATION_MAP = {
  BrakeTemperatureRearRight:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 6.e IDEAL RANGES ----
 */
/** @type {GameOrCarClassOptimalRangeRecord} */
const IDEAL_BRAKE_TEMP_RANGES_MAP = {
  Generic: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 },
  GT3: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 },
  GT3_Gen1: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 },
  GT3_Gen2: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 },
  LMU: {
    GT3: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 },
    Hyper: { optimal: 550, goodThreshold: 200, criticalThreshold: 300 },
  },
  Hyper: { optimal: 550, goodThreshold: 200, criticalThreshold: 300 },
  LMDh: { optimal: 550, goodThreshold: 200, criticalThreshold: 300 },
  AssettoCorsaCompetizione: { Generic: { optimal: 500, goodThreshold: 250, criticalThreshold: 250 } },
};
