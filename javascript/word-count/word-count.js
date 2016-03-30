var Words = function(){

    this.count = function (input){
        var word_arr = input.trim().split(/\s+/),
            word_ht = {};

        word_arr.forEach(function(word){
            word_ht.hasOwnProperty(word) ? word_ht[word] += 1 : word_ht[word] = 1;
        });
        console.log(word_ht);
        return word_ht;
    };
};

var a = new Words();

a.count('one fish two fish red fish blue fish');

module.exports = Words;

//Exposition----------
// When looping through an array, you can do something to each item, do something to each item and replace each item in the original array, or do something to each item and create a new array with the new values. All options are fine; it depends on your use case.
​
// The simplest way to iterate through each item in an array is with a plain `for` loop. 
​
// 1) do something to each item in array  with `for`
​
// var numbers = [1, 2, 3];
// for(var i = 0, len = numbers.length; i < len; i++) {
// 	var res = numbers[i] * 2;
// 	console.log(res); 
// }
​
// 2) replace original array with `for`
​
// var numbers = [1, 2, 3];
// for(var i = 0, len = numbers.length; i < len; i++) {
// 	numbers[i] = numbers[i] * 2;
// }
// console.log(numbers) // [ 2, 4, 6 ]
​
// 3) create new array with `for`
​
// var numbers = [1, 2, 3];
// var newNumbers = [];
// for(var i = 0, len = numbers.length; i < len; i++) {
// 	newNumbers.push(numbers[i] * 2);
// }
// console.log(numbers) //  [1, 2, 3]
// console.log(newNumbers) // [ 2, 4, 6 ]
​
​
// But writing out `for` loops takes a bit of code, so you can use `forEach` instead
​
// 4) do something to each item in array with `forEach`
​
// var numbers = [1, 2, 3];
// numbers.forEach(function(number, i){
// 	var res = numbers[i] * 2;
// 	console.log(res); 
// })
​
// 5) replace original array with `forEach`
​
// var numbers = [1, 2, 3];
// numbers.forEach(function(number, i){
// 	numbers[i] = number * 2;
// })
// console.log(numbers) // [ 2, 4, 6 ]
​
// 6) create new array with `forEach`
​
// var numbers = [1, 2, 3];
// var newNumbers = [];
// numbers.forEach(function(number){
//     newNumbers.push(number * 2);
// })
// console.log(numbers) //  [1, 2, 3]
// console.log(newNumbers) // [ 2, 4, 6 ]
​
​
// If you need to create a new array, instead of using a `for` or `foreach` with a `push`, you can just use `map`. `Map` iterates through an array and creates a new array using the returned value from the callback. 
​
// A common mistake with `map` is that people sometimes forget to include the `return`. You must include `return`.
​
// 7) create new array with `map`
​
// var numbers = [1, 2, 3];
// var newNumbers = numbers.map(function(number){
//     return number * 2;
// })
// console.log(numbers) //  [1, 2, 3]
// console.log(newNumbers) // [ 2, 4, 6 ]
