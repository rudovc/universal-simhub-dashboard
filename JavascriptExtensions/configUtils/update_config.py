# Use this utility to generate the `configuration.js` file from which the configuration is loaded into memory
import os
import shutil
from datetime import datetime


def back_up_old_config(output_file):
    if not os.path.isfile(output_file):
        return

    backup_dir = os.path.join(os.path.dirname(output_file), "backups")
    os.makedirs(backup_dir, exist_ok=True)

    date_str = datetime.now().strftime("%Y-%m-%d_%H-%M-%S")
    backup_file = os.path.join(backup_dir, f"configuration_{date_str}.js.bak")
    shutil.copy2(output_file, backup_file)

    # Keep only the 3 most recent backups
    backups = sorted(
        [
            f
            for f in os.listdir(backup_dir)
            if f.startswith("configuration_") and f.endswith(".js")
        ],
        reverse=True,
    )
    for old_backup in backups[3:]:
        old_path = os.path.join(backup_dir, old_backup)
        os.remove(old_path)


def confirm_overwrite(hide_prompt=False):
    if not hide_prompt:
        print(
            "\033[33mWARN: This will overwrite the existing '../configuration.js' file.\033[00m"
        )
    response = input("Are you sure you want to continue? [y/N]: ").strip().lower()
    if response == "y":
        return True
    elif response == "n":
        return False
    else:
        print("Did not understand response; try again.")
        return confirm_overwrite()


def main():
    input_file = "./configuration.toml"
    output_file = "../configuration.js"

    if not confirm_overwrite():
        print("Ok. Exiting...")
        return

    back_up_old_config(output_file)

    with open(input_file, "r", encoding="utf-8") as f:
        toml_contents = f.read()

    js_header = """// @ts-check
/**
 * This is a horrible hack used because we can't access the file system from JS using SimHub
 * It's going to stay here for a while, but I'm planning to replace it with a SimHub plugin
 * The plugin should read the configuration file into memory and share it with the JS extension
 * Eventually, it might contain a GUI that would allow the user to modify the configuration directly in SimHub
 */
const ERS_CONFIG = `"""

    js_footer = "`;\n\nconst configurationData = ERS_CONFIG;\n"

    with open(output_file, "w", encoding="utf-8") as f:
        f.write(js_header)
        f.write("\n")
        f.write(toml_contents)
        f.write("\n")
        f.write(js_footer)


if __name__ == "__main__":
    main()
