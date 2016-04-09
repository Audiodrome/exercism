"use strict";

var FoodChain = function(){
  this.verse = Verse;
};

function Verse()
{
  var verse_num = arguments[0];
  var animal = [ '', 'fly', 'spider', 'bird', 'cat', 'dog', 'goat', 'cow' ],
      song = "";

  if (arguments[0] == 8) {
    return PrintEighthLine();
  } else {
    song = song.concat(PrintFirstLine(verse_num, animal));
    song = song.concat(PrintSecondLine(verse_num));
    song = song.concat(PrintLoop(verse_num, animal));
    song = song.concat(PrintSeventhLine());
    console.log(song);
    return song;
  }

}

function PrintFirstLine(verse_num, animal)
{
  //console.log("I know an old lady who swallowed a " + animal[verse_num] + ".");
  return "I know an old lady who swallowed a " + animal[verse_num] + ".\n";
}

function PrintSecondLine(verse_num)
{
  var s_line = { 2: "It wriggled and jiggled and tickled inside her.\n",
                 3: "How absurd to swallow a bird!\n",
                 4: "Imagine that, to swallow a cat!\n",
                 5: "What a hog, to swallow a dog!\n",
                 6: "Just opened her throat and swallowed a goat!\n",
                 7: "I don't know how she swallowed a cow!\n"
               };

  return (verse_num > 1 && verse_num < 8) ? s_line[verse_num] : '';
}

function PrintLoop(verse_num, animal)
{
  var str = "";
  for (let i = verse_num; i > 1; i-- ) {
    if (i == 3) {
      str += "She swallowed the " + animal[i] +
             " to catch the " + animal[i-1] +
             " that wriggled and jiggled and tickled inside her.\n";
    } else {
      str += "She swallowed the " + animal[i] +
             " to catch the " + animal[i-1] + ".\n";
    }
    //console.log(str);
  }
  return str;
}

function PrintSeventhLine()
{
  return "I don't know why she swallowed the fly. Perhaps she'll die.\n";
}

function PrintEighthLine()
{
  return "I know an old lady who swallowed a horse.\n" +
         "She's dead, of course!\n";
}

var song = new FoodChain();

song.verse(3);

module.exports = FoodChain;
