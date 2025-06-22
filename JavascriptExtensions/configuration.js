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
0 = "Charging"
1 = "Low 1"
2 = "Low 2"
3 = "High 1"
4 = "High 2"
5 = "Quali"

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

[ers.mode.transformation."LMU_NeoRedPlugin.Extended.VM_ENGINE_MIXTURE"]
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
AssettoCorsa = "Mode"
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
"GameRawData.Physics.KersCharge" = { value = "<%value%> * 100" }
"mBatteryChargeFraction" = { value = "<%value%> * 100" }

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

[ers.recovery.transformation."LMU_NeoRedPlugin.Extended.VM_REGEN_LEVEL"]
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
AssettoCorsa = "LLap"
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
Generic = "Control"
GTE = "Elec"
GT3 = "Elec"
GT3_Gen1 = "Elec"
GT3_Gen2 = "Elec"

# ---- 2.a TRACTION CONTROL SECTION ----
# Describes current TC level
[carControl.tc.property]
Generic = "TCLevel"
Automobilista2 = "TCLevel"
AssettoCorsa = "TCLevel"
LMU = "LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP"

[carControl.tc.label]
Generic = "TC"

[carControl.tc.popup]
Generic = "TC LEVEL"

[carControl.tc.transformation."LMU_NeoRedPlugin.Extended.VM_TRACTIONCONTROLMAP"]
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
Generic = "SLIP"
Automobilista2 = ""
AssettoCorsaCompetizione = ""
iRacing = "TC1"

[carControl.tcSlip.label.LMU]
Generic = "SLIP"
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
Generic = "CUT"
Automobilista2 = ""
AssettoCorsaCompetizione = "Cut"
iRacing = "TC2"

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

[carControl.abs.transformation."LMU_NeoRedPlugin.Extended.VM_ANTILOCKBRAKESYSTEMMAP"]
value = "<%value%>.includes('OFF') ? 0 : parseInt(<%value%>)"

[carControl.abs.label]
Generic = "ABS"
Hyper = ""
LMP1 = ""
LMP2 = ""
GTE = ""

[carControl.abs.label.Automobilista2]
F-Ultimate_Gen1 = ""
F-Ultimate_Gen2 = ""
F-Reiza = ""

[carControl.abs.popup]
Generic = "ABS LEVEL"

# ---- 2.e BRAKE BIAS SECTION ----
# Describes current brake bias

[carControl.bb.property]
Generic = "BrakeBias"

[carControl.bb.label]
Generic = "BB"

[carControl.bb.popup]
Generic = "BRAKE BIAS"

# ---- 2.f BRAKE MIGRATION SECTION ----
# Describes current brake migration setting

[carControl.bm.property]
LMU = "LMU_NeoRedPlugin.Extended.VM_BRAKE_MIGRATION"

[carControl.bm.label]
Generic = ""

[carControl.bm.label.LMU]
Hyper = "BM"

[carControl.bm.popup]
Generic = "BRK MIGRATION"

`;

const configurationData = ERS_CONFIG;
