var BeerSong = function(){
};

BeerSong.prototype.verse = function(inStr){
  console.log(inStr);
  //console.log("hello all");
  // var verse = [{bottle = "bottles of beer"},
  //              {  wall = " on the wall."},
  //              {takeIt = "Take one down and pass it around, "}]

  // var bottles = " bottles ",
  //     bottle = " bottle ",
  //     beer = "of beer",
  //     wall = " on the wall",
  //     take = "Take one down and pass it around, ",
  //     store = "Go to the store and buy some more, ";

  if (inStr == 1)
    return one_verse();
  if (inStr == 0)
    return zero_verse();
  else
    return n_verse(inStr);
};

BeerSong.prototype.sing = function(start, stop){
  if (stop === undefined)
    stop = 0;
  console.log("Begin value: " + start);
  console.log("End value: " + stop);
  var verse = "";

  if (start > 1) {
    for(var i = start; start > 1; start--){
      //console.log(n_verse(start));
      verse += n_verse(start);
      // console.log(verse);
    }
    if (stop === 1) {
      verse += one_verse();
    }
    if (stop === 0) {
      verse += one_verse();
      verse += zero_verse();
    }
  } else if (start === 1) {
    verse += one_verse() + "\n";
    if (stop === 0 || stop === undefined) {
      verse += zero_verse();
    }
  } else if (start === 0) {
    verse += zero_verse();
  }
  console.log(verse);
  return verse;
  // console.log(one_verse)
}

function n_verse(inStr){

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

function one_verse(){
  return "1 bottle of beer on the wall, 1 bottle of beer.\n" +
         "Take it down and pass it around, " +
         "no more bottles of beer on the wall.\n";
}

function zero_verse(){
  return "No more bottles of beer on the wall, no more bottles of beer.\n" +
         "Go to the store and buy some more, 99 bottles of beer on the wall.\n";
}

song = new BeerSong();
//song.verse(1);
//song.verse(0);

// song.sing(2, 0);
//song.sing(11, 199);

//song.sing(8,3);
song.sing(8);

module.exports = BeerSong;
