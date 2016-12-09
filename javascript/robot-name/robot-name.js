"use strict";

var rand = require('random-seed').create();

var Robot = function() {

    var this_robot = this;
    this.name = GenRoboName(this_robot);
    this.reset = function() {
        this.name = GenRoboName(this_robot);
    };
};

function GenRoboName(Robot) {

    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var digits = "0123456789".split("");
    var name = "";

    for (var i = 0; i < 2; i++) {
        name = name.concat(alphabets[rand(26)]);
    }

    for (i = 0; i < 3; i++) {
        name = name.concat(digits[rand(10)]);
    }

    while (Robot.used_names[name] === true)
        return GenRoboName(Robot);
    Robot.used_names[name] = true;
    return name;
}

Robot.prototype.used_names = {};
console.error("boo");
module.exports = Robot;
