import { calculateFuelForRace } from './fuel-calculator';

describe('The fuel calculator', () => {
  test('can calculate how much fuel is required given the race duration, lap time, and fuel per lap', () => {
    expect(calculateFuelForRace(20, 100, 2.5)).toBe(30);
  });
});
