// @ts-check
"use strict";

/**
 * ==== 1. ERS SECTION ====
 * All hardcoded maps, labels and game properties related to ERS functionality go here
 * ========================
 */

/** @type {StringRecord} */
const ERS_MASTER_SECTION_UI_LABELS = {
  Generic: "Motor",
  Hyper: "ERS",
  LMDh: "ERS",
  LMP1: "ERS",
  AssettoCorsaCompetizione: "Engine",
  GT3: "Sett",
  GT3_Gen1: "Sett",
  GT3_Gen2: "Sett",
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
/** @type {StringRecord} */
/**
 * Aston Martin V12 and V8 GT3
 * Audi R8 GT3 and GT3 EVO
 * Bentley Continental GT3 2016 and 2018
 * Lamborghini Huracan GT3 and GT3 EVO
 */
const ACC_DRY_WET_PACE_CAR_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY",
  3: "3 - DRY",
  4: "4 - DRY FUEL SAVE",
  5: "5 - WET",
  6: "6 - WET FUEL SAVE",
  7: "7 - WET FUEL SAVE",
  8: "8 - SAFETY CAR",
};
/**
 * Ferrari 488 GT3
 */
const ACC_FERRARI_GT3_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY FUEL SAVE",
  3: "3 - DRY",
  4: "4 - DRY SLOW",
  5: "5 - WET",
  6: "6 - WET FUEL SAVE",
  7: "7 - WET",
  8: "8 - WET SLOW",
  9: "9 - SAFETY CAR",
  10: "10 - SAFETY CAR",
  11: "11 - SAFETY CAR",
  12: "12 - SAFETY CAR",
};
/**
 * Ferrari 488 GT3 EVO
 */
const ACC_FERRARI_GT3_EVO_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY FAST",
  3: "3 - DRY",
  4: "4 - DRY FUEL SAVE",
  5: "5 - DRY FUEL SAVE",
  6: "6 - WET FUEL SAVE",
  7: "7 - WET",
  8: "8 - WET SLOW",
  9: "9 - SAFETY CAR",
  10: "10 - SAFETY CAR",
  11: "11 - SAFETY CAR",
  12: "12 - SAFETY CAR",
};
/**
 * BMW M6 and M4 GT3
 */
const ACC_BMW_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY",
  3: "3 - DRY",
  4: "4 - RESERVE",
  5: "5 - SAFETY CAR",
  6: "6 - WET FAST",
  7: "7 - WET",
  8: "8 - WET",
};
/**
 * HONDA NSX GT3 and GT3 EVO
 */
const ACC_HONDA_MAPS = {
  1: "1 - DRY PROG",
  2: "2 - DRY LINEAR",
  3: "3 - DRY AGGR",
  4: "4 - DRY MAX",
  5: "5 - WET PROG",
  6: "6 - WET PROG",
  7: "7 - WET FUEL SAVE",
  8: "8 - SAFETY CAR",
};
/**
 * LAMBORGHINI GALLARDO R-EX
 */
const ACC_GALLARDO_MAPS = {
  1: "1 - FAST",
  2: "2 - AGGR",
  3: "3 - PROG",
  4: "4 - FUEL SAVE",
};
/**
 * JAGUAR
 */
const ACC_JAGUAR_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY",
  3: "3 - DRY FUEL SAVE",
  4: "4 - WET FAST",
  5: "5 - WET",
  6: "6 - WET FUEL SAVE",
};
/**
 * NISSAN GT-R GT3 2016 and 2018
 * MERCEDES AMG GT3 and GT3 2020
 */
const ACC_SHORT_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY",
  3: "3 - DRY FUEL SAVE",
  4: "4 - FUEL SAVE MODE",
};
/**
 * LEXUS RC F GT3
 */
const ACC_LEXUS_MAPS = {
  1: "1 - DRY LINEAR",
  2: "2 - DRY AGGR",
  3: "3 - DRY PROG",
  4: "4 - FUEL SAVE / WET",
  5: "5 - SAFETY CAR",
};
/**
 * MCLAREN 650S GT3
 */
