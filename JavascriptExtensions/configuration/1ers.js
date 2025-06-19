/**
 * ==== 1. ERS SECTION ====
 * All hardcoded maps, labels and game properties related to ERS functionality go here
 * ========================
 */
/** @type {StringRecord} */
const ERS_MASTER_SECTION_UI_LABELS = {
  Generic: 'Motor',
  Hyper: 'ERS',
  AssettoCorsaCompetizione: 'Engine',
  GT3: 'Sett',
  GTE: 'Sett',
};

/**
 * ---- 1.a ERS MODE SECTION ----
 * Describes current ERS deployment mode
 */
/** @type {StringRecord} */
const AMS_ERS_MODE_LABEL_MAP = {
  1: 'Off',
  2: 'Build',
  3: 'Balanced',
  4: 'Attack',
  5: 'Quali',
};
/** @type {StringRecord} */
const AC1_ERS_MODE_LABEL_MAP = {
  0: 'Charging',
  1: 'Low 1',
  2: 'Low 2',
  3: 'High 1',
  4: 'High 2',
  5: 'Quali',
};
/** @type {StringRecord} */
const ACC_DRY_WET_PACE_CAR_MAPS = {
  1: '1 - DRY FAST',
  2: '2 - DRY',
  3: '3 - DRY',
  4: '4 - DRY FUEL SAVE',
  5: '5 - WET',
  6: '6 - WET FUEL SAVE',
  7: '7 - WET FUEL SAVE',
  8: '8 - SAFETY CAR',
};
/** @type {NullableGameOrCarClassLabelMapRecord} */
const ERS_MODE_LABEL_MAP = {
  Automobilista2: new LabelMap(AMS_ERS_MODE_LABEL_MAP),
  AssettoCorsa: new LabelMap(AC1_ERS_MODE_LABEL_MAP),
  AssettoCorsaCompetizione: {
    ferrari_488_gt3: new LabelMap(ACC_DRY_WET_PACE_CAR_MAPS),
  },
  LMU: null,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_GAME_PROPERTY_MAP = {
  Generic: 'EngineMap',
  Automobilista2: 'GameRawData.mErsDeploymentMode',
  AssettoCorsa: 'GameRawData.Physics.ErsPowerLevel',
  LMU: {
    Hyper: 'LMU_NeoRedPlugin.Extended.VM_ELECTRIC_MOTOR_MAP',
    Generic: 'LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE',
  },
};
/** @type {HigherOrderFunctionRecord} */
const ERS_MODE_TRANSFORMATION_MAP = {
  'LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE': () => (/** @type {string} */ word) => {
    if (word.length <= 6) {
      return word.toUpperCase();
    }

    const wordSections = word.split(/[-_ ,.]/);

    return wordSections.map(word => word.charAt(0).toUpperCase()).join('');
  },
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_UI_PROPERTY_MAP = {
  Generic: 'Mode',
  Automobilista2: 'Mode',
  AssettoCorsa: 'Mode',
  LMU: { Hyper: 'Map' },
  AssettoCorsaCompetizione: 'Map',
  GT3: 'Map',
  GTE: 'Mix',
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_MODE_POPUP_MAP = {
  Generic: 'MODE',
  Automobilista2: 'MODE',
  AssettoCorsa: 'MODE',
  LMU: { Hyper: 'MOTOR MAP' },
  AssettoCorsaCompetizione: 'ENGINE MAP',
  GT3: 'MOTOR MAP',
  GTE: 'ENGINE MIX',
};

/**
 * ---- 1.b ERS SOC SECTION ----
 * Describes current ERS state of charge in % units
 */
/** @type {StringRecord} */
const ERS_SOC_GAME_PROPERTY_MAP = {
  Generic: 'ERSPercent',
  Automobilista2: 'ERSPercent',
  AssettoCorsa: 'GameRawData.Physics.KersCharge',
  LMU: 'GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction',
};
/** @type {HigherOrderFunctionRecord} */
const ERS_SOC_TRANSFORMATION_MAP = {
  'GameRawData.Physics.KersCharge': () => (/** @type {number} */ charge) => charge * 100,
  'GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction': () => (/** @type {number} */ charge) => charge * 100,
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_SOC_UI_PROPERTY_MAP = {
  Generic: 'SoC',
  Automobilista2: 'SoC',
  AssettoCorsa: 'SoC',
  Hyper: 'SoC',
  GT3: '',
  GTE: '',
};

/**
 * ---- 1.c ERS CURRENT SECTION ----
 * Describes current state of hybrid system, e.g. whether it is deploying/recharging
 */
/** @type {Object.<string | number, string>} */
const AMS2_ERS_CURRENT_LABEL_MAP = {
  1: { label: 'Idle', color: '#FFFFFFFF' },
  2: { label: 'Regen', color: '#FF40E0D0' },
  3: { label: 'Deploy', color: '#FFFFD700' },
};
/** @type {LabelColorRecord} */
const AC1_ERS_CURRENT_LABEL_MAP = {
  1: { label: 'Idle', color: '#FFFFFFFF' },
  2: { label: 'unimplemented', color: '#FFFFD700' },
  3: { label: 'unimplemented', color: '#FF40E0D0' },
  4: { label: 'unimplemented', color: '#FFE82222' },
  5: { label: 'unimplemented', color: '#FF4B0082' },
};
/** @type {LabelColorRecord} */
const LMU_ERS_CURRENT_LABEL_MAP = {
  1: { label: 'Idle', color: '#FFFFFFFF' },
  2: { label: 'Deploy', color: '#FFFFD700' },
  3: { label: 'Regen', color: '#FF40E0D0' },
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
  Generic: 'unimplemented',
  Automobilista2: 'GameRawData.mErsDeploymentMode',
  AssettoCorsa: 'GameRawData.mErsDeploymentMode',
  LMU: 'GameRawData.CurrentPlayerTelemetry.mElectricBoostMotorState',
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_CURRENT_UI_PROPERTY_MAP = {
  Generic: 'ERS',
  Automobilista2: 'ERS',
  AssettoCorsa: 'ERS',
  Hyper: 'ERS',
  GTE: '',
  GT3: '',
};

/**
 * ---- 1.d ERS RECOVERY SECTION ----
 * Describes current ERS deployment mode
 */

/** @type {StringRecord} */
const ERS_RECOVERY_GAME_PROPERTY_MAP = {
  Generic: 'unimplemented',
  LMU: 'LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL',
};
/** @type {HigherOrderFunctionRecord} */
const ERS_RECOVERY_TRANSFORMATION_MAP = {
  'LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL': () => (/** @type {string} */ charge) => (charge === 'N/A' ? '-' : charge),
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_RECOVERY_UI_PROPERTY_MAP = {
  Generic: 'RCV',
  Automobilista2: 'RCV',
  AssettoCorsa: 'RCV',
  Hyper: 'RGN',
  GTE: '',
  GT3: '',
};
/** @type {GameOrCarClassNullableStringRecord} */
const ERS_RECOVERY_POPUP_MAP = {
  Generic: 'ERS RECOVERY',
  Automobilista2: 'ERS RECOVERY',
  AssettoCorsa: 'ERS RECOVERY',
  LMU: { Hyper: 'REGEN LEVEL' },
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
  Generic: 'Δ',
  Automobilista2: 'Δ',
  AssettoCorsa: 'Δ',
  Hyper: 'Δ',
  GT3: '',
  GTE: '',
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
  Generic: 'Lap',
  Automobilista2: 'LLap',
  AssettoCorsa: 'Lap',
  Hyper: 'LLap',
  GTE: '',
  GT3: '',
};
/**
 * Use the SOC as the base for the ERS LLap calculation
 *  */
const ERS_LAP_TRANSFORMATION_MAP = ERS_SOC_TRANSFORMATION_MAP;

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentCarId
 */
export function getErsTelemetry(currentGame, currentCarClass, currentCarId) {
  // 1
  const masterSectionUiLabels = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MASTER_SECTION_UI_LABELS,
    currentCarId,
  );

  // 1.a
  const ersModeGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersModeLabelMap = getGameOrClassLabelMapOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_LABEL_MAP,
    currentCarId,
  );
  const ersModeUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_MODE_UI_PROPERTY_MAP,
    currentCarId,
  );
  const ersModePopupMap = getGameOrClassStringOverrides(currentGame, currentCarClass, ERS_MODE_POPUP_MAP, currentCarId);

  // 1.b
  const ersSocGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_SOC_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersSocUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_SOC_UI_PROPERTY_MAP,
    currentCarId,
  );

  // 1.c
  const ersCurrentGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersCurrentLabel = getGameOrClassLabelMapOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_LABEL_MAP,
    currentCarId,
  );
  const ersCurrentUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_CURRENT_UI_PROPERTY_MAP,
    currentCarId,
  );

  // 1.d
  const ersRecoveryGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersRecoveryUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_UI_PROPERTY_MAP,
    currentCarId,
  );
  const ersRecoveryPopupMap = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_RECOVERY_POPUP_MAP,
    currentCarId,
  );

  // 1.e
  const ersDeltaGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_DELTA_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersDeltaUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_DELTA_UI_PROPERTY_MAP,
    currentCarId,
  );

  // 1.f
  const ersLapGameProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_LAP_GAME_PROPERTY_MAP,
    currentCarId,
  );
  const ersLapUiProperty = getGameOrClassStringOverrides(
    currentGame,
    currentCarClass,
    ERS_LAP_UI_PROPERTY_MAP,
    currentCarId,
  );

  return {
    masterSectionUiLabel: masterSectionUiLabels,
    labelMaps: {
      ersMode: ersModeLabelMap,
      ersCurrent: ersCurrentLabel,
    },
    gameProperties: {
      ersMode: ersModeGameProperty,
      ersSoc: ersSocGameProperty,
      ersCurrent: ersCurrentGameProperty,
      ersRecovery: ersRecoveryGameProperty,
      ersDelta: ersDeltaGameProperty,
      ersLap: ersLapGameProperty,
    },
    transformations: {
      ersMode: ERS_MODE_TRANSFORMATION_MAP,
      ersSoc: ERS_SOC_TRANSFORMATION_MAP,
      ersCurrent: {},
      ersRecovery: ERS_RECOVERY_TRANSFORMATION_MAP,
      ersDelta: ERS_DELTA_TRANSFORMATION_MAP,
      ersLap: ERS_LAP_TRANSFORMATION_MAP,
    },
    uiLabels: {
      ersMode: ersModeUiProperty ?? (ERS_MODE_UI_PROPERTY_MAP.Generic || {}),
      ersSoc: ersSocUiProperty ?? (ERS_SOC_UI_PROPERTY_MAP.Generic || {}),
      ersCurrent: ersCurrentUiProperty ?? (ERS_CURRENT_UI_PROPERTY_MAP.Generic || {}),
      ersRecovery: ersRecoveryUiProperty ?? (ERS_RECOVERY_UI_PROPERTY_MAP.Generic || {}),
      ersDelta: ersDeltaUiProperty ?? (ERS_DELTA_UI_PROPERTY_MAP.Generic || {}),
      ersLap: ersLapUiProperty ?? (ERS_LAP_UI_PROPERTY_MAP.Generic || {}),
    },
    popupLabels: {
      ersMode: ersModePopupMap,
      ersSoc: {},
      ersCurrent: {},
      ersRecovery: ersRecoveryPopupMap,
      ersDelta: {},
      ersLap: {},
    },
  };
}
