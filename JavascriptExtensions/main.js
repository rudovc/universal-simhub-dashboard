// @ts-check
"use strict";

/**
 _    _         _                                _   _____  _             _             _      _____               _      _                             _ 
| |  | |       (_)                              | | / ____|(_)           | |           | |    |  __ \             | |    | |                           | |
| |  | | _ __   _ __   __ ___  _ __  ___   __ _ | || (___   _  _ __ ___  | |__   _   _ | |__  | |  | |  __ _  ___ | |__  | |__    ___    __ _  _ __  __| |
| |  | || '_ \ | |\ \ / // _ \| '__|/ __| / _` || | \___ \ | || '_ ` _ \ | '_ \ | | | || '_ \ | |  | | / _` |/ __|| '_ \ | '_ \  / _ \  / _` || '__|/ _` |
| |__| || | | || | \ V /|  __/| |   \__ \| (_| || | ____) || || | | | | || | | || |_| || |_) || |__| || (_| |\__ \| | | || |_) || (_) || (_| || |  | (_| |
 \____/ |_| |_||_|  \_/  \___||_|   |___/ \__,_||_||_____/ |_||_| |_| |_||_| |_| \__,_||_.__/ |_____/  \__,_||___/|_| |_||_.__/  \___/  \__,_||_|   \__,_|
                                                                                                                                                           
MMMMMMMMMMMMMMMMMMMMMMMMMMWNXKKKXNMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWN0Okkkk0XWMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNOxx0NMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWx. .lKWNXXXXXNNNWMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMKc''.,cc:;;;:oo:;;codkOKXNWMMMMMMMMMMMMMMMMMMMMMMMMXkkkkO0O000OOXWMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMNKOxxO0KKKKXNMMMMMMMMMM0c;'........;ol,....  ..',:loxO0XNWWMMMMMMMMMMMMWWWK:....'.','.;0MMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWWMMMMMMMMMMMMMMMMMMMMMMMW0o:;;:oxkkxoc:clodkOOOOkko,''..'.....,::,.'''''.........',;cloxkOKNWMMMMNx:cc'......''...:ooxK
MMMMMMMMMMMMMMMMMMMMMMMMMMWXklccldkKXKNWMMMMMMMMMMMMWNOc.'lollo0WMMWNXKOd,..,;,'...''.',,'..'''''',,,,;;,,,''''..........';dXMMMWd.      ........'..,O
MMMMMMMMMMMMMMMMMMMMMMMXkl,';;;;''cxO0000000000000000Odc,.;dO0KKKKOddxxdc;:llodddxxxxkxxxxxxxkkkOxOkkOkOOOOdokkxkxxdoooollloox000k;.....  ..        .k
MMMMMMMMMMMMMMMMMMMMMNkc;:cccccclc:,,;:lodxddkkxxkkOOddxk00KKK0KNM0lokxolloodxxxdddoodddddxxxkkxxoxdxkk00KXdlddooodoolloolo0NNk:,''cooolc'...       ,0
MMMMMMWXKX00KKK00XXXOl;;ol,.    .'lo:,:xXXNK0Okx0XNN0l:oOK0000kONNxxOo;,,''''ckKKK000OOOOOOOOOkxdoooodolcdOOOkkkkkOkkook00kxdl;,coc;'..';coc,.      cN
MMMMWXO0XKolOXXOdkK0o,;dl. .;::;.  cd:,:oddl;...;dddo:;cc',dO0XWWOxKl,lxkxdo:.:XMMMMMMMMMMMMNOdl::lxOOo,:dxxxxxxxkkkko'...   .,oo.  .,,.  'dl;.   .cKW
MMMWKOXWO:,',xNKooxd;.':.  cd'.:,  .:,..              .....',;:clcdO:;dkOkxdo',OMMMMMMMMMMMMN0Oo:loOXXl,ldloxOxoc;''..      ..,c'  .::::.  'c,..  'OMM
MMWK0XWNOc;,'l0kokKOl,;o:  .cc::.  ,o;,cdkkkx:       .'.....'''''.'::,:xOOxo;;OWMMMMMMMMMMMMMMXl',ccd0doxdol:,..            ..,:.  .:;;:.  .:'.,;cxNMM
xod0XXKKK0O0XKX0okKKk:.;xl.  ..  .:d:.:0WMMMMk.        .  .........',.....,,,o0000000000000000Oo::c;,;'..                    .'lo.  .;;.  .ol';kWMMMMM
kdxKXXKO0KO0XK0OOXMMWK:..clc:;::clc'.;OWMMMMWd.      ..            .''..      ..        .........             ....             .:oc,....,co:..dNMMMMMM
MMWNNNNNWWWWMMMMMMMMMMNkc;;;::::,.,lkNMMMMMMWOc;;;;;;::;;;;;;;;;;;::;;;;,,''''......................'''''''',;::;,''''''',::;;;,.'lolcclc;'':OWMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMWX0kxdddxOXWMMMMMMMMMMWWWWWWWWWWWWWWWWWWWWWWWWWWWWNNNNNNNXXXXXXKKKKKKKKKKKXXXXXXXXXXXXXXNNNNNNNNNWWMWWWNKxoc:,,;:lxKWMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMWNXXNWMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
 */

