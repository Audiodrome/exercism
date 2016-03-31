var BeerSong = function(inStr){
  this.inStr = inStr;
};

BeerSong.prototype.verse = function(inStr){
  console.log(inStr);
  // var verse = [{bottle = "bottles of beer"},
  //              {  wall = " on the wall."},
  //              {takeIt = "Take one down and pass it around, "}]

  var bottles = " bottles ",
      bottle = " bottle ",
      beer = "of beer",
      wall = " on the wall",
      take = "Take one down and pass it around, ",
      store = "Go to the store and buy some more, ";

  // if (inStr === 1)
  //   return "1 bottle of beer on the wall"
  // if (inStr === 0)
  //   return "No more " + bottle + wall + takeIt + " no more " + bottle + "."
  // else
  var verse =  inStr + bottles + beer + wall + ", " +
      inStr + bottles + beer + ".\n" +
      take + (inStr-1) + bottles + beer + wall + ".\n";

  console.log(verse);
  return verse;
};

song = new BeerSong();
song.verse(8);

module.exports = BeerSong;
