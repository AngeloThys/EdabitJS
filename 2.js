function binary(decimal) {
	let bin = [];

  if (decimal === 0) {
    bin.push(0);
  }

  while (decimal > 0) {
    bin.unshift(decimal % 2);
    decimal = Math.floor(decimal / 2);
  }

  return bin.join('');

}