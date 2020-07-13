# Ride Inspection Manager

Ride Inspection Manager is a plugin for [OpenRCT2](https://github.com/OpenRCT2/OpenRCT2) which maintains the ride inspection interval for all rides in the park.

## Isn't there a cheat that does this already?

Yes, but I don't like to play scenarios with cheats enabled, and I think it's tedious to set inspection intervals on a per-ride basis.

This plugin simply automates something you can already do in-game normally, without cheats.

It also knows that Crooked House, Maze, and Mini Golf rides don't break down, and therefore don't need to be inspected, so it will always set their inspection intervals to *Never* (regardless of your inspection interval choice).

## Installation

Grab the latest release from the releases page, drop the file into your `OpenRCT2/plugin` folder, and reload (from the main menu) any game you have open.

## Usage

By default the plugin is disabled and doesn't touch your inspection intervals.

To enable, hold down the *Map* button in the top-left toolbar and select "Ride Inspection Manager" from the dropdown.

You should see a window that lets you enable the Ride Inspection Manager and choose a target inspection interval.

Once enabled, the plugin **will overwrite** any custom inspection intervals you've already set yourself with the one you've selected in the dropdown. It will also check at the beginning of every game-day to see if there's any new rides that need their inspection intervals set.

## Contributing

- Fork and clone this repo. You'll need to clone the repo with submodules (`git clone --recursive` when you clone, or `git submodule update --init --remote` later) to get TypeScript type definition support.
- `yarn install`
- Make your changes
- `yarn build -w -f `, or `yarn build` and move `dist/ride-inspection-manager.js` in your `OpenRCT2/plugin` folder
  - Set `enable_hot_reloading = true` in `OpenRCT2/config.ini` so you don't have to reload the game after each change
  - The `-w` flag enables [rollup](https://rollupjs.org)'s watch mode
  - The `-f $HOME/.config/OpenRCT2/plugin/ride-inspection-manager.js` flag dunks the plugin directly into your OpenRCT2 plugin folder without having to move it yourself ([see docs](https://github.com/OpenRCT2/OpenRCT2/blob/develop/distribution/scripting.md) for correct scripts path for your platform)
- `yarn check` before you commit (for formatting and linting)
- Commit and push your changes
- Open a pull request

### Feature wishlist

- Refactor `window.ts` to use [OliUI](https://github.com/oli414/OliUI)
- Save user-modified inspection intervals (ones changed by the player after the plugin has been activated)
- Reduce the frequency at which inspection intervals are checked and set (i.e., find a more appropriate trigger, like when rides are built)
- Display metrics in the configuration window, such as if mechanics are actually able to inspect rides at the chosen frequency (the OpenRCT2 API doesn't currently provide this information from rides)

## Acknowledgements

Huge credit goes to [mgovea](https://github.com/mgovea) for [openrct2-ride-price-manager](https://github.com/mgovea/openrct2-ride-price-manager), and contributors to OpenRCT2 everywhere for reigniting my love for one of the best games from my childhood.
