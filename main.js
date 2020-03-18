const array = [1, 2, 3, 5, 7, 9, 10];

const newArray = array.map(item => item * 2);

console.log(newArray);

const sum = array.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = array.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter)