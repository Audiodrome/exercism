var words = [rand_obj, rand_obj, rand_obj];

var obj = {};
words.map(function(word){
  obj.hasOwnProperty(word) ? obj[word] += 1 : obj[word] = 1;
});

// ouput: { rand_obj : 1, rand_obj : 1, rand_obj : 1}

var obj = words.map(function(word){
  var rObj = {};
  rObj.hasOwnProperty(word) ? rObj[word] += 1 : rObj[word] = 1;
  return rObj;
}):

// output: [ { rand_obj : 1 }, { rand_obj : 1 }, { rand_obj : 1 }]

// var Words = function() {};

// Words.prototype.count = function(string) {
//     var words = string.trim().split(/\s+/);
//     var counts = {};

//     words.forEach(function (word) {
//         console.log(word);
//         counts.hasOwnProperty(word) ? counts[word] += 1 : counts[word] = 1;
//     });

//     var counts2 = words.map(function(word){
//         console.log(word);
//         var rObj = {};
//         rObj.hasOwnProperty(word) ? rObj[word] += 1 : rObj[word] = 1;
//         return rObj;
//     });
//     console.log(counts);
//     console.log(counts2);
//     //return counts;
// };
