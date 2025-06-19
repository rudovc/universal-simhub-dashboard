// @ts-check

/**
 * @ts-ignore
 * @typedef {import('./0atypeDefs').LabelColor} LabelColor
 * @typedef {import('./0atypeDefs').LabelColorRecord} LabelColorRecord
 * */

/**
 * @param {LabelColor} map
 */
export function getOrCreateLabelAndColor(map) {
  if (typeof map === 'string') {
    // TODO: Consider replacing `null` with `#FFFFFFFF` in case `null` breaks dashboard styling
    return { label: map, color: null };
  }

  return map;
}

export class LabelMap {
  /** @type {LabelColorRecord} */
  _map;

  /**
   * @param {LabelColorRecord} map
   */
  constructor(map) {
    this._map = Object.fromEntries(Object.entries(map).map(([key, value]) => [key, getOrCreateLabelAndColor(value)]));
  }

  /**
   * @param {string} key
   */
  getLabel(key) {
    return typeof this._map[key] === 'string' ? this._map[key] : this._map[key].label;
  }
  /**
   * @param {string} key
   */
  getColor(key) {
    return typeof this._map[key] === 'string' ? this._map[key] : this._map[key].color;
  }
}

/**
 * @param {number} value
 * @param {number} decimalPrecision
 */
export function numberToFixed(value, decimalPrecision = 2) {
  return Number.parseFloat(value.toFixed(decimalPrecision));
}
