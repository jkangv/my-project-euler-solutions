function isPrime(number) {
  var prime = true;
  var root = Math.floor(Math.sqrt(number));
  for (var i = 2;i <= root;i++) {
    if (number % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

function summationOfPrimes(number) {
  var sum = 0;
  for (var i = 2; i < number ; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }
  return sum;
}

document.write(summationOfPrimes(2000000));
