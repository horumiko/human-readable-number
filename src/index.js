module.exports = function toReadable (number) {
  let result = '';
  let numberStr = number.toString();

  if(numberStr.length == 1){
    result += strInt[number];
  }else if(numberStr.length == 2){
    result = getDecimal(number , numberStr)
  }else{
      result += strInt[numberStr[0]]  + ' ' + "hundred";
      number %= 100;
      if(number < 10 && number != 0){
        result += ' ' + strInt[number];
      }else if(number != 0){
        numberStr = number.toString();
        result += ' ' + getDecimal(number, numberStr);
      }
  }

  return result;
}

function getDecimal(number, numberStr){
    let result = '';
    if(number < 20) result += strDecimalLower[numberStr[1]];
    else{
        result += strDecimal[numberStr[0] - 2]
        if(numberStr[1] != 0) result += ' ' + strInt[numberStr[1]];
    }

    return result;
}

let strInt = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let strDecimalLower = ["ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"];
let strDecimal = ["twenty", "thirty", "forty", "fifty",'sixty', "seventy", "eighty", "ninety"];
