var Pangram = function (stream){

    this.stream = stream;
    this.isPangram = function(){

        var char_arr = this.stream.replace(/[^A-Za-z]/g,'').toLowerCase().split(''),
            alphabet = 26;

        char_len = char_arr.unique().length;

        if (char_len === alphabet)
            return true;
        else
            return false;
    };
};

//Found a solution for unique arrays here. (Not my solution)
//http://jszen.com/best-way-to-get-unique-values-of-an-array-in-javascript.7.html

Array.prototype.unique = function()
{
    var n = {}, r = [];
    console.log(this);
    for(var i = 0; i < this.length; i++) 
    { 
        if (!n[this[i]]) 
        {
            n[this[i]] = true; 
            r.push(this[i]); 
        }
    }
    return r;
}

module.exports = Pangram;
