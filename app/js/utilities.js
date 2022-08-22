//get the input field value
function getInputvalueById(inputId){
    const getInputValue = document.getElementById(inputId);
    const inputValueStirng = getInputValue.value;
    const inputValue = parseInt(inputValueStirng);
    return inputValue;
}

//get the element vlaue
function getElementValueById(elementId){
    const elementIdValue = document.getElementById(elementId);
    const elementValueString = elementIdValue.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//reset the element valuej
function setTextElementValueById(elementId, newValue){
    const newElementvalue = document.getElementById(elementId);
    newElementvalue.innerText = newValue;
} 