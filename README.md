# Universal Simhub Dashboard

This is a hacky attempt at creating an easily configurable universal SimHub dashboard,
because I was annoyed at having to create new dashes and/or create conditions
for different types of car, class or games that I play.

## Dependencies

- SimHub by SHWotever
- Enabled System Info plugin in SimHub (instructions available on the [SimHub Wiki](https://github.com/SHWotever/SimHub/wiki/System-informations))
- The super helpful
  [SimHub NeoRed Plugins](https://www.overtake.gg/downloads/lmu-neosuperdash.77210/)
  by Haagel -
  only needed if you want to use this dash for Le Mans Ultimate.
  (originally I wanted to use just native SimHub properties,
  but LMU is still building up native support for
  SimHub and may not ever have all of the needed propertie)

## Installation

### From source

- Clone the repository
- Copy the contents into your `SimHub/DashTemplates` folder

Alternatively, clone the repository directly into a folder in
`SimHub/DashTemplates`, and then you can `git pull` to stay up to date.

### From zip

- Go to the [releases page](https://github.com/rudovc/universal-simhub-dashboard/releases)
- Download the zip file for the version of the dashboard you'd like to use
- Extract the zip file anywhere
- Make sure SimHub is running
- Double-click on the extracted .simhubdash file
- You will be offered to install the dashboard. Click "Install"

## Usage

The dashboard comes configured for some game/car combinations out of the box, but it is supposed to be configurable by the user according to their preferences.
To configure the dashboard, refer to the [configuration.toml](./JavascriptExtensions/configUtils/configuration.toml) file, which contains a python script called `update_config.py`.
Modify the configuration file according to your preferences, and then run the script, which will update the [configuration.js](./JavascriptExtensions/configuration.js) file, and make a backup of the previous version if you're not happy.
After that, you can just use the dashboard directly.
