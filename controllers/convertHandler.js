function numberStringSplitter(str) {
  let num = str.match(/[\.\d\/]+/g) || ['1'];
  let string = str.match(/[a-zA-Z]+/g)[0];

  return [num[0], string];
}

function checkDiv(posFra) {
  let number = posFra.split('/');
  if (number.length > 2) return false;
  return number;
}

function ConvertHandler() {
  this.getNum = function (input) {
    let result = numberStringSplitter(input)[0];
    let num = checkDiv(result);
    if (!num) {
      return 'invalid number';
    }
    let num1 = num[0];
    let num2 = num[1] || '1';
    result = parseFloat(num1) / parseFloat(num2);
    if (isNaN(result)) {
      return 'invalid number';
    }
    return result;
  };

  this.getUnit = function (input) {
    let result = numberStringSplitter(input)[1].toLowerCase();
    switch (result) {
      case 'km':
        return 'km';
      case 'gal':
        return 'gal';
      case 'lbs':
        return 'lbs';
      case 'mi':
        return 'mi';
      case 'l':
        return 'L';
      case 'kg':
        return 'kg';
      default:
        return 'invalid unit';
    }
  };

  this.getReturnUnit = function (initUnit) {
    let result = initUnit.toLowerCase();

    switch (result) {
      case 'km':
        return 'mi';
      case 'gal':
        return 'L';
      case 'lbs':
        return 'kg';
      case 'mi':
        return 'km';
      case 'l':
        return 'gal';
      case 'kg':
        return 'lbs';
      default:
        return 'invalid unit';
    }
  };

  this.spellOutUnit = function (unit) {
    let result = unit.toLowerCase(); 
  
    switch (result) {
      case 'km':
        return 'kilometers';
      case 'gal':
        return 'gallons';
      case 'lbs':
        return 'pounds';
      case 'mi':
        return 'miles';
      case 'l':
        return 'liters';
      case 'kg':
        return 'kilograms';
      default:
        return 'invalid input';
    }
  };

  this.convert = function (initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let unit = initUnit.toLowerCase();
    let result;

    switch (unit) {
      case 'km':
        result = initNum / miToKm;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'kg':
        result = initNum / lbsToKg;
        break;
      default:
        result = undefined;
    }

    return parseFloat(result.toFixed(5));
  };

  this.getString = function (initNum, initUnit, returnNum, returnUnit) {
    return `${initNum} ${this.spellOutUnit(initUnit)} converts to ${returnNum} ${this.spellOutUnit(returnUnit)}`;
  };
}

module.exports = ConvertHandler;
