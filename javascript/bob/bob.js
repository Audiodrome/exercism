var Bob = function() {};

Bob.prototype.hey = function(input) {

    // Shout. Shout. Let it all out. These are the things I can do without.
    var //shout = /^[^\p{Ll}]*!|\?$/,
        shout = /^[^a-z]+!|\?$/,
        query = /^.*[a-z0-9].*\?$/,
        quiet = /^[ ]*$/,

        // search for at least one lower case.
        // query = /^.*[a-z].*\?$/,
    
        question = 'Sure.',
        yell = 'Whoa, chill out!',
        silence = 'Fine. Be that way!',
        anything = 'Whatever.';

    console.log(shout.test(input));

    if (query.test(input)) {
        console.log(input);
        return question;
    }
    if (shout.test(input)) {
        console.log(input);
        return yell;
    }
    if (quiet.test(input)) {
        console.log(input);
        return silence;
    }
    else {
        console.log(input);
        return anything;
    }
};

var bob = new Bob();

// shouting at bob the builder
var bob_says = bob.hey('WATCH OUT');
console.log(bob_says);

bob_says = bob.hey('1, 2, 3 GO!');
console.log(bob_says);

bob_says = bob.hey('\xfcML\xe4\xdcTS!');
console.log(bob_says);
// bob_says = bob.hey('ZOMG THE %^*@#$(*^ ZOMBIES ARE COMING!!11!!1!');
// console.log(bob_says);

// bob_says = bob.hey('\xdcML\xc4\xdcTS!');
// console.log(bob_says);

// bob_says = bob.hey('Does this cryogenic chamber make me look fat?');
// console.log(bob_says);

// bob_says = bob.hey('WHAT THE HELL WERE YOU THINKING?');
// console.log(bob_says);

// bob_says = bob.hey('Let\'s go make out behind the gym!');
// console.log(bob_says);

bob_says = bob.hey('\xfcML\xe4\xdcTS');
console.log(bob_says);
module.exports = Bob;