/**
 * ==== TABLE OF CONTENTS ====
 * When a "game name" is referred to, it means the [CurrentGame] property in SimHub.
 * When a "car class" is referred to, it means the [CarClass] property in SimHub.
 * When a "car" is referred to, it means the [CarId] property in SimHub.
 * When a "label map" is referred to, it means an object with one of the following shapes:
 * {
 *   [key]: string | { label: string, color: string }
 * }
 * It can include only a string label, or a label and color for text display.
 * Colors are formatted as ARGB hex, as such: `#AARRGGBB`
 *
 * Almost everything can be configured per game, per class, or per car id, with a fallback value in case no matches are found.
 * This is an example of a map that sets the Dashboard label for the displayed "ERS Mode" depending on the game/class:
 * {
 *   Generic: "Mode", In case there is no better match, display the label: "Mode"
 *   Automobilista2: { Generic: "Mode", LMDh: "Mode", "F-Reiza": "" }, In case the game is AMS2, display the label "Mode" for classes except "F-Reiza", in which case do not display the section at all. In case there is no exact match, display the label "Mode" for AMS2
 *   AssettoCorsa: "Mode", In case the game is AC1, display the label "Mode"
 *   LMU: { Hyper: "Map" }, In case the game is LMU and the class is Hyper, display the label "Map"
 *   LMP1: "Deploy", In case the car class is an LMP1, display the label "Deploy"
 *   AssettoCorsaCompetizione: "Map", In case the game is ACC, display the label "Map"
 *   GTE: "Mix", In case the car class is GTE, display the label "Mix"
 * }
 *
 * Every section consists of constants in the following order:
 * - Game and/or car class specific labels for the outline of the full section on the dashboard, if any such are necessary. These control the visibility of the whole section.
 *   To make the segment invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 * - Misc. game specific maps, which map the value coming from the game to arbitrary useful values
 * - Global misc. maps, which maps game and/or car class names to their respective game specific misc. maps
 * - Game and/or car class specific label maps, which map the value coming from the game to human-readable text
 * - Global label maps, which maps game names to their respective game specific label maps
 * - Global game property maps, which maps game names to the specific game property that supplies that value for that game
 * - Global transformation maps, which maps game properties to whatever transformation should be performed on them to normalize the value.
 *   These are actually higher order functions, which take in the current game, current class, and current car ID as parameters and then decide which transformation to apply based on that.
 * - Global UI property maps, which maps game and/or car class names to the UI labels for dashboard elements. These control the visibility of the subsection.
 *   To make the segment invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 * - Global popup property maps, which maps game and/or car class names to the UI labels for the popup elements when the property is modified. These control the enabled state of the popup
 *   To make the popup invisible, just set it to an empty string. Setting a nullish value will cause a fallback to the generic value
 *
 * 0. UTILS
 * - 0.a INTERNAL HELPERS
 * - 0.b SIMHUB HELPERS (you might want to call these from SimHub. They include things like calculating a delta from the previous lap)
 * --------
 * 1. ERS
 *	- 1.a ERS MODE
 *	- 1.b ERS SOC
 *	- 1.c ERS CURRENT
 *	- 1.d ERS RECOVERY
 *  - 1.e ERS DELTA
 *  - 1.e ERS LAP
 *   ------------
 *  2. CAR CONTROL
 *	- 2.a TRACTION CONTROL
 *  - 2.b TC SLIP
 *  - 2.c TC CUT
 *  - 2.d ABS
 *  - 2.e BRAKE BIAS
 *  - 2.f BRAKE MIGRATION
 *  ---------------------
 *  3. FUEL
 *  - 3.a FUEL STATE
 *  - 3.b FUEL USAGE
 *  - 3.c FUEL TIME
 *  - 3.d FUEL LAPS
 *  - 3.e FUEL DELTA
 *  - 3.f NRG STATE
 *  - 3.g NRG USAGE
 * -----------------
 *  4. TEMPS
 *  - 4.a OIL TEMP
 *  - 4.b WATER TEMP
 *  - 4.c ENGINE TEMP
 */

