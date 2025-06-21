// @ts-check
"use strict";

/**
 * ==== 3. FUEL SECTION ====
 * All fuel information and calculations go here
 * ========================
 */
/** @type {StringRecord} */
const FUEL_MASTER_SECTION_UI_LABELS = {
  Generic: "Fuel",
  GTE: "Fuel",
  GT3: "Fuel",
  Hyper: "F/NRG",
};
/**
 * ---- 3.a FUEL STATE SECTION ----
 * Describes current Fuel state in liters
 */
/** @type {StringRecord} */
const FUEL_STATE_GAME_PROPERTY_MAP = {
  Generic: "Fuel",
};
/** @type {GameOrCarClassNullableStringRecord} */
const FUEL_STATE_UI_PROPERTY_MAP = {
  Generic: "Tank",
};
/**
 * ---- 3.b FUEL USAGE SECTION ----
 * Describes Fuel usage over the current lap
 */
/** @type {StringRecord} */
const FUEL_USAGE_GAME_PROPERTY_MAP = {
  Generic: "DataCorePlugin.Computed.Fuel_CurrentLapConsumption",
};
/** @type {GameOrCarClassNullableStringRecord} */
const FUEL_USAGE_UI_PROPERTY_MAP = {
  Generic: "TLap",
};
/**
 * ---- 3.c FUEL TIME SECTION ----
 * Projected remaining stint time at the current fuel usage rate
 */
/** @type {StringRecord} */
const FUEL_TIME_GAME_PROPERTY_MAP = {
  Generic: "DataCorePlugin.Computed.Fuel_RemainingTime",
};
/** @type {GameOrCarClassNullableStringRecord} */
const FUEL_TIME_UI_PROPERTY_MAP = {
  Generic: "ETime",
};
/**
 * ---- 3.d FUEL LAPS SECTION ----
 * Projected remaining laps number at the current fuel usage rate
 */
/** @type {StringRecord} */
const FUEL_LAPS_GAME_PROPERTY_MAP = {
  Generic: "DataCorePlugin.Computed.Fuel_RemainingLaps",
};
/** @type {GameOrCarClassNullableStringRecord} */
const FUEL_LAPS_UI_PROPERTY_MAP = {
  Generic: "ELaps",
};
/**
 * ---- 3.e FUEL DELTA SECTION ----
 * Describes fuel delta to last lap
 */
const FUEL_DELTA_GAME_PROPERTY_MAP = {
  ...FUEL_STATE_GAME_PROPERTY_MAP,
  LMU: {
    Hyper: "LMU_NeoRedPlugin.Energy.VE.Current_%",
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const FUEL_DELTA_UI_PROPERTY_MAP = {
  Generic: "Δ",
};
const FUEL_DELTA_TRANSFORMATION_MAP = {
  Fuel: () => (/** @type {number} */ fuel) => fuel.toFixed(2),
  "LMU_NeoRedPlugin.Energy.VE.Current_%": () => (/** @type {number} */ nrg) => nrg.toFixed(2),
};
/**
 * ---- 3.f NRG STATE SECTION ----
 * Current Virtual Energy allowance state
 */
/** @type {GameOrCarClassNullableStringRecord} */
const NRG_STATE_GAME_PROPERTY_MAP = {
  Generic: null,
  AssettoCorsa: "ERSPercent",
  LMU: {
    Hyper: "LMU_NeoRedPlugin.Energy.VE.Current_%",
    Generic: "Fuel",
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const NRG_STATE_UI_PROPERTY_MAP = {
  Generic: "",
  AssettoCorsa: "ERS Max",
  LMU: {
    Generic: "",
    Hyper: "NRG",
  },
};
const NRG_STATE_TRANSFORMATION_MAP = {
  ERSPercent: () => (/** @type {number} */ ers) => ers.toFixed(2),
  "LMU_NeoRedPlugin.Energy.VE.Current_%": () => (/** @type {number} */ nrg) => nrg.toFixed(2),
};
/**
 * ---- 3.f NRG USAGE SECTION ----
 * Current NRG usage per lap
 */
/** @type {GameOrCarClassNullableStringRecord} */
const NRG_USAGE_GAME_PROPERTY_MAP = {
  LMU: {
    Hyper: "LMU_NeoRedPlugin.Energy.VE.FractionPerLap_%",
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const NRG_USAGE_UI_PROPERTY_MAP = {
  Generic: "",
  LMU: {
    Generic: "",
    Hyper: "Laps",
  },
};
const NRG_USAGE_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Energy.VE.FractionPerLap_%": () => (/** @type {number} */ nrg) => nrg.toFixed(2),
};
