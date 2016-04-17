var School = function(){
  this.db = {};
};

School.prototype.add = function(name, grade){
  if (this.db[grade] == undefined)
    this.db[grade] = [];

  this.db[grade].push(name);
};

School.prototype.roster = function(){
  //console.log(this.db);
  return this.db;
}

var school = new School();
school.add('aimee', 2);
school.roster();

module.exports = School;