/**
 * -----------------
 *  5. TYRES
 *  - 5.a FL TEMP
 *  - 5.b FL WEAR
 *  - 5.c FL PRES
 *  - 5.d FR TEMP
 *  - 5.e FR WEAR
 *  - 5.f FR PRES
 *  - 5.g RL TEMP
 *  - 5.h RL WEAR
 *  - 5.i RL PRES
 *  - 5.j RR TEMP
 *  - 5.k RR WEAR
 *  - 5.l RR PRES
 *  - 5.m WEAR TRANSFORMATION (Wear might be reported inverted depending on game. Some games report maximum wear as 100%, some as 0%)
 *  - 5.n IDEAL RANGES
 *  - 5.o FL TYRE
 *  - 5.p FR TYRE
 *  - 5.q RL TYRE
 *  - 5.r RR TYRE
 * -------------
 *  6. BRAKES
 *  - 6.a FL TEMP
 *  - 6.b FR TEMP
 *  - 6.c RL TEMP
 *  - 6.d RR TEMP
 *  - 6.e IDEAL RANGES
 * --------------
 *  TODO: ------ Everything below this is not yet implemented ------
 *  7. DAMAGE
 *  - 7.a FRONT BODY
 *  - 7.b FL BODY
 *  - 7.c FR BODY
 *  - 7.d MID RIGHT BODY
 *  - 7.e MID LEFT BODY
 *  - 7.f REAR BODY
 *  - 7.g RL BODY
 *  - 7.h RL BODY
 *  - 7.i FL WING
 *  - 7.j FR WING
 *  - 7.k REAR WING
 * ----------------
 *  8. SUSPENSION
 *  - 8.a FRONT ARB
 *  - 8.b REAR ARB
 * -----------------
 *  9. MISCELLANEOUS
 *  - 9.a PIT LIMITER
 * ------------------
 *  10. OUTPUTS
 *  - 10.a getTelemetryLabelsAndValues (master output function, this is the underlying function called by every other function on SimHub's side, which exposes everything in this file based on current game/class/car ID)
 *    !!! YOU **MUST** ADD NEW VALUES TO THE OUTPUT OF `getTelemetryLabelsAndValues` IF YOU ADD NEW MAPPING SECTIONS !!!
 * -------------------
 *  11. SIMHUB OUTPUTS (in this file)
 * ===========================
 */

/**
 * SIMHUB OUTPUTS SECTION
 * Functions that have more specific uses, to simplify calling form SimHub. For example: "getMasterSectionLabel" will just return the label of the master section instead of a bunch of unneeded details
 */
/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentCarId
 * @param {string} section
 * @param {boolean} debugMode
 */
function getMasterSectionLabelFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId,
  section,
  debugMode
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId
  );

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.masterSectionUiLabels[section];

  if (label === undefined) {
    throw new Error(
      `${section} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}

/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPopupLabelFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId,
  section,
  property,
  debugMode
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId
  );

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.popupLabels[section][property];

  if (label === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyPopupLabel(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}
/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyUILabelFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId,
  section,
  property,
  debugMode
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId
  );

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.uiLabels[section][property];

  if (label === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyUILabel(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}
/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentCarId
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 */
function getPropertyValueFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  currentCarId,
  section,
  property,
  debugMode
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId
  );

  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  const labelMap = telemetry.labelMaps[section][property];
  // Return identity function if transformation is undefined. Transformations are higher order functions that return a transform depending on the current game/class/car
  /** @type function(any): any */
  const transformation =
    section in telemetry.transformations &&
    telemetry.transformations[section] &&
    property in telemetry.transformations[section] &&
    telemetry.transformations[section][property] &&
    propertyKey in telemetry.transformations[section][property] &&
    telemetry.transformations[section][property][propertyKey]
      ? telemetry.transformations[section][property][propertyKey](currentGame, currentCarClass, currentCarId)
      : (value) => value;

  const getFinalValue = (/** @type {string | number} */ rawValue) => {
    return calculateFinalValue(rawValue, labelMap, transformation);
  };

  return {
    property: propertyKey,
    transformation,
    labelMap,
    getFinalValue,
    availableValues: debugMode ? configContents : "Set debugMode = true to see available values",
  };
}

/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyOptimalRangesFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  section,
  property,
  debugMode,
  currentCarId
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId
  );

  if (debugMode) {
    return telemetry.availableValues;
  }

  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyOptimalRanges(currentGame, carClass, section, property, debugMode = true)\``
    );
  }
  const optimalRanges = telemetry.optimalRanges[section][property];

  // Return identity function if transformation is undefined. Transformations are higher order functions that return a transform depending on the current game/class/car
  /** @type function(any): any */
  const transformation =
    section in telemetry.transformations &&
    telemetry.transformations[section] &&
    property in telemetry.transformations[section] &&
    telemetry.transformations[section][property] &&
    propertyKey in telemetry.transformations[section][property] &&
    telemetry.transformations[section][property][propertyKey]
      ? telemetry.transformations[section][property][propertyKey](currentGame, currentCarClass, currentCarId)
      : (prop) => prop;

  return {
    property: propertyKey,
    transformation,
    optimalRanges: optimalRanges,
  };
}

