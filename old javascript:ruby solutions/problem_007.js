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

function primeTerm(term) {
  var primes = [];
  for (var i = 2; primes.length < term; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes[term-1];
}
document.write(primeTerm(10001));
