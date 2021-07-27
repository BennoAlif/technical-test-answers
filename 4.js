const max2 = (a, b) => Math.max(a, b);

const max3 = (a, b, c) => Math.max(a, max2(b, c));

const max9 = (a, b, c, d, e, f, g, h, i) =>
  Math.max(max3(a, b, c), max3(d, e, f), max3(g, h, i));

console.log(max9(8, 19, 24, 25, 38, 53, 55, 62, 92));
