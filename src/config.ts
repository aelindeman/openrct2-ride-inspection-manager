import { RideInspectionInterval } from './ride';

export interface Config {
  enabled: boolean;
  interval: RideInspectionInterval;
}

export interface IntervalOption {
  label: string;
  value: RideInspectionInterval;
}

export const namespace = 'RideInspectionManager';

// interval options cannot be arbitrary values; must be an index of a ride inspection interval enum member
// see https://github.com/OpenRCT2/OpenRCT2/blob/2e2c841ba923d229b705e3eddbdd31b78934fc2a/src/openrct2/ride/Ride.h#L795-L804
export const intervalOptions: IntervalOption[] = [
  {
    label: 'Every 10 minutes',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_10_MINUTES,
  },
  {
    label: 'Every 20 minutes',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_20_MINUTES,
  },
  {
    label: 'Every 30 minutes',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_30_MINUTES,
  },
  {
    label: 'Every 45 minutes',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_45_MINUTES,
  },
  {
    label: 'Every hour',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_HOUR,
  },
  {
    label: 'Every 2 hours',
    value: RideInspectionInterval.RIDE_INSPECTION_EVERY_2_HOURS,
  },
  { label: 'Never', value: RideInspectionInterval.RIDE_INSPECTION_NEVER },
];

export const defaults: Config = {
  enabled: false,
  interval: intervalOptions[0].value,
};

export const configKey = (name: string): string => `${namespace}.${name}`;

export const config: Config = {
  get enabled() {
    return context.sharedStorage.get(configKey('enabled'), defaults.enabled);
  },
  set enabled(v: Config['enabled']) {
    context.sharedStorage.set(configKey('enabled'), v);
  },
  get interval() {
    return context.sharedStorage.get(configKey('interval'), defaults.interval);
  },
  set interval(v: Config['interval']) {
    context.sharedStorage.set(configKey('interval'), v);
  },
};
