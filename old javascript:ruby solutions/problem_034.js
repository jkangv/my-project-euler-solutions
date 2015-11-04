function factorial(number) {
  product = 1;
  for (var i = number; i > 1; i--) {
    product *= i;
  }
  return product;
}

function digits(number) {
  var digits = number.toString().split('');
  return digits.length;
}

function isCurious(number) {
  var digits = number.toString().split('');
  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += Number(factorial(digits[i]));
  }
  if (sum == number) {
    return true;
  } else {
    return false;
  }
}

var curiousSum = 0;

for (var i = 3;i < 998888;i++) {
  var checkDigits = i.toString().split('');
  // below checks if factorial of one of the digits of the current number
  // has more digits than the current number.
  for (var j = 0; j < checkDigits.length; j++) {
    if (checkDigits.length < digits(factorial(checkDigits[j]))) { 
      continue;
    }
  }
  if (isCurious(i)) {
    curiousSum += i;
  }
}


document.write("<h3>"+ curiousSum +"</h3>");
