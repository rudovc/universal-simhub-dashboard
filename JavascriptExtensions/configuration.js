// @ts-check
/**
 * This is a horrible hack used because we can't access the file system from JS using SimHub
 * It's going to stay here for a while, but I'm planning to replace it with a SimHub plugin
 * The plugin should read the configuration file into memory and share it with the JS extension
 * Eventually, it might contain a GUI that would allow the user to modify the configuration directly in SimHub
 */
const ERS_CONFIG = `
#:schema /JavascriptExtensions/configUtils/schema.json

# Set up your own editor to validate based on the schema in this directory, or run an external validation tool against it

# ==== 1. ERS SECTION ====
# All hardcoded maps labels and game properties related to ERS functionality go here
# ========================

# Name of the ERS (top-right) section in the dashboard
[ers.master_label]
Generic = "MOTOR"
Hyper = "ERS"
LMDh = "ERS"
LMP1 = "ERS"
AssettoCorsaCompetizione = "ENGINE"
GT3 = "SETT"
GT3_Gen1 = "SETT"
GT3_Gen2 = "SETT"
GTE = "SETT"

# ---- 1.a ERS MODE SECTION ----
# Describes the current ERS deployment mode in the dashboard
# If empty, the value from the game is used
[ers.mode.value.Automobilista2.Generic]
1 = "OFF"
2 = "BUILD"
3 = "BALANCED"
4 = "ATTACK"
5 = "QUALI"

[ers.mode.value.AssettoCorsa.Generic]
0 = "CHARGING"
1 = "LOW 1"
2 = "LOW 2"
3 = "HIGH 1"
4 = "HIGH 2"
5 = "QUALI"

[ers.mode.value.AssettoCorsaCompetizione.amr_v12_vantage_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.amr_v8_vantage_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.audi_r8_lms_evo]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.audi_r8_lms_evoii]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.bentley_continental_gt3_2015]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"
[ers.mode.value.AssettoCorsaCompetizione.bentley_continental_gt3_2018]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.bmw_m6_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - RESERVE"
5 = "5 - SAFETY CAR"
6 = "6 - WET FAST"
7 = "7 - WET"
8 = "8 - WET"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.bmw_m4_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - RESERVE"
5 = "5 - SAFETY CAR"
6 = "6 - WET FAST"
7 = "7 - WET"
8 = "8 - WET"

[ers.mode.value.AssettoCorsaCompetizione.ferrari_488_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY FUEL SAVE"
3 = "3 - DRY"
4 = "4 - DRY SLOW"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET"
8 = "8 - WET SLOW"
9 = "9 - SAFETY CAR"
10 = "10 - SAFETY CAR"
11 = "11 - SAFETY CAR"
12 = "12 - SAFETY CAR"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.ferrari_488_gt3_evo]
1 = "1 - DRY FAST"
2 = "2 - DRY FAST"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - DRY FUEL SAVE"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET"
8 = "8 - WET SLOW"
9 = "9 - SAFETY CAR"
10 = "10 - SAFETY CAR"
11 = "11 - SAFETY CAR"
12 = "12 - SAFETY CAR"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.emil_frey_jaguar_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY FUEL SAVE"
4 = "4 - WET FAST"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.honda_nsx_gt3]
1 = "1 - DRY PROG"
2 = "2 - DRY LINEAR"
3 = "3 - DRY AGGR"
4 = "4 - DRY MAX"
5 = "5 - WET PROG"
6 = "6 - WET PROG"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"
[ers.mode.value.AssettoCorsaCompetizione.honda_nsx_gt3_evo]
1 = "1 - DRY PROG"
2 = "2 - DRY LINEAR"
3 = "3 - DRY AGGR"
4 = "4 - DRY MAX"
5 = "5 - WET PROG"
6 = "6 - WET PROG"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.lamborghini_huracan_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.lamborghini_huracan_gt3_evo]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET FUEL SAVE"
8 = "8 - SAFETY CAR"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.lexus_rc_f_gt3]
1 = "1 - DRY LINEAR"
2 = "2 - DRY AGGR"
3 = "3 - DRY PROG"
4 = "4 - FUEL SAVE / WET"
5 = "5 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.mclaren_650s_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY"
4 = "4 - DRY FUEL SAVE"
5 = "5 - WET FAST"
6 = "6 - WET FUEL SAVE"
7 = "7 - WET"
8 = "8 - WET FUEL SAVE"
9 = "9 - SAFETY CAR"

[ers.mode.value.AssettoCorsaCompetizione.mclaren_720s_gt3]
1 = "1 - QUALI"
2 = "2 - RACE 1"
3 = "3 - RACE 2"
4 = "4 - RACE 1 FUEL SAVE"
5 = "5 - RACE 2 FUEL SAVE"
6 = "6 - RACE 3 FUEL SAVE"
7 = "7 - ENGINE HI TEMP"
8 = "8 - DAMP QUALI"
9 = "9 - DAMP RACE FUEL SAVE"
10 = "10 - WET QUALI"
11 = "11 - WET RACE 1"
12 = "12 - WET RACE 2"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.mclaren_720s_gt3_evo]
1 = "1 - QUALI"
2 = "2 - RACE 1"
3 = "3 - RACE 2"
4 = "4 - RACE 1 FUEL SAVE"
5 = "5 - RACE 2 FUEL SAVE"
6 = "6 - RACE 3 FUEL SAVE"
7 = "7 - ENGINE HI TEMP"
8 = "8 - DAMP QUALI"
9 = "9 - DAMP RACE FUEL SAVE"
10 = "10 - WET QUALI"
11 = "11 - WET RACE 1"
12 = "12 - WET RACE 2"

[ers.mode.value.AssettoCorsaCompetizione.mercedes_amg_gt3]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY FUEL SAVE"
4 = "4 - FUEL SAVE MODE"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.mercedes_amg_gt3_evo]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY FUEL SAVE"
4 = "4 - FUEL SAVE MODE"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.nissan_gt_r_gt3_2015]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY FUEL SAVE"
4 = "4 - FUEL SAVE MODE"
[ers.mode.value.AssettoCorsaCompetizione.nissan_gt_r_gt3_2018]
1 = "1 - DRY FAST"
2 = "2 - DRY"
3 = "3 - DRY FUEL SAVE"
4 = "4 - FUEL SAVE MODE"

[ers.mode.value.AssettoCorsaCompetizione.porsche_911ii_gt3_r]
1 = "1 - DRY"
2 = "2 - DRY PROG"
3 = "3 - DRY AGGR"
4 = "4 - WET"
5 = "5 - QUALI"
6 = "6 - QUALI PROG"
7 = "7 - QUALI AGGR"
8 = "8 - DRY QUALI"
9 = "9 - FUEL SAVE"
10 = "10 - SAFETY CAR"
# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.porsche_911_gt3_r]
1 = "1 - DRY"
2 = "2 - DRY PROG"
3 = "3 - DRY AGGR"
4 = "4 - WET"
5 = "5 - QUALI"
6 = "6 - QUALI PROG"
7 = "7 - QUALI AGGR"
8 = "8 - DRY QUALI"
9 = "9 - FUEL SAVE"
10 = "10 - SAFETY CAR"

# Not tested: I do not own this car for ACC. The car ID might need to be changed to match the in-game car ID
[ers.mode.value.AssettoCorsaCompetizione.reiter_engineering_r_ex_gt3]
1 = "1 - FAST"
2 = "2 - AGGR"
3 = "3 - PROG"
4 = "4 - FUEL SAVE"

# Which SimHub property should the dashboard use to get data for this value?
[ers.mode.property]
Generic = "EngineMap"
AssettoCorsa = "GameRawData.Physics.ErsPowerLevel"

[ers.mode.property.Automobilista2]
Generic = "GameRawData.mErsDeploymentMode"
# TODO: Figure out AMS2 game property for GT fuel mix
GT3_Gen1 = ""
GT3_Gen2 = ""

[ers.mode.property.LMU]
Hyper = "LMU_NeoRedPlugin.Extended.VM_ELECTRIC_MOTOR_MAP"
Generic = "LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE"

[ers.mode.transformation."LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE".Generic]
value = """
{
    if(<%value%>.length <= 6) {
        return <%value%>.toUpperCase();
    }

    const wordSections = <%value%>.split(/[-_ ,.]/);

    return wordSections.map((value) => value.charAt(0).toUpperCase()).join("");
}
"""

[ers.mode.label]
Generic = "Mode"
AssettoCorsa = { Generic = "Mode", vrc_formula_alpha_2024_csp = "Strat" }
LMP1 = "Deploy"
AssettoCorsaCompetizione = "Map"
GT3 = "Map"
GTE = "Mix"
LMU = { Hyper = "Map" }

[ers.mode.label.Automobilista2]
Generic = "Mode"
LMDh = "Mode"
F-Reiza = ""
GT3_Gen1 = "Map"
GT3_Gen2 = "Map"

[ers.mode.popup]
Generic = "MODE"
AssettoCorsa = "MODE"
AssettoCorsaCompetizione = "ENGINE MAP"
LMU = { Hyper = "MOTOR MAP" }
GT3 = "MOTOR MAP"
GTE = "ENGINE MIX"

[ers.mode.popup.Automobilista2]
Generic = "MODE"
GT3_Gen1 = "ENGINE MAP"
GT3_Gen2 = "ENGINE MAP"


# ---- 1.b ERS SOC SECTION ----
# Describes current ERS state of charge in % units
[ers.soc.property]
Generic = "ERSPercent"
Automobilista2 = "ERSPercent"
AssettoCorsa = "GameRawData.Physics.KersCharge"
LMU = "GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction"

[ers.soc.transformation]
"GameRawData.Physics.KersCharge" = { Generic = { value = "<%value%> * 100" } }
"GameRawData.CurrentPlayerTelemetry.mBatteryChargeFraction" = { Generic = { value = "<%value%> * 100" } }

[ers.soc.label]
Generic = ""
AssettoCorsa = "SoC"
Hyper = "SoC"
LMDh = "SoC"
LMP2 = ""
GT3 = ""
GT3_Gen1 = ""
GT3_Gen2 = ""
GTE = ""

# ---- 1.c ERS CURRENT SECTION ----
# Describes current state of hybrid system, e.g. whether it is deploying/recharging
[ers.current.value.Automobilista2.Generic]
1 = { label = "Idle", color = "#FFFFFFFF" }
2 = { label = "Regen", color = "#FF40E0D0" }
3 = { label = "Deploy", color = "#FFFFD700" }

[ers.current.value.AssettoCorsa.Generic]
1 = { label = "Idle", color = "#FFFFFFFF" }

[ers.current.value.LMU.Generic]
1 = { label = "Idle", color = "#FFFFFFFF" }
2 = { label = "Deploy", color = "#FFFFD700" }
3 = { label = "Regen", color = "#FF40E0D0" }

[ers.current.property]
Generic = "unimplemented"
Automobilista2 = "GameRawData.mErsDeploymentMode"
AssettoCorsa = "GameRawData.mErsDeploymentMode"
LMU = "GameRawData.CurrentPlayerTelemetry.mElectricBoostMotorState"

[ers.current.label]
Generic = "ERS"
AssettoCorsa = "ERS"
LMP1 = "ERS"
LMDh = "ERS"
Hyper = "ERS"
GTE = ""
GT3 = ""
GT3_Gen1 = ""
GT3_Gen2 = ""

# ---- 1.d ERS RECOVERY SECTION ----
# Describes current ERS deployment mode
[ers.recovery.property]
Generic = ""
LMU = "LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL"

[ers.recovery.property.AssettoCorsa]
vrc_formula_alpha_2024_csp = "DataCorePlugin.GameRawData.Physics.ErsHeatCharging"

[ers.recovery.transformation."LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL".Generic]
value = "<%value%> === 'N/A' ? '-' : <%value%>"

[ers.recovery.label]
Generic = ""
Automobilista2 = ""
AssettoCorsa = "Recovery"
Hyper = "Regen"
LMP2 = ""
GTE = ""
GT3 = ""
GT3_Gen1 = ""
GT3_Gen2 = ""

[ers.recovery.value.AssettoCorsa]
vrc_formula_alpha_2024_csp = { 0 = "MOTOR", 1 = "BATT" }

[ers.recovery.popup]
Generic = "ERS RECOVERY"
Automobilista2 = "ERS RECOVERY"
AssettoCorsa = "ERS RECOVERY"
LMU = { Hyper = "REGEN LEVEL" }

# ---- 1.e ERS DELTA SECTION ----
# Describes ERS delta to last lap
[ers.delta.label]
Generic = ""
AssettoCorsa = "Δ"
LMP1 = "Δ"
Hyper = "Δ"
LMDh = "Δ"
LMP2 = ""
GT3 = ""
GT3_Gen1 = ""
GT3_Gen2 = ""
GTE = ""

[ers.delta.property]
# "reference" key tells the dashboard to use the value from a different entry
reference = "ers.soc.property"
[ers.delta.transformation]
reference = "ers.soc.transformation"

# ---- 1.f ERS LAP SECTION ----
# Describes state of ERS at the moment of the last lap
[ers.lap.label]
Generic = ""
AssettoCorsa = "Lap"
Hyper = "LLap"
LMP1 = "LLap"
LMDh = "LLap"
LMP2 = ""
GTE = ""
GT3 = ""
GT3_Gen1 = ""
GT3_Gen2 = ""

[ers.lap.property]
reference = "ers.soc.property"
[ers.lap.transformation]
reference = "ers.soc.transformation"

# ==== 2. CAR CONTROL SECTION ====
# All hardcoded maps labels and game properties related to car control settings (TC, ABS, brake balance) go here
# ========================

[carControl.master_label]
Generic = "CONTROL"
GTE = "ELEC"
GT3 = "ELEC"
GT3_Gen1 = "ELEC"
GT3_Gen2 = "ELEC"

# ---- 2.a TRACTION CONTROL SECTION ----
# Describes current TC level
[carControl.tc.property]
Generic = "TCLevel"
Automobilista2 = "TCLevel"
AssettoCorsa = "TCLevel"
LMU = "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP"

[carControl.tc.label]
Generic = "TC"
AssettoCorsa = { vrc_formula_alpha_2024_csp = "" }

[carControl.tc.popup]
Generic = "TC LEVEL"

[carControl.tc.transformation."LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP".Generic]
value = """
{
    if (<%value%>.includes("OFF")) {
    return "OFF";
    }

    const labelIndex = <%value%>.indexOf("(");
    const label = <%value%>[labelIndex + 1];
    const tcLevel = Number.parseInt(<%value%>);

    if (!tcLevel) {
    return "OFF";
    }

    return labelIndex > 0 ? \`\$\{tcLevel\} (\$\{label\})\` : tcLevel;
}
"""
# ---- 2.b TC SLIP SECTION ----
# Describes current TC slip level
[carControl.tcSlip.property]
LMU = "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLSLIPANGLEMAP"

[carControl.tcSlip.label]
Generic = "Slip"
Automobilista2 = ""
AssettoCorsaCompetizione = ""
iRacing = "TC1"
AssettoCorsa = { vrc_formula_alpha_2024_csp = "" }

[carControl.tcSlip.label.LMU]
Generic = "Slip"
LMP2 = ""

[carControl.tcSlip.popup]
Generic = "TC SLIP LEVEL"
iRacing = "TC1 LEVEL"

# ---- 2.c TC CUT SECTION ----
# Describes current TC cut level

[carControl.tcCut.property]
AssettoCorsaCompetizione = "GameRawData.Graphics.TCCut"
LMU = "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLPOWERCUTMAP"

[carControl.tcCut.label]
Generic = "Cut"
Automobilista2 = ""
AssettoCorsaCompetizione = "Cut"
iRacing = "TC2"
AssettoCorsa = { vrc_formula_alpha_2024_csp = "" }

[carControl.tcCut.popup]
Generic = "TC CUT LEVEL"
AssettoCorsaCompetizione = "TC CUT LEVEL"
iRacing = "TC2 LEVEL"

# ---- 2.d ABS SECTION ----
# Describes current ABS level

[carControl.abs.property]
Generic = "ABSLevel"
LMU = "LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP"

[carControl.abs.value.LMU]
0 = "Off"
1 = "o 1 (LO)"
2 = "o 1 (MD)"
3 = "o 1 (HI)"
4 = "n 4 (LO)"
5 = "n 5 (MD)"
6 = "n 6 (HI)"
7 = "u 7 (LO)"
8 = "u 8 (MD)"
9 = "u 9 (HI)"

[carControl.abs.transformation."LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP".Generic]
value = "<%value%>.includes('OFF') ? 0 : parseInt(<%value%>)"

[carControl.abs.label]
Generic = "ABS"
Hyper = ""
LMP1 = ""
LMP2 = ""
GTE = ""
AssettoCorsa = { vrc_formula_alpha_2024_csp = "" }

[carControl.abs.label.Automobilista2]
F-Ultimate_Gen1 = ""
F-Ultimate_Gen2 = ""
F-Reiza = ""

[carControl.abs.popup]
Generic = "ABS LEVEL"

# ---- 2.e BRAKE BIAS SECTION ----
# Describes current brake bias

[carControl.brakeBias.property]
Generic = "BrakeBias"

[carControl.brakeBias.label]
Generic = "BB"

[carControl.brakeBias.popup]
Generic = "BRAKE BIAS"

# ---- 2.f BRAKE MIGRATION SECTION ----
# Describes current brake migration setting

[carControl.brakeMigration.property]
LMU = "LMU_NeoRedPlugin.Extended.VM_BRAKE_MIGRATION"

[carControl.brakeMigration.label]
Generic = ""

[carControl.brakeMigration.label.LMU]
Hyper = "BM"

[carControl.brakeMigration.popup]
Generic = "BRK MIGRATION"

# ==== 3. FUEL SECTION ====
# All fuel information and calculations go here
# ========================

[fuel.master_label]
Generic = "FUEL"
GTE = "FUEL"
GT3 = "FUEL"
Hyper = "F/NRG"

# ---- 3.a FUEL STATE SECTION ----
# Describes current Fuel state in liters
[fuel.state.property]
Generic = "Fuel"

[fuel.state.label]
Generic = "Tank"

# ---- 3.b FUEL USAGE SECTION ----
# Describes Fuel usage over the current lap
[fuel.usage.property]
Generic = "DataCorePlugin.Computed.Fuel_CurrentLapConsumption"

[fuel.usage.label]
Generic = "TLap"

# ---- 3.c FUEL TIME SECTION ----
# Projected remaining stint time at the current fuel usage rate
[fuel.time.property]
Generic = "DataCorePlugin.Computed.Fuel_RemainingTime"

[fuel.time.label]
Generic = "ETime"

# ---- 3.d FUEL LAPS SECTION ----
# Projected remaining laps number at the current fuel usage rate
[fuel.laps.property]
Generic = "DataCorePlugin.Computed.Fuel_RemainingLaps"

[fuel.laps.label]
Generic = "ELaps"

# ---- 3.e FUEL DELTA SECTION ----
# Describes fuel delta to last lap
[fuel.delta.property]
reference = "fuel.state.property"

[fuel.delta.property.LMU]
Hyper = "LMU_NeoRedPlugin.Energy.VE.Current_%"

[fuel.delta.label]
Generic = "Δ"

[fuel.delta.transformation.Fuel.Generic]
value = "Number(<%value%>).toFixed(2)"

[fuel.delta.transformation."LMU_NeoRedPlugin.Energy.VE.Current_%".Generic]
value = "<%value%>.toFixed(2)"

# ---- 3.f NRG STATE SECTION ----
# Current Virtual Energy allowance state
[fuel.nrgState.property]
Generic = ""
AssettoCorsa = "ERSPercent"

[fuel.nrgState.property.LMU]
Generic = "Fuel"
Hyper = "LMU_NeoRedPlugin.Energy.VE.Current_%"

[fuel.nrgState.label]
Generic = ""
AssettoCorsa = "ERS Max"

[fuel.nrgState.label.LMU]
Generic = ""
Hyper = "NRG"

[fuel.nrgState.transformation.ERSPercent.Generic]
value = "<%value%>.toFixed(2)"

[fuel.nrgState.transformation."LMU_NeoRedPlugin.Energy.VE.Current_%".Generic]
value = "<%value%>.toFixed(2)"

# ---- 3.g NRG USAGE SECTION ----
# Current NRG usage per lap
[fuel.nrgUsage.property.LMU]
Hyper = "LMU_NeoRedPlugin.Energy.VE.FractionPerLap_%"

[fuel.nrgUsage.label]
Generic = ""

[fuel.nrgUsage.label.LMU]
Generic = ""
Hyper = "Laps"

[fuel.nrgUsage.transformation."LMU_NeoRedPlugin.Energy.VE.FractionPerLap_%".Generic]
value = "<%value%>.toFixed(2)"

# ==== 4. TEMPERATURES SECTION ====
# Essential temperature information goes here
# ========================

[temperature.master_label]
Generic = "TEMP"

# ---- 4.a OIL TEMP SECTION ----
[temperature.oil.property]
Generic = "OilTemperature"

[temperature.oil.label]
Generic = "Oil"

[temperature.oil.transformation.OilTemperature.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 4.b WATER TEMP SECTION ----
[temperature.water.property]
Generic = "WaterTemperature"

[temperature.water.label]
Generic = "Water"

[temperature.water.transformation.WaterTemperature.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 4.c ENGINE TEMP SECTION ----
# TODO: Fill out the engine temp section for games that provide engine temp information
[temperature.engine.property]

[temperature.engine.label]

[temperature.engine.transformation]

# ==== 5. TYRES SECTION ====
# All information regarding tyre temperatures and wear goes here
# ========================

[tyres.master_label]
Generic = "TYRES"

# ---- 5.a FL TEMP SECTION ----
[tyres.flTemp.property]
Generic = "TyreTemperatureFrontLeft"

[tyres.flTemp.label]
Generic = "°FL"

[tyres.flTemp.transformation.TyreTemperatureFrontLeft.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 5.b FL WEAR SECTION ----
[tyres.flWear.property]
Generic = "TyreWearFrontLeft"

[tyres.flWear.label]
Generic = "%FL"

[tyres.flWear.transformation.TyreWearFrontLeft]
Generic = { value = "Number.parseInt(<%value%>.toFixed(0))" }
# AssettoCorsaCompetizione = { Generic = { value = "100 - Number.parseInt(<%value%>.toFixed(0))" } }

# ---- 5.c FL PRES SECTION ----
[tyres.flPres.property]
Generic = "TyrePressureFrontLeft"

[tyres.flPres.label]
Generic = "%FL"

[tyres.flPres.transformation.TyrePressureFrontLeft.Generic]
value = "Number.parseFloat(<%value%>.toFixed(1))"

# ---- 5.d FR TEMP SECTION ----
[tyres.frTemp.property]
Generic = "TyreTemperatureFrontRight"

[tyres.frTemp.label]
Generic = "°FR"

[tyres.frTemp.transformation.TyreTemperatureFrontRight.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 5.e FR WEAR SECTION ----
[tyres.frWear.property]
Generic = "TyreWearFrontRight"

[tyres.frWear.label]
Generic = "%FR"

[tyres.frWear.transformation.TyreWearFrontRight]
Generic = { value = "Number.parseInt(<%value%>.toFixed(0))" }
# AssettoCorsaCompetizione = { Generic = { value = "100 - Number.parseInt(<%value%>.toFixed(0))" } }

# ---- 5.f FR PRES SECTION ----
[tyres.frPres.property]
Generic = "TyrePressureFrontRight"

[tyres.frPres.label]
Generic = "%FR"

[tyres.frPres.transformation.TyrePressureFrontRight.Generic]
value = "Number.parseFloat(<%value%>.toFixed(1))"

# ---- 5.g RL TEMP SECTION ----
[tyres.rlTemp.property]
Generic = "TyreTemperatureRearLeft"

[tyres.rlTemp.label]
Generic = "°RL"

[tyres.rlTemp.transformation.TyreTemperatureRearLeft.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 5.h RL WEAR SECTION ----
[tyres.rlWear.property]
Generic = "TyreWearRearLeft"

[tyres.rlWear.label]
Generic = "%RL"

[tyres.rlWear.transformation.TyreWearRearLeft]
Generic = { value = "Number.parseInt(<%value%>.toFixed(0))" }
# AssettoCorsaCompetizione = { Generic = { value = "100 - Number.parseInt(<%value%>.toFixed(0))" } }

# ---- 5.i RL PRES SECTION ----
[tyres.rlPres.property]
Generic = "TyrePressureRearLeft"

[tyres.rlPres.label]
Generic = "%RL"

[tyres.rlPres.transformation.TyrePressureRearLeft.Generic]
value = "Number.parseFloat(<%value%>.toFixed(1))"

# ---- 5.j RR TEMP SECTION ----
[tyres.rrTemp.property]
Generic = "TyreTemperatureRearRight"

[tyres.rrTemp.label]
Generic = "°RR"

[tyres.rrTemp.transformation.TyreTemperatureRearRight.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 5.k RR WEAR SECTION ----
[tyres.rrWear.property]
Generic = "TyreWearRearRight"

[tyres.rrWear.label]
Generic = "%RR"

[tyres.rrWear.transformation.TyreWearRearRight]
Generic = { value = "Number.parseInt(<%value%>.toFixed(0))" }
# AssettoCorsaCompetizione = { Generic = { value = "100 - Number.parseInt(<%value%>.toFixed(0))" } }

# ---- 5.l RR PRES SECTION ----
[tyres.rrPres.property]
Generic = "TyrePressureRearRight"

[tyres.rrPres.label]
Generic = "%RR"

[tyres.rrPres.transformation.TyrePressureRearRight.Generic]
value = "Number.parseFloat(<%value%>.toFixed(1))"


# ---- 5.m PRIMARY METRIC ----
[tyres.ideal.primary_metric]
Generic = "pres"

# ---- 5.n IDEAL TEMP GAME PROPERTY ----
[tyres.ideal.temp.property.LMU]
Hard = "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Hard"
Medium = "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Medium"
Soft = "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Soft"
Wet = "LMU_NeoRedPlugin.Tyre.OptimalCompoundTemp_Wet"

# ---- 5.n IDEAL TEMP RANGE ----
[tyres.ideal.temp.range.LMU.Generic]
optimal = 90
goodThreshold = 10
criticalThreshold = 25

# ---- 5.n IDEAL WEAR RANGE ----
[tyres.ideal.wear.range.Generic]
optimal = 100
goodThreshold = 20
criticalThreshold = 40

# ---- 5.n IDEAL PRESSURE RANGE ----
[tyres.ideal.pres.range.Generic]
optimal = 26
goodThreshold = 2
criticalThreshold = 5

[tyres.ideal.pres.range.Automobilista2.Generic]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.Automobilista2.F-Ultimate_Gen1]
optimal = 24
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.Automobilista2.F-Ultimate_Gen2]
optimal = 24
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.Automobilista2.F-Reiza]
optimal = 24
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.AssettoCorsaCompetizione.Generic]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.Hyper]
optimal = 25
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMDh]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMU.Generic]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMU.GT3]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMU.GTE]
optimal = 28
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMU.Hyper]
optimal = 25
goodThreshold = 1
criticalThreshold = 3

[tyres.ideal.pres.range.LMU.LMP2]
optimal = 25
goodThreshold = 1
criticalThreshold = 3

# ---- 5.o FL TYRE SECTION ----
[tyres.flType.property]
LMU = "LMU_NeoRedPlugin.Tyre.FL_TyreCompound_Name"

[tyres.flType.label]
Generic = "FL"

# ---- 5.p FR TYRE SECTION ----
[tyres.frType.property]
LMU = "LMU_NeoRedPlugin.Tyre.FR_TyreCompound_Name"

[tyres.frType.label]
Generic = "FR"

# ---- 5.q RL TYRE SECTION ----
[tyres.rlType.property]
LMU = "LMU_NeoRedPlugin.Tyre.RL_TyreCompound_Name"

[tyres.rlType.label]
Generic = "RL"

# ---- 5.r RR TYRE SECTION ----
[tyres.rrType.property]
LMU = "LMU_NeoRedPlugin.Tyre.RR_TyreCompound_Name"

[tyres.rrType.label]
Generic = "RR"

# ==== 9. MISCELLANEOUS SECTION ====
# Things that don't cleanly fit any of the other categories
# ========================

[misc.master_label]
Generic = "Misc"

# ---- 9.a PIT LIMITER SECTION ----
[misc.limiter.property]
Generic = "PitLimiterOn"

[misc.limiter.label]
Generic = "PIT LIMITER"

[misc.limiter.popup]
Generic = "PIT LIMITER"

# ---- 9.b IGNITION SECTION ----
[misc.ignition.property]
Generic = "EngineIgnitionOn"

[misc.ignition.value]
Generic = { 0 = { label = "OFF", color = "#FFFF0000" }, 1 = { label = "ON", color = "#FF0A49A9" } }

[misc.ignition.label]
Generic = "IGNITION"

[misc.ignition.popup]
Generic = "IGNITION"
AssettoCorsa = { vrc_formula_alpha_2024_csp = "ENGINE" }

# ---- 9.c STARTER SECTION ----
[misc.starter.property]
Generic = "EngineStarted"

[misc.starter.value]
Generic = { 0 = "OFF", 1 = "STARTED" }

[misc.starter.label]
Generic = "STARTER"

[misc.starter.popup]
Generic = "STARTER"

# ---- 9.d DRS SECTION ----
[misc.drsAvailable.property]
Generic = "DRSAvailable"

[misc.drsAvailable.label]
Generic = "DRS Available"

[misc.drsActive.property]
Generic = "DRSEnabled"

[misc.drsActive.label]
Generic = "DRS Enabled"

# ---- 9.e THEME SECTION ----
[misc.theme.colors]
default = "#FFFFFFFF"
background = "#FF0A49A9"
drsActive = "#FF8A2BE2"
drsAvailable = "#C840C919"
limiter = "#C8E38300"
optimal = "#FFFFFFFF"
good = "#FFFFFF00"
critical = "#FFFF0000"
positive = "#FF00FF00"
negative = "#FFFF0000"

# ==== 6. BRAKES SECTION ====
# All information regarding tyre temperatures and wear goes here
# ========================

[brakes.master_label]
Generic = "BRAKES"

# ---- 6.a FL TEMP SECTION ----
[brakes.flTemp.property]
Generic = "BrakeTemperatureFrontLeft"

[brakes.flTemp.label]
Generic = "°FL"

[brakes.flTemp.transformation.BrakeTemperatureFrontLeft.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 6.b FR TEMP SECTION ----
[brakes.frTemp.property]
Generic = "BrakeTemperatureFrontRight"

[brakes.frTemp.label]
Generic = "°FR"

[brakes.frTemp.transformation.BrakeTemperatureFrontLeft.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 6.c RL TEMP SECTION ----
[brakes.rlTemp.property]
Generic = "BrakeTemperatureRearLeft"

[brakes.rlTemp.label]
Generic = "°RL"

[brakes.rlTemp.transformation.BrakeTemperatureRearLeft.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 6.d RR TEMP SECTION ----
[brakes.rrTemp.property]
Generic = "BrakeTemperatureRearRight"

[brakes.rrTemp.label]
Generic = "°RR"

[brakes.rrTemp.transformation.BrakeTemperatureRearRight.Generic]
value = "Number.parseInt(<%value%>.toFixed(0))"

# ---- 6.e IDEAL BRAKE TEMP RANGE ----
[brakes.ideal.temp.range.Generic]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.GT3]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.GT3_Gen1]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.GT3_Gen2]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.Hyper]
optimal = 550
goodThreshold = 200
criticalThreshold = 300

[brakes.ideal.temp.range.LMDh]
optimal = 550
goodThreshold = 200
criticalThreshold = 300

[brakes.ideal.temp.range.AssettoCorsaCompetizione.Generic]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.LMU.GT3]
optimal = 500
goodThreshold = 250
criticalThreshold = 250

[brakes.ideal.temp.range.LMU.Hyper]
optimal = 550
goodThreshold = 200
criticalThreshold = 300

# ---- 1.f ENGINE BRAKING SECTION ----
# Describes state of ERS at the moment of the last lap
[misc.engineBraking.label]
Generic = ""
AssettoCorsa = "ENG BRK"

[misc.engineBraking.property]
AssettoCorsa = "GameRawData.Physics.EngineBrake"

`;

const configurationData = ERS_CONFIG;
