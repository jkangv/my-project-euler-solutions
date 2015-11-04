function isEven(number) {
  if (number % 2 == 0) {
    return true
  } else {
    return false
  }
}
function fib(term) {
  if (term == 1 || term == 0) {
    return 1;
  } else {
    return fib(term-1) + fib(term-2);
  }
}
var sum = 0;
for (var i = 1; fib(i) < 4000000 ; i++) {
  if isEven(fib(i)) {
    sum += fib(i);
  }
}
document.write(sum);
