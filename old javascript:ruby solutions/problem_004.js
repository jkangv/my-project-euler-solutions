// Not the perfect solution since there can be errors 
// when used on other "unusual" numbers or answers.

function digits(number) {
  var digits = number.toString().split('');
  return digits.length;
}

function isPalindrome(number) {
  var palindrome = true;
  var digits = number.toString().split('');
  for (var i = 0, j = (digits.length - 1) ; (j - i) >= 1 ; i++, j--) {
    if (digits[i] == digits[j]) {
      palindrome = true;
    } else {
      palindrome = false;
      break;
    }
  }
  return palindrome;
}
var largestPalindrome = 999999;
var factor = 999;
var foundAnswer = false

while (!foundAnswer) {
  if (!isPalindrome(largestPalindrome)) { // check if the current number is a palindrome at all.
    largestPalindrome--;
    continue;
  }
  while (factor >= 100) { // check factor from 100~999
    if (!isPalindrome(largestPalindrome)) { // no need to check the factors if it's not a palindrome
    largestPalindrome--;
    break;
    }
    if (largestPalindrome % factor == 0 && digits(largestPalindrome/factor) == 3) {
      foundAnswer = true;
      break;
    }
    factor--;
  }
  factor = 999;
  if (foundAnswer == false) largestPalindrome--;
}
document.write(largestPalindrome);
