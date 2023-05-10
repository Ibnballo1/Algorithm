function pageCount(n, p) {
  let middlePage = (n + 1) / 2;

  if (p < middlePage) {
    return p % 2 == 0 ? Math.floor(p / 2) : Math.floor((p - 1) / 2);
  } else {
    return n % 2 == 0 ? Math.floor((n - p + 1) / 2) : Math.floor((n - p) / 2);
  }
}

console.log(pageCount(10, 9)); // Output: 1
console.log(pageCount(5, 3)); // Output: 1
console.log(pageCount(6, 2)); // Output: 1
console.log(pageCount(5, 4)); // Output: 0
