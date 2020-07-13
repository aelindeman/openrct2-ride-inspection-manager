import { config } from './config';
import { RideType, RideInspectionInterval } from './ride';

export const fixInspectionInterval = (ride: Ride): void => {
  if (ride.classification == 'ride') {
    if (
      ride.type == RideType.RIDE_TYPE_CROOKED_HOUSE ||
      ride.type == RideType.RIDE_TYPE_MAZE
    ) {
      ride.inspectionInterval = config.interval;
    } else {
      ride.inspectionInterval = RideInspectionInterval.RIDE_INSPECTION_NEVER;
    }
  }
};

export const fixAllInspectionIntervals = (): void => {
  if (config.enabled) {
    for (const i in map.rides) {
      fixInspectionInterval(map.rides[i]);
    }
  }
};
