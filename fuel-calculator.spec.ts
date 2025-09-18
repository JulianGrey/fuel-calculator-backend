import { calculateFuelForRace, calculateMaxStintDuration, calculateMinStints } from './fuel-calculator';

describe('The fuel calculator', () => {
  it('should calculate how much fuel is required to complete a race (test 1)', () => {
    expect(calculateFuelForRace(20, 100, 2.5)).toStrictEqual(30);
  });

  it('should calculate how much fuel is required to complete a race (test 2)', () => {
    expect(calculateFuelForRace(30, 100, 2.5)).toStrictEqual(45);
  });

  it('should calculate how much fuel is required to complete a race (test 3)', () => {
    expect(calculateFuelForRace(45, 135, 3.1)).toStrictEqual(62);
  });

  it('should calculate the max duration for a given stint, and the remaining fuel after the stint (test 1)', () => {
    expect(calculateMaxStintDuration(100, 2.38, 110)).toStrictEqual({ maxStintTime: 4600, fuelRemaining: 0.52 });
  });

  it('should calculate the max duration for a given stint, and the remaining fuel after the stint (test 2)', () => {
    expect(calculateMaxStintDuration(90, 2.4, 105)).toStrictEqual({ maxStintTime: 3870, fuelRemaining: 1.8 });
  });

  it('should calculate the max duration for a given stint, and the remaining fuel after the stint (test 3)', () => {
    expect(calculateMaxStintDuration(125, 3.1, 110)).toStrictEqual({ maxStintTime: 4375, fuelRemaining: 1.5 });
  });

  it('should calculate the minimum number of stints required to complete a race (test 1)', () => {
    expect(calculateMinStints(180, 100, 2.38, 110)).toStrictEqual(3);
  });

  it('should calculate the minimum number of stints required to complete a race (test 2)', () => {
    expect(calculateMinStints(180, 100, 3.38, 110)).toStrictEqual(4);
  });

  it('should calculate the minimum number of stints required to complete a race (test 3)', () => {
    expect(calculateMinStints(180, 100, 4.38, 110)).toStrictEqual(5);
  });

  it('should calculate the minimum number of stints required to complete a race (test 4)', () => {
    expect(calculateMinStints(150, 100, 2.38, 110)).toStrictEqual(2);
  });

  it('should calculate the minimum number of stints required to complete a race (test 5)', () => {
    expect(calculateMinStints(60, 100, 2.38, 30)).toStrictEqual(3);
  });

  it('should calculate the minimum number of stints required to complete a race (test 6)', () => {
    expect(calculateMinStints(60, 250, 7.1, 30)).toStrictEqual(4);
  });

  it('should calculate the minimum number of stints required to complete a race (test 7)', () => {
    expect(calculateMinStints(20, 90, 2.4, 50)).toStrictEqual(1);
  });
});
