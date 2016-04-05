var PhoneNumber = function(phone_num){
  this.phone_num = phone_num;
  this.invalid = '0000000000';

  this.number = Number;
  this.areaCode = AreaCode;
  this.toString = ToString;

};

function Number()
{
  var num = this.phone_num;

  num = num.replace(/[^0-9]/g, '');

  if (num.length > 11 || num.length < 10 || num[0] != 1)
    return this.invalid;

  if (num.length == 11 && num[0] == 1)
    return num = num.substr(1);

  return num;
}

function AreaCode()
{
  var num = this.phone_num;
  return num.substr(0, 3);
}

function ToString()
{
  var num = this.phone_num;
  return '(' + num.substr(0,3) + ') ' + num.substr(3,3) + '-' + num.substr(6); 
}

var phone = new PhoneNumber('1234567890');

phone.number();
phone.areaCode();

module.exports = PhoneNumber;
