import { numberToFixed } from './private/0ainternalHelpers';

/**
 * @param {number | string} currentValue
 * @param {string} currentFormattedTime
 * @param {{ [x: string]: string | number | null | undefined; }} root
 * @param {number} delayInMS
 */
function changedSinceTimeMs(currentValue, currentFormattedTime, root, delayInMS = 2000) {
  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`,
    );
  }

  if (currentFormattedTime === null || currentFormattedTime === undefined) {
    throw new Error('You must enable System Info plugin in Simhub Settings for this function to work!');
  }

  const currentTimeMs = Date.parse(currentFormattedTime);

  root.time = currentTimeMs;
  root.oldState = root.oldState === null || root.oldState === undefined ? currentValue : root.newState;
  root.newState = currentValue;

  if (root.newState !== root.oldState) {
    root.triggerTime = root.time;
  }

  return root.triggerTime === null || root.triggerTime === undefined
    ? false
    : // @ts-expect-error Time is always a number, it's ok
      root.time - root.triggerTime <= delayInMS;
}

/**
 * @param {number} currentLapNumber
 * @param {number | string} currentValue
 * @param {{ previousLapNumber: number | null | undefined, valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNLaps(currentLapNumber, currentValue, root, nValues = 3) {
  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`,
    );
  }

  root.previousLapNumber = root.previousLapNumber ?? currentLapNumber;

  if (root.valuesToCycle === null || root.valuesToCycle === undefined) {
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  if (root.previousLapNumber !== currentLapNumber) {
    root.previousLapNumber = currentLapNumber;
    cycleValuesOverNEntries(currentValue, root, nValues);
  }

  // biome-ignore lint/complexity/useLiteralKeys: <explanation>
  return root['valuesToCycle'];
}

/**
 * @param {number | string} currentValue
 * @param {{ valuesToCycle: (string | number)[] | null | undefined }} root
 * @param {number} nValues
 */
function cycleValuesOverNEntries(currentValue, root, nValues = 3) {
  root.valuesToCycle = root.valuesToCycle ?? Array(nValues).fill(null);
  root.valuesToCycle.shift();
  root.valuesToCycle.push(currentValue);

  return root.valuesToCycle;
}

/**
 * @param {number} currentLapNumber
 * @param {number} currentValue
 * @param {{ [x: string]: number | null | undefined; }} root
 * @param {number} decimalPrecision
 */
function deltaOverLastLap(currentLapNumber, currentValue, root, decimalPrecision = 2) {
  const inputValue = Number(currentValue);

  if (!root) {
    throw new Error(
      `Provided root is ${root}. Functions that rely on persistent calculation must receive a root object`,
    );
  }

  if (root.previousLapNumber === undefined || root.previousLapNumber === null) {
    root.previousLapNumber = currentLapNumber;
  }

  if (root.previousValue === undefined || root.previousValue === null) {
    root.previousValue = inputValue;
  }

  if (root.previousDiff === undefined || root.previousDiff === null) {
    root.previousDiff = 0;
  }

  const previousLapNumber = root.previousLapNumber;
  const previousValue = root.previousValue;
  const previousDiff = root.previousDiff;

  if (previousLapNumber !== currentLapNumber) {
    const valueDiff = inputValue - previousValue;

    root.previousValue = inputValue;
    root.previousLapNumber = currentLapNumber;
    root.previousDiff = valueDiff;

    return numberToFixed(valueDiff, decimalPrecision);
  }

  return numberToFixed(previousDiff, decimalPrecision);
}

/**
 * @param {number} currentLapNumber
 * @param {number} lastLapTimeSeconds
 * @param {number} currentValue
 * @param {number} previousValue
 * @param {number} timeSpan
 * @param {{ previousLapNumber: number; totalMeasurementTimeSeconds: number; valueAverageOverTimeSpan: number; }} root
 */
function estimateRequiredForSeconds(currentLapNumber, lastLapTimeSeconds, currentValue, previousValue, timeSpan, root) {
  let resultEstimate = undefined;

  root.previousLapNumber = root.previousLapNumber ?? 0;

  if (root.previousLapNumber !== currentLapNumber) {
    root.totalMeasurementTimeSeconds = (root.totalMeasurementTimeSeconds + lastLapTimeSeconds) / 2;
    root.valueAverageOverTimeSpan = (root.valueAverageOverTimeSpan + previousValue) / 2;

    const calcTime = timeSpan / root.totalMeasurementTimeSeconds;

    resultEstimate = calcTime * root.valueAverageOverTimeSpan - currentValue + previousValue;
    root.previousLapNumber = currentLapNumber;
  }

  return Math.ceil(resultEstimate || 0) || '-';
}
