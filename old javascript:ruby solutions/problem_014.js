function collatz(number) {
  var chain = 1;
  var term = number;
  while (term != 1) {
    if (term % 2 == 0) {
      term /= 2;
    } else if (term == 1) {
      break;
    } else {
      term = (3 * term) + 1;
    }
    chain++;
  }
  return chain;
}

var longest = 0;
var temporary;
var number = 999999;
var whichNumber;

while (number > 1) {
  temporary = collatz(number);
  if (temporary > longest) {
    longest = temporary;
    whichNumber = number
  }
  number--;
}

document.write("answer: " + whichNumber + "<br>");
document.write("chain: " + longest);
