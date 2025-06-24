/**
 * Calculates how much fuel is required to complete a race,
 * given the race length, fastest lap time, and fuel usage per lap.
 * @param duration in minutes
 * @param lapTime in seconds
 * @param fuelPerLap in litres
 * @returns requiredFuel in litres
 */
export const calculateFuelForRace = (
  duration: number,
  lapTime: number,
  fuelPerLap: number
): number => {
  const timeInSeconds: number = duration * 60;
  const numberOfLaps: number = timeInSeconds / lapTime;
  const requiredFuel: number = numberOfLaps * fuelPerLap;

  return requiredFuel;
};
