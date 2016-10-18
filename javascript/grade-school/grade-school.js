var School = function(){
  this.db = {};
};

School.prototype.add = function(name, grade){
  if (this.db[grade] === undefined)
    this.db[grade] = [];

  this.db[grade].push(name);
  this.db[grade].sort();
};

School.prototype.roster = function(){
  return this.db;
};

School.prototype.grade = function(grade){

  return (this.db[grade] === undefined) ? [] : this.db[grade];
};

var school = new School();
// school.add('aimee', 2);
// school.roster();

module.exports = School;
