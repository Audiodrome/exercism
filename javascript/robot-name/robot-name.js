var rand = require('random-seed').create();
var used_names = {};

var Robot = function(){
    //var used_names = {},
    var tmp = GenRoboName();

    // if (used_names[tmp] === undefined) {
    //     used_names[tmp] = true;
    //     this.name = tmp;
    // } else {
    //     while (used_names[tmp] === true) 
    //         tmp = GenRoboName();
    // }

    
    this.name = tmp;
    //console.log(used_names);
};

// function CheckRoboName() {
//     var used_names = {},
//         tmp = GenRoboName();

//     if (used_names[tmp] == undefined) {
//         used_names[tmp] = true;
//         return tmp;
//     }
//     else {
//         console.log("hello world");
//         CheckRoboName();
//     }
// }

function GenRoboName() {

    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var digits = "0123456789".split("");
    var name = "";

    for (var i = 0; i < 2; i++) {
        //console.log(alphabets[i]);
        name = name.concat(alphabets[rand(26)]);
    }

    for (i = 0; i < 3; i++) {
        name = name.concat(digits[rand(10)]);
    }
    //console.log(name);
    return name;
}

var robot = new Robot();

module.exports = Robot;


