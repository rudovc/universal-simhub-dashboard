// @ts-check
"use strict";

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
  GT3_Gen1: "Elec",
  GT3_Gen2: "Elec",
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
/** @type {HigherOrderFunctionRecord} */
const TC_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP":
    () =>
    /**
     * @param {string} rawTcLevel
     */
    (rawTcLevel) => {
      if (rawTcLevel.includes("OFF")) {
        return "OFF";
      }

      const labelIndex = rawTcLevel.indexOf("(");
      const label = rawTcLevel[labelIndex + 1];
      const tcLevel = Number.parseInt(rawTcLevel);

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
  Automobilista2: "",
  AssettoCorsaCompetizione: "",
  iRacing: "TC1",
  LMU: {
    Generic: "SLIP",
    LMP2: "",
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_SLIP_POPUP_MAP = {
  Generic: "TC SLIP LEVEL",
  iRacing: "TC1 LEVEL",
};
/**
 * ---- 2.c TC CUT SECTION ----
 * Describes current TC cut level
 */
/** @type {StringRecord} */
const TC_CUT_GAME_PROPERTY_MAP = {
  AssettoCorsaCompetizione: "GameRawData.Graphics.TCCut",
  LMU: "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLPOWERCUTMAP",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_CUT_UI_PROPERTY_MAP = {
  Generic: "CUT",
  Automobilista2: "",
  AssettoCorsaCompetizione: "Cut",
  iRacing: "TC2",
};
/** @type {GameOrCarClassNullableStringRecord} */
const TC_CUT_POPUP_MAP = {
  Generic: "TC CUT LEVEL",
  AssettoCorsaCompetizione: "TC CUT LEVEL",
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
/** @type {StringRecord} */
const LMU_ABS_LABEL_MAP = {
  0: "Off",
  1: "o 1 (LO)",
  2: "o 1 (MD)",
  3: "o 1 (HI)",
  4: "n 4 (LO)",
  5: "n 5 (MD)",
  6: "n 6 (HI)",
  7: "u 7 (LO)",
  8: "u 8 (MD)",
  9: "u 9 (HI)",
};
/** @type {GameOrCarClassLabelMapRecord} */
const ABS_LABEL_MAP = {
  LMU: new LabelMap(LMU_ABS_LABEL_MAP),
};
/** @type {HigherOrderFunctionRecord} */
const ABS_TRANSFORMATION_MAP = {
  "LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP":
    () =>
    /**
     * @param {string} rawAbsLevel
     */
    (rawAbsLevel) => {
      if (rawAbsLevel.includes("OFF")) {
        return 0;
      }

      const absLevel = Number.parseInt(rawAbsLevel);

      return absLevel;
    },
};
/** @type {GameOrCarClassNullableStringRecord} */
const ABS_UI_PROPERTY_MAP = {
  Generic: "ABS",
  Hyper: "",
  LMP1: "",
  LMP2: "",
  GTE: "",
  Automobilista2: {
    "F-Ultimate_Gen1": "",
    "F-Ultimate_Gen2": "",
    "F-Reiza": "",
  },
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
  LMU: "LMU_NeoRedPlugin.Extended.VM_BRAKE_MIGRATION",
};
/** @type {GameOrCarClassNullableStringRecord} */
const BM_UI_PROPERTY_MAP = {
  Generic: "",
  LMU: { Hyper: "BM" },
};
/** @type {GameOrCarClassNullableStringRecord} */
const BM_POPUP_MAP = {
  Generic: "BRK MIGRATION",
};
