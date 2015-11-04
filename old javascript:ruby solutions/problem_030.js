function digits(number) {
  var digits = number.toString().split('');
  return digits.length;
}

function isSumOfFifth(number) {
  var theDigits = number.toString().split('');
  var sumOfThePowers = 0;
  for (var i = 0; i < theDigits.length ;i++) {
    if (theDigits.length < digits(Math.pow(theDigits[i],5))) {
      return false;
    }
    sumOfThePowers += Math.pow(theDigits[i],5);
  }
  if (number == sumOfThePowers) {
    return true;
  } else {
    return false;
  }
}

var theSum = 0;

for (var j = 2;j < 200000;j++) {
  if (isSumOfFifth(j)) {
    theSum += j
  }
}

document.write("<h1>" + theSum + "</h1>");
