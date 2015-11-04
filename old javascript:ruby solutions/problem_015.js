function factorial(number) {
  product = 1;
  for (var i = number; i > 1; i--) {
    product *= i;
  }
  return product;
}

var answer = factorial(40)/factorial(20)/factorial(20);
document.write("Answer is 40 choose 20, which is: " + Math.floor(answer));
