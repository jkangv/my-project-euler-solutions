
function pentagonal(term) {
  return (term) * (3 * term - 1) / 2;
}

function hexagonal(term) {
  return (term) * (2 * term - 1);
}

function isPentagonal(number) {
  for (var i = 1; pentagonal(i) <= number; i++) {
    if (pentagonal(i) == number) {
      return true;
    }
  }
  return false;
}

function isHexagonal(number) {
  for (var i = 1; hexagonal(i) <= number; i++) {
    if (hexagonal(i) == number) {
      return true;
    }
  }
  return false;
}

function isAllThree(number) {
  if (isPentagonal(number)) {
    return true;
  } else {
    return false;
  }
}

var myTerm = 144;
var numbers = [];

while (numbers.length === 0) {
  if (isAllThree(hexagonal(myTerm))) {
    numbers.push(hexagonal(myTerm));
  }
  myTerm++;
}

document.write("<h1>" + numbers[0] + "</h1>");
