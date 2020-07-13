import { fixAllInspectionIntervals } from './inspections';
import { showWindow } from './window';

const main = (): void => {
  if (typeof ui !== undefined) {
    ui.registerMenuItem('Ride Inspection Manager', () => {
      showWindow();
    });
  }
  fixAllInspectionIntervals();
  context.subscribe('interval.day', () => {
    fixAllInspectionIntervals();
  });
};

registerPlugin({
  name: 'Ride Inspection Manager',
  version: '1.0',
  authors: ['aelindeman'],
  licence: 'MIT',
  type: 'remote',
  main,
});
