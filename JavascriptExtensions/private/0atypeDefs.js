// @ts-check

/**
 * @ts-ignore
 * @typedef {import('./0ainternalHelpers').LabelMap} LabelMap
 * */

/**
 * @typedef {string | number} GamePropertyKey
 */

/**
 * @typedef {{[key: GamePropertyKey]: string}} StringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: string | null}} NullableStringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: {[key: GamePropertyKey]: FunctionRecord} | (function(...any): any) | GameOrCarClassNullableFunctionRecord}} GameOrCarClassNullableFunctionRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: NullableStringRecord | string | null}} GameOrCarClassNullableStringRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: null | { optimal: number, goodThreshold: number, criticalThreshold: number } | GameOrCarClassOptimalRangeRecord}} GameOrCarClassOptimalRangeRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: function(...any): string | number}} FunctionRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: function(...any): function(...any): string | number}} HigherOrderFunctionRecord
 */

/**
 * @typedef {{ label: string; color: string | null; } | string} LabelColor
 */

/**
 * @typedef {{[key: GamePropertyKey]: { label: string; color: string | null; } | string}} LabelColorRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: LabelMap | {[key: GamePropertyKey]: LabelMap}}} GameOrCarClassLabelMapRecord
 */

/**
 * @typedef {{[key: GamePropertyKey]: null | LabelMap | {[key: GamePropertyKey]: LabelMap }}} NullableGameOrCarClassLabelMapRecord
 */

export default {};
