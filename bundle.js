"use strict";

var array = [1, 2, 3, 5, 7, 9, 10];
var newArray = array.map(function (item) {
  return item * 2;
});
console.log(newArray);
var sum = array.reduce(function (total, next) {
  return total + next;
});
console.log(sum);
var filter = array.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter);
