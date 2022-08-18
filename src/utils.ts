export function randomChoice<T>(array: T[]): T | undefined {
  if (array.length === 0) {
    return undefined;
  }

  const randomValue = Math.random();
  const randomIndex = Math.round(randomValue * (array.length - 1));

  return array[randomIndex];
}
