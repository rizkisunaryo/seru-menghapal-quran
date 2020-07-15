export function randomizeNumber(
  minimumNumber: number,
  maximumNumber: number,
  currentNumber: number,
) {
  if (minimumNumber >= maximumNumber) {
    return minimumNumber;
  }

  let randomNumber =
    minimumNumber + Math.floor(Math.random() * (maximumNumber - minimumNumber));
  if (randomNumber === currentNumber) {
    randomNumber++;
  }
  if (randomNumber > maximumNumber) {
    randomNumber - 2;
  }
  return randomNumber;
}
