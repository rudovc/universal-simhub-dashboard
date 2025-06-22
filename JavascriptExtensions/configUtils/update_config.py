# Use this utility to generate the `configuration.js` file from which the configuration is loaded into memory
import os
import re
import shutil
import sys
from datetime import datetime


INPUT_FILE = "./configuration.toml"
OUTPUT_FILE = "../configuration.js"
BACKUP_DIR = os.path.join(os.path.dirname(OUTPUT_FILE), "backups")


def restore_backup(backup_filename: str):
    computed_filename = (
        backup_filename
        if backup_filename.endswith(".bak")
        else backup_filename + ".bak"
    )
    backup_path = os.path.join(BACKUP_DIR, computed_filename)
    if not os.path.isfile(backup_path):
        print(f"Did not find backup '{computed_filename}' in path {backup_path}.")
        return

    if not confirm_overwrite():
        return

    shutil.copy2(backup_path, OUTPUT_FILE)
    print(f"Restored backup '{computed_filename}' to '{OUTPUT_FILE}'")


def back_up_old_config(output_file: str):
    if not os.path.isfile(output_file):
        return

    backup_dir = BACKUP_DIR
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


def confirm_overwrite(hide_prompt: bool = False) -> bool:
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
    args = sys.argv[1:]

    if args:
        if args[0] != "--restore" or len(args) != 2:
            print("Did not recognise command line arguments.")
            print(
                "Usage:\nUse the configuration from configuration.toml: No arguments\nRestore configuration file from a backup: --restore <backup_filename>"
            )
            return
        restore_backup(args[1])
        return

    if not confirm_overwrite():
        print("Ok. Exiting...")
        return

    back_up_old_config(OUTPUT_FILE)

    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        toml_contents = f.read().replace("`", r"\`")
        toml_contents = re.sub(r"\${([a-zA-Z0-9]+)}", r"\$\{\1\}", toml_contents)

    js_header = """// @ts-check
/**
 * This is a horrible hack used because we can't access the file system from JS using SimHub
 * It's going to stay here for a while, but I'm planning to replace it with a SimHub plugin
 * The plugin should read the configuration file into memory and share it with the JS extension
 * Eventually, it might contain a GUI that would allow the user to modify the configuration directly in SimHub
 */
const ERS_CONFIG = `"""

    js_footer = "`;\n\nconst configurationData = ERS_CONFIG;\n"

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        f.write(js_header)
        f.write("\n")
        f.write(toml_contents)
        f.write("\n")
        f.write(js_footer)


if __name__ == "__main__":
    main()
