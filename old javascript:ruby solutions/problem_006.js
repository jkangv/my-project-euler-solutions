function sumSquareDifference(natural) {
  var sumOfSquares = 0;
  var sumOfNumbers = 0;

  for (var number = 1; number <= natural; number++) {
    sumOfSquares += Math.pow(number,2);
    sumOfNumbers += number;
  }

  return (sumOfSquares - Math.pow(sumOfNumbers,2));
}

document.write(-sumSquareDifference(100));
