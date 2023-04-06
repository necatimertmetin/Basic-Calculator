let firstOperand;
let secondOperand;
let operator;
let result;
const divElement = document.getElementById('display');
function input(theID) {
    var myButton = document.getElementById(theID);
    divElement.textContent = divElement.textContent + myButton.textContent;
  }
  
function ce(){

    let currentInnerHTML = divElement.innerHTML;    

    currentInnerHTML = currentInnerHTML.slice(0, -1);
    
    divElement.textContent = currentInnerHTML;

    
        
      

}
function ac(){
    
    divElement.textContent = '';
}

function opr(selectedOperator){
 firstOperand = divElement.textContent;
 divElement.textContent = '';
 operator = selectedOperator;
}
function calc(){
    if(divElement.textContent != null){
        secondOperand = divElement.textContent;
        switch(operator){
            case '+':
                result = parseFloat(firstOperand) + parseFloat(secondOperand);
                 divElement.textContent = result;
                break;
            case '-':
                result = parseFloat(firstOperand) - parseFloat(secondOperand);
                 divElement.textContent = result;
                break;
            case '*':
                result = parseFloat(firstOperand) * parseFloat(secondOperand);
                 divElement.textContent = result;
                break;
            case '/':
                result = parseFloat(firstOperand) / parseFloat(secondOperand);
                 divElement.textContent = result;
                break;
            case '%':
                result = parseFloat(firstOperand) % parseFloat(secondOperand);
                 divElement.textContent = result;
                break;    
        }

        firstOperand = secondOperand;
        secondOperand = result;
    }
    

}
const myCheckbox = document.getElementById("myCheckbox");
const myDiv = document.querySelector(".display");

myCheckbox.addEventListener("change", function() {
  if (this.checked) {
    myDiv.classList.remove("hidden");
  } else {
    myDiv.classList.add("hidden");
  }
});