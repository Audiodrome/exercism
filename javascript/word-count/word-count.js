var Words = function(){

    this.count = function (input){
        var word_arr = input.trim().split(/\s+/),
            word_ht = {};

        word_arr.map(function(word){
            word_ht.hasOwnProperty(word) ? word_ht[word] += 1 : word_ht[word] = 1;
        });

        return word_ht;
    };
};

module.exports = Words;
