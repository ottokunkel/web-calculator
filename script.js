
// global equation variables
let firstOperand = '';
let secondOperand = '';
let operator = null;


// grabs the display element
display = document.querySelector(".calculator-display > *")


/*

* clears the global equation variables
@params: void
@return: void

*/
function clear(){
  firstOperand = '';
  secondOperand = '';
  operator = null;
}

/*

* calculates an equation with the global variables
@params: void
@returns: float 

*/
function calculate(){
  

  // parses the operands to get floats
  let op1 = parseFloat(firstOperand);
  let op2 = parseFloat(secondOperand);
  let res = null;

  // switch statement for each operation
  switch (operator){
    case "*":
      res = op1 * op2;
      break;
    case "/":
      res = op1 / op2;
      break;
    case "+":
      res = (op1 + op2);
      break;
    case "-":
      res = op1 - op2;
      break;
  }
  
  clear();  
  
  result = res.toString();
  return result;
}

/*

* performs logic for a button click
  - grabs the element of the button and it's text
  - check if the button is a number and adds it to one of the operands
  - if equal sign, calls calculate function and sets the first operand
  - if 2 operators, calculates and sets second operand
  - if just an operator, sets operator
@params: (button event)
@return: null

*/
function buttonClick (e){
  button = e.srcElement;
  buttonText = button.innerText;

  let result = null;
  
  // if it is a number 
  if(buttonText >= 0 || buttonText <= 9 || buttonText == '.'){
    
    // if the operator has not been pressed yet,
    if(operator == null){
      // set the operand
      firstOperand = firstOperand + buttonText;
    }else {
      // otherwise, set the second operand
      secondOperand = secondOperand + buttonText;
    }
  // if it is not a number
  }else{

    // calculates the result and sets the first operand to the result.
    if(buttonText == '='){
      result = calculate();
      firstOperand = result;

    // if not '=' and the operator has aleady been pressed, set the first operand, and set the next operator
    }else if (operator){
      result = calculate(); 
      firstOperand = result;
      operator = buttonText;
    
    // if the buttonText is just an operator, set the operator
    }else{
      operator = buttonText;
    }
  }


  // display the result, or the equation
  if (result != null){
    display.innerText = result;
  }else if(operator) {
    display.innerText = `${firstOperand} ${operator} ${secondOperand}`; 
  }else{
    display.innerText =`${firstOperand} ${secondOperand}`; 
  }
}


/*
  adds event listeners for each button
*/
const buttons = document.querySelectorAll("button"); // grabs all the buttons of the document

// for each button, add an event listener
for (let i = 0; i < buttons.length; i++){
  button = buttons[i];
  button.addEventListener("click", (e) => buttonClick(e));
}

