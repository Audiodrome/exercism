var BeerSong = function(){
};

BeerSong.prototype.verse = function(inStr){
  if (inStr == 1)
    return OneVerse();
  if (inStr == 0)
    return ZeroVerse();
  else
    return NVerse(inStr);
};

BeerSong.prototype.sing = function(start, stop){
  if (stop === undefined)
    stop = 0;
  // console.log("Begin value: " + start);
  // console.log("End value: " + stop);
  var verse = "";

  if (start > 1)
    verse = PrintNBottles(start, stop, verse);
  else if (start === 1) 
    verse = PrintOneBottle(stop, verse);
  else if (start === 0) 
    verse = PrintZeroBottles(verse);

  verse = RemoveLastNewline(verse);

  return verse;
}

function RemoveLastNewline(verse)
{
  return verse.replace(/\n$/, "");
}

function PrintNBottles(start, stop, verse)
{
  while(start >= stop && stop > 1){
    verse += NVerse(start) + "\n";
    start--;
  }
  if (stop === 1) {
    verse += OneVerse() + "\n";
  }
  if (stop === 0) {
    verse += OneVerse() + "\n";
    verse += ZeroVerse() + "\n";
  }
  return verse;
}

function PrintOneBottle(stop, verse)
{
  verse += OneVerse() + "\n";
  if (stop === 0 || stop === undefined) {
    verse += ZeroVerse() + "\n";
  }
  return verse;
}

function PrintZeroBottles(stop, verse)
{
  verse += ZeroVerse() + "\n";
  return verse;
}
function NVerse(inStr)
{
  if (inStr == 2) {
    return inStr + " bottles of beer on the wall, " +
           inStr + " bottles of beer.\n" +
           "Take one down and pass it around, " +
           (inStr - 1) + " bottle of beer on the wall.\n";
  }
  else{
    return inStr + " bottles of beer on the wall, " +
           inStr + " bottles of beer.\n" +
           "Take one down and pass it around, " +
           (inStr - 1) + " bottles of beer on the wall.\n";
  }
}

function OneVerse()
{
  return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
         "Take it down and pass it around, " +
         "no more bottles of beer on the wall.\n";
}

function ZeroVerse()
{
  return "No more bottles of beer on the wall, no more bottles of beer.\n" +
         "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
}

song = new BeerSong();
//song.verse(1);
//song.verse(0);

// song.sing(2, 0);
//song.sing(11, 199);

song.sing(8, 6);
//song.sing(8);

module.exports = BeerSong;
