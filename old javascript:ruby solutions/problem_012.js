
function triangularNumber(term) {
  return (term) * (term + 1) / 2;
}

function divisors(number) {
  var divisors = [];
  for (var i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if (number % i == 0) {
      divisors.push(i);
      if (!(Math.sqrt(number) == i)) {
        divisors.push(number / i);
      }
    }
  }
  return divisors.length;
}

var term = 1;
while (divisors(triangularNumber(term)) <= 500) {
  term++
}

document.write(triangularNumber(term));
