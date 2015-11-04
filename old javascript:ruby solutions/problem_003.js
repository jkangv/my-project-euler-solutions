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
function largestPrimeOf(number) {
  var primes = [];
  for (var j = 2;j < number;j++) {
    if (number % j == 0 && isPrime(j)) {
      primes.push(j);
    }
    if (j > Math.sqrt(number)) {
      break;
    } 
  }
  return primes[primes.length-1];
}
document.write(largestPrimeOf(600851475143));
