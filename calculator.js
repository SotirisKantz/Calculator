
// variables
let print = '';
let x = 0; // used to calculate number
let y = 0; // used to calculate decimals
let output = [];  // keeps all the numbers that are inserted
let operators = []; // keeps all the operators

// flags
let flagForDecimal = false;
flagOperator = false; // If true and the user insert an operator, then rise an alert


// Main Function. Called when a button is clicked
function myFunction(myvalue) {

    /*numbers*/
  if ([0,1,2,3,4,5,6,7,8,9].includes(myvalue)){
    [x, y] = numbers(myvalue, x, y, flagForDecimal);

  } else if (['/', '-', '+', 'x'].includes(myvalue)) {
    if (flagOperator === false){
      flagOperator = true;
      output.push(calculateNumber(x, y)); //add x + 0.y
      operators.push(myvalue);
      document.getElementById('toprint').innerHTML += myvalue;
      x = 0;
      y = 0;
      flagForDecimal = false;
    }else {
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
    let sumOfCal = 0; //keeps the sum of all elements
    sumOfCal = calculateSum(output, operators, sumOfCal); 
    
    x = sumOfCal;   
    y = 0;
    operators = [];
    flagForDecimal = false;
    output = [];
    print = '';
    document.getElementById('toprint').innerHTML = '='.concat(sumOfCal.toString()); 
  }
  // frees the flag when not an operator is inserted
  if (!(['/', '-', '+', 'x'].includes(myvalue))) {
    flagOperator = false;
  }
}

//   Functions that helps the above Function

function addXY(value, sum) {
    return (sum = sum * 10 + value);
}

function calculateNumber(x, y) {
  return x + (y / (10 ** y.toString().length)); //add x + 0.y
}

//adds the number to x or to y if .(dot) has been pushed
function numbers(myvalue, x, y, flagForDecimal){
  if (flagForDecimal === true) {
    y = addXY(myvalue, y);
  } else {
    x = addXY(myvalue, x);
  }
  document.getElementById('toprint').innerHTML += ''.concat(myvalue.toString());
  return [x,y];
}

//calculates the sum of all elements
function calculateSum(output, operators) {

  let ArraytoSplice = [];

  if (output.length === 1) { sumOfCal = output[0]; }
  else {

    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === '/') {
        output[i + 1] = output[i] / output[i + 1];

        ArraytoSplice.push(i);

      } else if (operators[i] === 'x') {
        output[i + 1] = output[i] * output[i + 1];

        ArraytoSplice.push(i);

      }
      sumOfCal = output[i + 1];

    }


    for (let i = 0; i < ArraytoSplice.length; i++) {
      operators.splice(ArraytoSplice[i] - i, 1);
      output.splice(ArraytoSplice[i] - i, 1);
    }


    if (output.length === 1) { sumOfCal = output[0] }
    else {
      for (let i = 0; i < operators.length; i++) {
        if (operators[i] === '+') {
          output[i + 1] = output[i] + output[i + 1];
        } else if (operators[i] === '-') {
          output[i + 1] = output[i] - output[i + 1];
        }
        sumOfCal = output[i + 1];

      }
    }
  }
  return sumOfCal;
}
