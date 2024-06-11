export const calculatePercentageAverage = (
  numbersArray: number[],
  numberToCalculate: number
) => {
  const arrayLength = numbersArray.length;
  const identicalNumbers = numbersArray.filter(
    (num) => num === numberToCalculate
  );
  const identicalNumbersLength = identicalNumbers.length;
  const percent = (identicalNumbersLength / arrayLength) * 100;
  return isNaN(percent) ? 0 : percent.toFixed(0);
};
