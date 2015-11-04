function properDivisors(number) {
  var sum = 1;
  var max = Math.floor(Math.sqrt(number));
  var root = Math.sqrt(number);
  for (var i = 2; i < max; i++) {
    if (number % i == 0) {
      sum += i;
      if (!(root == i)) {
        sum += number/i ;
      }
    }
  }
  return sum;
}

var sumAmicable = 0;
var amicables = [];

for (var a = 1; a < 10000; a++) {
  var b = properDivisors(a);
  if (a != b && properDivisors(b) == a && amicables.indexOf(a) == -1 && amicables.indexOf(b) == -1) {
    amicables.push(a);
    amicables.push(b);
  }
}

for (var i = 0; i < amicables.length; i++) {
  sumAmicable += amicables[i];
}

document.write(sumAmicable);
