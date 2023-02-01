// Add up the Numbers from a Single Number

function factorial(n) {
  let x = n;

  while (n > 0) {
    n--;
    x += n;
  }

  return x;
}
