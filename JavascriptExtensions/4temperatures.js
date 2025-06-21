// @ts-check
"use strict";

/**
 * ==== 4. TEMPERATURES SECTION ====
 * Essential temperature information goes here
 * ========================
 */
/** @type {StringRecord} */
const TEMP_MASTER_SECTION_UI_LABELS = {
  Generic: "Temp",
};
/**
 * ---- 4.a OIL TEMP SECTION ----
 * Oil temperature
 */
/** @type {StringRecord} */
const OIL_TEMP_GAME_PROPERTY_MAP = {
  Generic: "OilTemperature",
};

/** @type {GameOrCarClassNullableStringRecord} */
const OIL_TEMP_UI_PROPERTY_MAP = {
  Generic: "Oil",
};
/** @type {HigherOrderFunctionRecord} */
const OIL_TEMP_TRANSFORMATION_MAP = {
  WaterTemperature:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 4.b WATER TEMP SECTION ----
 * Water temperature
 */
/** @type {StringRecord} */
const WATER_TEMP_GAME_PROPERTY_MAP = {
  Generic: "WaterTemperature",
};
/** @type {GameOrCarClassNullableStringRecord} */
const WATER_TEMP_UI_PROPERTY_MAP = {
  Generic: "Water",
};
/** @type {HigherOrderFunctionRecord} */
const WATER_TEMP_TRANSFORMATION_MAP = {
  WaterTemperature:
    () =>
    /**
     * @param {number} temp
     */
    (temp) =>
      Number.parseInt(temp.toFixed(0)),
};
/**
 * ---- 4.c ENGINE TEMP SECTION ----
 * Engine temperature
 */
/** @type {StringRecord} */
const ENGINE_TEMP_GAME_PROPERTY_MAP = {};
/** @type {GameOrCarClassNullableStringRecord} */
const ENGINE_TEMP_UI_PROPERTY_MAP = {};
/** @type {HigherOrderFunctionRecord} */
const ENGINE_TEMP_TRANSFORMATION_MAP = {};
