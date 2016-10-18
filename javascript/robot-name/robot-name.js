var Robot = function(){
    this.name = gen_robo_name();
};

function gen_robo_name(){

    var alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    var digits = "0123456789".split("");
    var name = "";

    for (var i = 0; i < 2; i++) {
        //console.log(alphabets[i]);
        name = name.concat(alphabets[Math.floor(Math.random() * 26)]);
    }

    for (i = 0; i < 3; i++) {
        name = name.concat(digits[Math.floor(Math.random() * 10)]);
    }
    //console.log(name);
    return name;
}

var robot = new Robot();


//robot.name = "RX781";

console.log(robot.name);

module.exports = Robot;


