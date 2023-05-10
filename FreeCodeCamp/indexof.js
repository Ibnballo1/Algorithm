function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) >= true) {
    return true
  } else {
    return false
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'onions'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'squash'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'salad'));
console.log(quickCheck(['squash', 'onions', 'shallots'], 'shallots'));