const ACC_650S_MAPS = {
  1: "1 - DRY FAST",
  2: "2 - DRY",
  3: "3 - DRY",
  4: "4 - DRY FUEL SAVE",
  5: "5 - WET FAST",
  6: "6 - WET FUEL SAVE",
  7: "7 - WET",
  8: "8 - WET FUEL SAVE",
  9: "9 - SAFETY CAR",
};
/**
 * MCLAREN 720S GT3
 */
const ACC_720S_MAPS = {
  1: "1 - QUALI",
  2: "2 - RACE 1",
  3: "3 - RACE 2",
  4: "4 - RACE 1 FUEL SAVE",
  5: "5 - RACE 2 FUEL SAVE",
  6: "6 - RACE 3 FUEL SAVE",
  7: "7 - ENGINE HI TEMP",
  8: "8 - DAMP QUALI",
  9: "9 - DAMP RACE FUEL SAVE",
  10: "10 - WET QUALI",
  11: "11 - WET RACE 1",
  12: "12 - WET RACE 2",
};
/**
 * PORSCHE 911 GT3-R and GT3-R EVO
 */
const ACC_PORSCHE_MAPS = {
  1: "1 - DRY",
  2: "2 - DRY PROG",
  3: "3 - DRY AGGR",
  4: "4 - WET",
  5: "5 - QUALI",
  6: "6 - QUALI PROG",
  7: "7 - QUALI AGGR",
  8: "8 - DRY QUALI",
  9: "9 - FUEL SAVE",
  10: "10 - SAFETY CAR",
};

