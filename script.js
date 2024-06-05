let firstOperand = '';
let secondOperand = '';
let operator = null;

display = document.querySelector(".calculator-display > *")

function calculate(){

  let op1 = parseFloat(firstOperand);
  let op2 = parseFloat(secondOperand);
  let res = null;

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

  firstOperand = '';
  secondOperand = '';
  operator = null; 
  
  result = res.toString();
  return result;
}

function buttonClick (e){
  button = e.srcElement;
  buttonText = button.innerText;



  let result = null;
  if(buttonText >= 0 || buttonText <= 9 || buttonText == '.'){
    if(operator == null){
      firstOperand = firstOperand + buttonText;
    }else {
      secondOperand = secondOperand + buttonText;
    }
  }else{
    if(buttonText == '='){
      result = calculate();
      firstOperand = result;
    }else if (operator){
      firstOperand = calculate(); 
      operator = buttonText;
    }else{
      operator = buttonText;
    }
  }



  if (result != null){
    display.innerText = result;
  }else if(operator) {
    display.innerText = `${firstOperand} ${operator} ${secondOperand}`; 
  }else{
    display.innerText =`${firstOperand} ${secondOperand}`; 
  
  }
  console.log(`first: ${firstOperand} second: ${secondOperand} oper: ${operator}`)
}




const buttons = document.querySelectorAll("button");
console.log(buttons);

for (let i = 0; i < buttons.length; i++){
  button = buttons[i];
  button.addEventListener("click", (e) => buttonClick(e));
}

