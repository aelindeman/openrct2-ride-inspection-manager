import { config, intervalOptions } from './config';

let window: Window | undefined;

const makeEnabledCheckbox = (): CheckboxWidget => ({
  type: 'checkbox',
  x: 5,
  y: 20,
  width: 190,
  height: 10,
  text: 'Enable automatic ride inspection intervals',
  isChecked: config.enabled,
  onChange: (checked) => {
    config.enabled = checked;
  },
});

const makeIntervalLabel = (): LabelWidget => ({
  type: 'label',
  x: 5,
  y: 35,
  width: 50,
  height: 10,
  text: 'Interval:',
  tooltip: 'Select how often mechanics should check each ride',
  onChange: () => undefined,
});

const makeIntervalDropdown = (): DropdownWidget => ({
  type: 'dropdown',
  x: 60,
  y: 34,
  width: 130,
  height: 13,
  tooltip: 'Select how often mechanics should check each ride',
  items: intervalOptions.map((i) => i.label),
  selectedIndex: intervalOptions.map((i) => i.value).indexOf(config.interval),
  onChange: (index) => {
    config.interval = intervalOptions[index].value;
  },
});

export const showWindow = (): void => {
  if (window) {
    window.bringToFront();
    return;
  }

  const windowDesc: WindowDesc = {
    classification: 'ride_inspection_mgr',
    width: 245,
    height: 50,
    title: 'Ride Inspection Manager',
    widgets: [
      makeEnabledCheckbox(),
      makeIntervalLabel(),
      makeIntervalDropdown(),
    ],
    onClose: () => {
      window = undefined;
    },
  };

  window = ui.openWindow(windowDesc);
};
