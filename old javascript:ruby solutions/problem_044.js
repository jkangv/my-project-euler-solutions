function pentagonal(term) {
  return (term) * (3 * term - 1) / 2;
}

function isPentagonal(number) {
  for (var i = 1; pentagonal(i) <= number; i++) {
    if (pentagonal(i) == number) {
      return true;
    }
  }
  return false;
}

var foundNothing = true;
var a = 2;
while (foundNothing) {
  var k = pentagonal(a);

  for (var b = a - 1; b > 0; b--) {
    var j = pentagonal(b);
    if (isPentagonal(k + j) && isPentagonal(k - j)) {
      difference = k - j;
      foundNothing = false;
      break;
    }
  }

  a++;
}




document.write("<h1>" + difference + "</h1>");
