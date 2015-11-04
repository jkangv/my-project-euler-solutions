function isPrime(number) {
  var prime = true; 
  for (var i = 2;i < number;i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function evenlyDivisibleUpTo(number) {
  var product = 1;
  for (var i = 2; i <= number; i++) {
    if (!isPrime(i)) {
      continue;
    }
    var original = i;
    while (i * original < number) {
      i *= original;
    }
    product *= i;
    i = original;
  }
  return product;
}

document.write(evenlyDivisibleUpTo(20));
