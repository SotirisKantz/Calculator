"use strict";

var print = '';
var x = 0; // used to calculate number

var y = 0; // used to calculate decimals

var flagForDecimal = false;
var output = [];
var operators = [];
flagOperator = false;

function myFunction(myvalue) {
  /*numbers*/
  if (myvalue === 0) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }

    document.getElementById('toprint').innerHTML += '0';
  } else if (myvalue === 1) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }

    document.getElementById('toprint').innerHTML += '1';
  } else if (myvalue === 2) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }

    document.getElementById('toprint').innerHTML += '2';
  } else if (myvalue === 3) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }

    document.getElementById('toprint').innerHTML += '3';
  } else if (myvalue === 4) {
    if (flagForDecimal === true) {
      y = addXY(myvalue, y);
    } else {
      x = addXY(myvalue, x);
    }

    document.getElementById('toprint').innerHTML += '4';
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

    document.getElementById('toprint').innerHTML += '6';
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
  } else if (myvalue === '/' || myvalue === '-' || myvalue === '+' || myvalue === 'x') {
    if (flagOperator === false) {
      flagOperator = true;
      output.push(calculateNumber(x, y)); //add x + 0.y

      operators.push(myvalue);
      document.getElementById('toprint').innerHTML += myvalue;
      x = 0;
      y = 0;
      flagForDecimal = false;
    } else {
      alert('You have already insert an operator');
    }
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

    var ArraytoSplice = [];
    var sumOfCal = 0; //calculates the sum of all elements

    if (output.length === 1) {
      sumOfCal = output[0];
    } else {
      for (var i = 0; i < operators.length; i++) {
        if (operators[i] === '/') {
          output[i + 1] = output[i] / output[i + 1];
          ArraytoSplice.push(i);
        } else if (operators[i] === 'x') {
          output[i + 1] = output[i] * output[i + 1];
          ArraytoSplice.push(i);
        }

        sumOfCal = output[i + 1];
      }

      for (var _i = 0; _i < ArraytoSplice.length; _i++) {
        operators.splice(ArraytoSplice[_i] - _i, 1);
        output.splice(ArraytoSplice[_i] - _i, 1);
      }

      if (output.length === 1) {
        sumOfCal = output[0];
      } else {
        for (var _i2 = 0; _i2 < operators.length; _i2++) {
          if (operators[_i2] === '+') {
            output[_i2 + 1] = output[_i2] + output[_i2 + 1];
          } else if (operators[_i2] === '-') {
            output[_i2 + 1] = output[_i2] - output[_i2 + 1];
          }

          sumOfCal = output[_i2 + 1];
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

  if (myvalue !== '/' & myvalue !== '-' & myvalue !== '+' & myvalue !== 'x') {
    flagOperator = false;
  }
}

function addXY(value, sum) {
  return sum = sum * 10 + value;
}

function calculateNumber(x, y) {
  return x + y / Math.pow(10, y.toString().length); //add x + 0.y
}