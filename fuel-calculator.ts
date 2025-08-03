interface MaxStint {
  maxStintTime: number;
  remainingFuel: number;
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
 * @param fuelCapacity in litres
 * @returns the maxStintTime and estimated remainingFuel after the stint
 */
export const calculateMaxStintDuration = (
  lapTime: number,
  fuelPerLap: number,
  fuelCapacity: number
): MaxStint => {
  const maximum: number = fuelCapacity / fuelPerLap;
  const remainder: number = fuelCapacity % fuelPerLap;
  const maxCompletedLaps: number = Math.floor(maximum);
  const remainingFuel: number = remainder * fuelPerLap;
  const maxStintTime: number = maxCompletedLaps * lapTime;

  return { maxStintTime, remainingFuel };
};

/**
 * Calculate the minimum number of stints needed to complete the full race.
 * (This currently doesn't take pit stops into account)
 * @param raceDuration in minutes
 * @param lapTime in seconds
 * @param fuelPerLap in litres
 * @param fuelCapacity in litres
 * @returns minStints required
 */
export const calculateMinStints = (
  raceDuration: number,
  lapTime: number,
  fuelPerLap: number,
  fuelCapacity: number
): number => {
  const minStints: number = Math.ceil((raceDuration * 60) / calculateMaxStintDuration(
    lapTime, fuelPerLap, fuelCapacity).maxStintTime);

  return minStints;
};
