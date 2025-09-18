interface MaxStint {
  maxStintTime: number;
  fuelRemaining: number;
}

interface StintCompletion {
  laps: number;
  fuelRemaining: number;
}

/**
 * Calculates how much fuel is required to complete a race,
 * given the race length, fastest lap time, and fuel usage per lap.
 * @param raceDuration in minutes
 * @param lapTime in seconds
 * @param fuelPerLap in litres
 * @returns requiredFuel in litres
 */
export const calculateFuelForRace = (
  raceDuration: number,
  lapTime: number,
  fuelPerLap: number
): number => {
  const numberOfLaps: number = (raceDuration * 60) / lapTime;
  const requiredFuel: number = numberOfLaps * fuelPerLap;

  return requiredFuel;
};

/**
 * Calculate the max duration of a stint.
 * @param lapTime in seconds
 * @param fuelPerLap in litres
 * @param fuelLoad in litres
 * @returns the maxStintTime (seconds) and estimated fuelRemaining (litres) after the stint
 */
export const calculateMaxStintDuration = (
  lapTime: number,
  fuelPerLap: number,
  fuelLoad: number
): MaxStint => {
  const stintCompletion: StintCompletion = {
    laps: fuelLoad / fuelPerLap,
    fuelRemaining: parseFloat((fuelLoad % fuelPerLap).toFixed(3))
  };
  const maxCompletedLaps: number = Math.floor(stintCompletion.laps);
  const maxStintTime: number = maxCompletedLaps * lapTime;

  return { maxStintTime, fuelRemaining: stintCompletion.fuelRemaining };
};

/**
 * Calculate the minimum number of stints needed to complete the full race.
 * (This currently doesn't take pit stops into account)
 * @param raceDuration in minutes
 * @param lapTime in seconds
 * @param fuelPerLap in litres
 * @param fuelLoad in litres
 * @returns minStints required
 */
export const calculateMinStints = (
  raceDuration: number,
  lapTime: number,
  fuelPerLap: number,
  fuelLoad: number
): number => {
  const minStints: number = Math.ceil((raceDuration * 60) / calculateMaxStintDuration(
    lapTime, fuelPerLap, fuelLoad).maxStintTime);

  return minStints;
};
