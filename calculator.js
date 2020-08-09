let print = '';

let x = 0; // used to calculate number
let y = 0; // used to calculate decimals

let flagForDecimal = false;

let output = [];

let operators = [];

function myFunction(myvalue) {

    /*numbers*/
  if (myvalue === 0) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='0';
  } else if (myvalue === 1) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='1';
  } else if (myvalue === 2) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='2';
  } else if (myvalue === 3) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='3';
  } else if (myvalue === 4) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='4';
  } else if (myvalue === 5) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML += '5';
  } else if (myvalue === 6) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML +='6';
  } else if (myvalue === 7) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML += '7';
  } else if (myvalue === 8) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML += '8';
  } else if (myvalue === 9) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }
    document.getElementById('toprint').innerHTML += '9';
  } else if (
    myvalue === '/' ||
    myvalue === '-' ||
    myvalue === '+' ||
    myvalue === 'x'
  ) {
    output.push(calculateNumber(x, y)); //add x + 0.y
    operators.push(myvalue);
    document.getElementById('toprint').innerHTML += myvalue;
    x = 0;
    y = 0;
    flagForDecimal = false;
  } else if (myvalue === 'dot') {
    flagForDecimal = true;
    document.getElementById('toprint').innerHTML += '.';
  } else if (myvalue === 'clear') {
    x = 0;
    y = 0;

    flagForDecimal = false;

    output = [];

    operators = [];

    document.getElementById('toprint').innerHTML = '';
  } else {
    /* equals */
    output.push(calculateNumber(x, y)); //add x + 0.y

    let ArraytoSplice = [];
    let sumOfCal = 0; //calculates the sum of all elements

    if (output.length === 1) { sumOfCal = output[0];}
    else {
      
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '/') {
          output[i + 1] = output[i] / output[i + 1];
          ArraytoSplice.push(i);
        } else if (operators[i] === 'x') {
          output[i + 1] = output[i] * output[i + 1];
          ArraytoSplice.push(i);
        }
      }
  
      for (let i in ArraytoSplice) {
        operators.splice(i, 1);
        output.splice(i, 1);
      }

      if (output.length === 1) { sumOfCal = output[0] }
      else {
        for (let i = 0; i < operators.length; i++) {
          if (operators[i] === '+') {
            output[i + 1] = output[i] + output[i + 1];
          } else if (operators[i] === '-') {
            output[i + 1] = output[i] - output[i + 1];
          }
          sumOfCal = sumOfCal + output[i + 1];
        }
      }
  

    }

    x = sumOfCal;
    y = 0;
    operators = [];
    flagForDecimal = false;
    output = [];
    print = '';

    document.getElementById('toprint').innerHTML = '='.concat(sumOfCal.toString());
  }
}

function addXY(value, sum) {
    return (sum = sum * 10 + value);
}

function calculateNumber(x, y) {
  return x + (y / (10 ** y.toString().length)); //add x + 0.y
}