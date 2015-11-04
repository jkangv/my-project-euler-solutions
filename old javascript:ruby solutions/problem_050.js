
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



var primeList = [2];
for (var p = 3; p < 1000000; p += 2) {
  if (isPrime(p)) {
    primeList.push(p);
  }
}



function bigConsecutiveUpTo(number) {
  var consecutives = [];
  var temporary = [];
  var temporarySum = 0;

  for (var i = number; i > 2; i--) {

    for (var j = 0; j < i; j++) {
      var k = j
      while (temporarySum < primeList[i]) {
        temporarySum += primeList[k];
        temporary.push(primeList[k]);
        k++;
      }
      if (temporarySum === primeList[i] && temporary.length > consecutives.length) {
        consecutives = temporary;
      }
    }
  }
  temporarySum = 0;
  for (var a = 0; a < consecutives.length; a++) {
    temporarySum += consecutives[a];
  }

  return temporarySum;
}

document.write("<h1>" + bigConsecutiveUpTo(50) + "</h1>");
