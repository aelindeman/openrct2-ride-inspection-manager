# Ride Inspection Manager

Ride Inspection Manager is a plugin for [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2) which maintains the ride inspection interval for all rides in the park.

## Isn't there a cheat that does this already?

Yes, but I don't like to play scenarios with cheats enabled, and I think it's tedious to set inspection intervals on a per-ride basis.

This plugin simply automates something you can already do in-game normally, without cheats.

It also knows that Crooked House and Maze rides don't break down, and therefore don't need to be inspected, so it will always set their inspection intervals to *Never* (regardless of your inspection interval choice).

## Installation

Grab the latest release from the releases page, drop the file into your `OpenRCT2/plugin` folder, and reload (from the main menu) any game you have open.

## Usage

By default the plugin is disabled and doesn't touch your inspection intervals.

To enable, hold down the *Map* button in the top-left toolbar and select "Ride Inspection Manager" from the dropdown.

You should see a window that lets you enable the Ride Inspection Manager and choose a target inspection interval.

Once enabled, the plugin **will overwrite** any custom inspection intervals you've already set yourself with the one you've selected in the dropdown. It will also check at the beginning of every game-day to see if there's any new rides that need their inspection intervals set.

## Contributing
