"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// variables
var print = '';
var x = 0; // used to calculate number

var y = 0; // used to calculate decimals

var output = []; // keeps all the numbers that are inserted

var operators = []; // keeps all the operators
// flags

var flagForDecimal = false;
flagOperator = false; // If true and the user insert an operator, then rise an alert
// Main Function. Called when a button is clicked

function myFunction(myvalue) {
  /*numbers*/
  if ([0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(myvalue)) {
    var _numbers = numbers(myvalue, x, y, flagForDecimal);

    var _numbers2 = _slicedToArray(_numbers, 2);

    x = _numbers2[0];
    y = _numbers2[1];
  } else if (['/', '-', '+', 'x'].includes(myvalue)) {
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

    var _sumOfCal = 0; //keeps the sum of all elements

    _sumOfCal = calculateSum(output, operators, _sumOfCal);
    x = _sumOfCal;
    y = 0;
    operators = [];
    flagForDecimal = false;
    output = [];
    print = '';
    document.getElementById('toprint').innerHTML = '='.concat(_sumOfCal.toString());
  } // frees the flag when not an operator is inserted


  if (!['/', '-', '+', 'x'].includes(myvalue)) {
    flagOperator = false;
  }
} //   Functions that helps the above Function


function addXY(value, sum) {
  return sum = sum * 10 + value;
}

function calculateNumber(x, y) {
  return x + y / Math.pow(10, y.toString().length); //add x + 0.y
} //adds the number to x or to y if .(dot) has been pushed


function numbers(myvalue, x, y, flagForDecimal) {
  if (flagForDecimal === true) {
    y = addXY(myvalue, y);
  } else {
    x = addXY(myvalue, x);
  }

  document.getElementById('toprint').innerHTML += ''.concat(myvalue.toString());
  return [x, y];
} //calculates the sum of all elements


function calculateSum(output, operators) {
  var ArraytoSplice = [];

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

    for (var _i2 = 0; _i2 < ArraytoSplice.length; _i2++) {
      operators.splice(ArraytoSplice[_i2] - _i2, 1);
      output.splice(ArraytoSplice[_i2] - _i2, 1);
    }

    if (output.length === 1) {
      sumOfCal = output[0];
    } else {
      for (var _i3 = 0; _i3 < operators.length; _i3++) {
        if (operators[_i3] === '+') {
          output[_i3 + 1] = output[_i3] + output[_i3 + 1];
        } else if (operators[_i3] === '-') {
          output[_i3 + 1] = output[_i3] - output[_i3 + 1];
        }

        sumOfCal = output[_i3 + 1];
      }
    }
  }

  return sumOfCal;
}