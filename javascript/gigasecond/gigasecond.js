var Gigasecond = function(inputDate) {
    this.inputDate = inputDate;
    var G_second = Math.pow(10,12);
    this.inputDate = new Date(this.inputDate.getTime() + G_second);
    // console.log(this.inputDate);
    // console.log(inputDate);
};

Gigasecond.prototype.date = function(){
    return this.inputDate;
};

gs = new Gigasecond(new Date(Date.UTC(2015, 8, 14)));
gs.date();

module.exports = Gigasecond;