/**
 * @param {{ [key: string]: any }} configContents
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentTyre
 * @param {string | undefined} selectedTyre
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPrimaryTyreMetricFromConfig(
  configContents,
  currentGame,
  currentCarClass,
  selectedTyre,
  debugMode,
  currentCarId,
  currentTyre
) {
  const telemetry = getTelemetryLabelsAndValuesFromConfig(
    configContents,
    currentGame,
    currentCarClass,
    debugMode,
    currentCarId,
    currentTyre
  );

  if (debugMode) {
    return telemetry.availableValues;
  }

  const tyreMetric = telemetry.optimalRanges.tyre.primaryTyreMetric;
  const tyreMetricGameProperty = telemetry.optimalRanges.tyre[`optimalTyre${tyreMetric}GameProperty`];
  const selectedTyreProperty = `${selectedTyre}${tyreMetric}`;

  return {
    tyreMetric,
    tyreMetricGameProperty,
    selectedProperty: selectedTyreProperty,
  };
}

/**
 * DEPRECATED: ALL TO BE REPLACED WITH .toml CONFIG BASED HELPERS
 */

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getMasterSectionLabel(currentGame, currentCarClass, section, debugMode, currentCarId) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.masterSectionUiLabels[section];

  if (label === undefined) {
    throw new Error(
      `${section} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}
/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyPopupLabel(currentGame, currentCarClass, section, property, debugMode, currentCarId) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.popupLabels[section][property];

  if (label === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyPopupLabel(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}
/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyUILabel(currentGame, currentCarClass, section, property, debugMode, currentCarId) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const label = telemetry.uiLabels[section][property];

  if (label === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyUILabel(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  return label;
}
/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyValue(currentGame, currentCarClass, section, property, debugMode, currentCarId) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId);

  if (debugMode) {
    return telemetry.availableValues;
  }
  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyValue(currentGame, carClass, section, property, debugMode = true)\``
    );
  }

  const labelMap = telemetry.labelMaps[section][property];
  // Return identity function if transformation is undefined. Transformations are higher order functions that return a transform depending on the current game/class/car
  /** @type function(any): any */
  const transformation =
    section in telemetry.transformations &&
    telemetry.transformations[section] &&
    property in telemetry.transformations[section] &&
    telemetry.transformations[section][property] &&
    propertyKey in telemetry.transformations[section][property] &&
    telemetry.transformations[section][property][propertyKey]
      ? telemetry.transformations[section][property][propertyKey](currentGame, currentCarClass, currentCarId)
      : (prop) => prop;

  return { property: propertyKey, transformation, labelMap };
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string} section
 * @param {string} property
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPropertyOptimalRanges(currentGame, currentCarClass, section, property, debugMode, currentCarId) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const propertyKey = telemetry.gameProperties[section][property];

  if (propertyKey === undefined) {
    throw new Error(
      `${section}:${property} was not found in telemetry. Run in debug mode to double check return values: \`getPropertyOptimalRanges(currentGame, carClass, section, property, debugMode = true)\``
    );
  }
  const optimalRanges = telemetry.optimalRanges[section][property];

  // Return identity function if transformation is undefined. Transformations are higher order functions that return a transform depending on the current game/class/car
  /** @type function(any): any */
  const transformation =
    section in telemetry.transformations &&
    telemetry.transformations[section] &&
    property in telemetry.transformations[section] &&
    telemetry.transformations[section][property] &&
    propertyKey in telemetry.transformations[section][property] &&
    telemetry.transformations[section][property][propertyKey]
      ? telemetry.transformations[section][property][propertyKey](currentGame, currentCarClass, currentCarId)
      : (prop) => prop;

  return {
    property: propertyKey,
    transformation,
    optimalRanges: optimalRanges,
  };
}

/**
 * @param {string} currentGame
 * @param {string | undefined} currentCarClass
 * @param {string | undefined} currentTyre
 * @param {string | undefined} selectedTyre
 * @param {boolean} debugMode
 * @param {string | undefined} currentCarId
 */
function getPrimaryTyreMetric(currentGame, currentCarClass, selectedTyre, debugMode, currentCarId, currentTyre) {
  const telemetry = getTelemetryLabelsAndValues(currentGame, currentCarClass, debugMode, currentCarId, currentTyre);

  if (debugMode) {
    return telemetry.availableValues;
  }

  const tyreMetric = telemetry.optimalRanges.tyre.primaryTyreMetric;
  const tyreMetricGameProperty = telemetry.optimalRanges.tyre[`optimalTyre${tyreMetric}GameProperty`];
  const selectedTyreProperty = `${selectedTyre}${tyreMetric}`;

  return {
    tyreMetric,
    tyreMetricGameProperty,
    selectedProperty: selectedTyreProperty,
  };
}
