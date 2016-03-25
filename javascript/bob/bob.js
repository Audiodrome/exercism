var Bob = function() {};

Bob.prototype.hey = function(input) {

    if (input.trim() === '') {
        console.log(input);
        return 'Fine. Be that way!';
    }
    if (/[a-zA-Z]/.test(input) && input == input.toUpperCase()) {
        console.log(input);
        return 'Whoa, chill out!';
    }
    if (input.endsWith('?')) {
        console.log(input);
        return 'Sure.';
    }
    else {
        console.log(input);
        return 'Whatever.';
    }
};

var bob = new Bob();

module.exports = Bob;
