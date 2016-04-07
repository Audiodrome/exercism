var Anagram = function(word){
  this.word = word;
};

Anagram.prototype.matches = function(word_in_list){
  var original_word_len = this.word.length,
      original_word = this.word,
      anagram = [];

  if (typeof word_in_list === 'string')
    word_in_list = Array.prototype.slice.call(arguments);
 
  word_in_list.forEach(function(word_in_list){
    if(word_in_list.length === original_word_len) {
      var tmp = ChkForAnagram(original_word, word_in_list);
      if (tmp !== undefined)
        anagram.push(tmp);
    }
  });
  console.log(anagram);
  return anagram;
}

function ChkForAnagram(original_word, word_in_list)
{
  console.log('Current word being checked: ' + word_in_list);
  if (original_word.toLowerCase() === word_in_list.toLowerCase()) {
    return
  } else {
    var a = original_word.toLowerCase().split('').sort().toString();
    var b = word_in_list.toLowerCase().split('').sort().toString();
    if (a === b)
      return word_in_list;
  }
}

// var subject = new Anagram('galea');
// var matches = subject.matches([ 'hello' ]);

var subject = new Anagram('allergy');
var matches = subject.matches(['gallery', 'ballerina', 'regally', 'clergy', 'largely', 'leading']);

//var subject = new Anagram('banana');
//var matches = subject.matches(['Banana']);

module.exports = Anagram;