/** @type {NullableGameOrCarClassLabelMapRecord} */
const ERS_MODE_LABEL_MAP = {
  Automobilista2: new LabelMap(AMS_ERS_MODE_LABEL_MAP),
  AssettoCorsa: new LabelMap(AC1_ERS_MODE_LABEL_MAP),
  AssettoCorsaCompetizione: {
    amr_v12_vantage_gt3: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    audi_r8_lms_evo: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    bentley_continental_gt3_2018: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    bmw_m6_gt3: new LabelMap(ACC_BMW_MAPS),
    ferrari_488_gt3: new LabelMap(ACC_FERRARI_GT3_MAPS),
    honda_nsx_gt3_evo: new LabelMap(ACC_HONDA_MAPS),
    lamborghini_huracan_gt3_evo: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    lamborghini_huracan_gt3: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    mclaren_650s_gt3: new LabelMap(ACC_650S_MAPS),
    mclaren_720s_gt3: new LabelMap(ACC_720S_MAPS),
    mercedes_amg_gt3: new LabelMap(ACC_SHORT_MAPS),
    nissan_gt_r_gt3_2018: new LabelMap(ACC_SHORT_MAPS),
    porsche_911ii_gt3_r: new LabelMap(ACC_PORSCHE_MAPS),

    // Not tested: I do not own these cars for ACC. The keys might need to be renamed to match the in-game car ID
    amr_v8_vantage_gt3: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    audi_r8_lms_evoii: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    bentley_continental_gt3_2015: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
    bmw_m4_gt3: new LabelMap(ACC_BMW_MAPS),
    emil_frey_jaguar_gt3: new LabelMap(ACC_JAGUAR_MAPS),
    ferrari_488_gt3_evo: new LabelMap(ACC_FERRARI_GT3_EVO_MAPS),
    honda_nsx_gt3: new LabelMap(ACC_HONDA_MAPS),
    lexus_rc_f_gt3: new LabelMap(ACC_LEXUS_MAPS),
    mclaren_720s_gt3_evo: new LabelMap(ACC_720S_MAPS),
    mercedes_amg_gt3_evo: new LabelMap(ACC_SHORT_MAPS),
    nissan_gt_r_gt3_2015: new LabelMap(ACC_SHORT_MAPS),
    porsche_911_gt3_r: new LabelMap(ACC_PORSCHE_MAPS),
    reiter_engineering_r_ex_gt3: new LabelMap(ACC_GALLARDO_MAPS),
  },
  LMU: null,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_GAME_PROPERTY_MAP = {
  Generic: "EngineMap",
  Automobilista2: {
    Generic: "GameRawData.mErsDeploymentMode",
    // TODO: Figure out game property for GT fuel mix
    GT3_Gen1: "",
    GT3_Gen2: "",
  },
  AssettoCorsa: "GameRawData.Physics.ErsPowerLevel",
  LMU: {
    Hyper: "LMU_NeoRedPlugin.Extended.VM_ELECTRIC_MOTOR_MAP",
    Generic: "LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE",
  },
};
/** @type {HigherOrderFunctionRecord} */
const ERS_MODE_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE": () => (/** @type {string} */ word) => {
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
  Automobilista2: { Generic: "Mode", LMDh: "Mode", "F-Reiza": "", GT3_Gen1: "Map", GT3_Gen2: "Map" },
  AssettoCorsa: "Mode",
  LMU: { Hyper: "Map" },
  LMP1: "Deploy",
  AssettoCorsaCompetizione: "Map",
  GT3: "Map",
  GTE: "Mix",
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_POPUP_MAP = {
  Generic: "MODE",
  Automobilista2: { Generic: "MODE", GT3_Gen1: "ENGINE MAP", GT3_Gen2: "ENGINE MAP" },
  AssettoCorsa: "MODE",
  LMU: { Hyper: "MOTOR MAP" },
  AssettoCorsaCompetizione: "ENGINE MAP",
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
/** @type {HigherOrderFunctionRecord} */
const ERS_SOC_TRANSFORMATION_MAP = {
  "GameRawData.Physics.KersCharge": () => (/** @type {number} */ charge) => charge * 100,
  "GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction": () => (/** @type {number} */ charge) => charge * 100,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_SOC_UI_PROPERTY_MAP = {
  Generic: "",
  AssettoCorsa: "SoC",
  Hyper: "SoC",
  LMDh: "SoC",
  LMP2: "",
  GT3: "",
  GT3_Gen1: "",
  GT3_Gen2: "",
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
  AssettoCorsa: "ERS",
  LMP1: "ERS",
  LMDh: "ERS",
  Hyper: "ERS",
  GTE: "",
  GT3: "",
  GT3_Gen1: "",
  GT3_Gen2: "",
};

/**
 * ---- 1.d ERS RECOVERY SECTION ----
 * Describes current ERS deployment mode
 */

/** @type {StringRecord} */
const ERS_RECOVERY_GAME_PROPERTY_MAP = {
  Generic: "",
  LMU: "LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL",
};
/** @type {HigherOrderFunctionRecord} */
const ERS_RECOVERY_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL": () => (/** @type {string} */ charge) => charge === "N/A" ? "-" : charge,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_RECOVERY_UI_PROPERTY_MAP = {
  Generic: "",
  Automobilista2: "",
  AssettoCorsa: "Recovery",
  Hyper: "Regen",
  LMP2: "",
  GTE: "",
  GT3: "",
  GT3_Gen1: "",
  GT3_Gen2: "",
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
  Generic: "",
  AssettoCorsa: "Δ",
  LMP1: "Δ",
  Hyper: "Δ",
  LMDh: "Δ",
  LMP2: "",
  GT3: "",
  GT3_Gen1: "",
  GT3_Gen2: "",
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
  Generic: "",
  AssettoCorsa: "LLap",
  Hyper: "LLap",
  LMP1: "LLap",
  LMDh: "LLap",
  LMP2: "",
  GTE: "",
  GT3: "",
  GT3_Gen1: "",
  GT3_Gen2: "",
};
/**
 * Use the SOC as the base for the ERS LLap calculation
 *  */
const ERS_LAP_TRANSFORMATION_MAP = ERS_SOC_TRANSFORMATION_MAP;
