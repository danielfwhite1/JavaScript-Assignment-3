// 1. Create array called ages, programmatically subtract value of first element from value of last element.
let ages = [3, 9, 23, 64, 2, 8, 28, 93];
console.log(ages[ages.length - 1] - ages[0]);

// add new age and repeat step above to ensure it is dynamic.
ages.push(6);
console.log(ages[ages.length - 1] - ages[0]);

// use loop to iterate through array and calculate average age. Print result.
// let sumAge = ages.reduce(function(accumulator, currentValue) {
//     return accumulator + currentValue;
// })
// console.log(sumAge / ages.length);

const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log(ages.reduce(reducer) / ages.length);

function avgAge(array) {
    return array.reduce(reducer) / array.length;
}
console.log(avgAge(ages));


// 2. Create array called names, use loop to iterate through array and calculate avg number of letters per name.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

function avgLengthOfNames(namesInput) {
    return namesInput.reduce(reducer).length / namesInput.length;
}
console.log(avgLengthOfNames(names));

// use loop to iterate through array again and concatenate all names together, separated by spaces. Print result.

// let concat = names.reduce(function(accumulator, currentValue) {
//     return accumulator + ' ' + currentValue;
// });
// console.log(concat);

const concatReducer = (accumulator, currentValue) => accumulator + ' ' + currentValue;
function allNames(namesInput) {
    return namesInput.reduce(concatReducer);
}
console.log(allNames(names));

// 5. Create array called nameLengths, use loop to iterate over names array and add length of each name to nameLengths.
function arrayLength(array) {
    let nameLengths = array.map(x => x.length);
    return nameLengths;
}
console.log(arrayLength(names));
// let nameLengths = names.map(x => x.length);
// console.log(nameLengths);

// 6. Write loop to iterate over nameLengths and calculate sum of all elements in array. Print result.
function sumLength(numArray) {
    let nameLengths = numArray.reduce(reducer).length;
    return nameLengths;
}
console.log(sumLength(names));

// 7. Write function that takes two parameters, word and n, and returns word concatenated to itself n times.
function concatN(word, n) {
    return word.repeat(n);
}
console.log(concatN("danny", 5));

// 8. Write function that takes two parameters, firstName and lastName, and returns full name separated by space.
function fullName(firstName, lastName) {
    return firstName.trim() + ' ' + lastName.trim(); 
}
console.log(fullName("danny", "white"));

// 9. Write function that takes array of numbers and returns true if sum of all numbers in array is greater than 100.
function isGreaterThan100(numbers) {
    return numbers.reduce(reducer) > 100;
}
console.log(isGreaterThan100([6, 7, 20, 80]));

// 10. Write function that takes array of numbers and returns average of all elements in array.
function avgArray(numbers) {
    return numbers.reduce(reducer) / numbers.length;
}
console.log(avgArray([5, 4, 2, 1]));

// 11. Write function that takes two arrays of numbers and returns true if average of elements in first array
// is greater than average of the elements in second array.
function isFirstAvgGreater(array1, array2) {
    return (array1.reduce(reducer) / array1.length) > (array2.reduce(reducer) / array2.length);
}
console.log(isFirstAvgGreater([1, 3, 5], [10, 2, 3]));

// 12. Write function called willBuyDrink that takes boolean isHotOutside and number moneyInPocket.
// returns true if it is hot outside and moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket) {
    return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12));

// 13. Create function of your own that solves a problem. Comment what function does and why you created it.
// function reverseArray takes array arr and returns new array with elements in reverse order
function reverseArray(arr) {
   return arr.reverse();
}
console.log(reverseArray([1, 5, 7]));
console.log(reverseArray(["dan", "bob", "pete"]));
