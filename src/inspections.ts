import { config } from './config';
import { RideType, RideInspectionInterval } from './ride';

export const fixInspectionInterval = (ride: Ride): void => {
  if (ride.classification == 'ride') {
    const unbreakable =
      ride.type == RideType.RIDE_TYPE_CROOKED_HOUSE ||
      ride.type == RideType.RIDE_TYPE_MAZE ||
      ride.type == RideType.RIDE_TYPE_MINI_GOLF;

    ride.inspectionInterval = unbreakable
      ? RideInspectionInterval.RIDE_INSPECTION_NEVER
      : config.interval;
  }
};

export const fixAllInspectionIntervals = (): void => {
  if (config.enabled) {
    for (const i in map.rides) {
      fixInspectionInterval(map.rides[i]);
    }
  }
};
