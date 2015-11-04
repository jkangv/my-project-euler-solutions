// c < 500 since a + b > c and a + b = 1000 - c.
// That means a + b > 500.
// c's lowest value: 335
// c's highest value: 499


var a = 1;
var c = 499;
var b = 1000 - c - a;
var found = false;

while (Math.pow(a,2) + Math.pow(b,2) != Math.pow(c,2) && c > 335) {
  while (a < b) {
    if (Math.pow(a,2) + Math.pow(b,2) == Math.pow(c,2)) {
      found = true;
      break;
    } else {
      a++;
      b = 1000 - c - a;
    }
  }
  if (found) break;
  a = 1;
  c--;
  b = 1000 - c - a;
}

product = a * b * c;

document.write(product);
