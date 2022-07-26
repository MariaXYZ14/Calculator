let firstNumber;
let secondNumber;
let operation = '';
let IsDeletedScreen = false;
let ThereAreTwoOperatorsFollowed = false;
let third_number = false;

window.onload = function(){ 

    pantalla = document.getElementById("screen"); 
    document.onkeydown = keyboard; 

}

function getScreen(){

    return document.getElementById('screen').value;
}

function setScreen(newValue) {
    
    document.getElementById('screen').value = newValue;
    
}

function addScreen(newValue) {
    
    document.getElementById('screen').value += newValue;
    
}

function clickNumber(number){
   
    activatePlusMinus();
    
    if(IsDeletedScreen){
      
        setScreen(number);
        IsDeletedScreen = false;

    }
    else if(getScreen() == 0){
        
        setScreen(number);

    }
    else if(calculateNumberOfDigits(getScreen()) >= 10){

        return;

    }
    else if(getScreen() != null && third_number){

        setScreen(number);
        third_number = false;

    }
    else{

        addScreen(number);

        if(calculateNumberOfDigits(getScreen()) >= 10){ 
            
            disableNumbers();

        }

    }
    
}

function calculateNumberOfDigits(digits){

    let result = 0;

    for(let i = 0;i < digits.length;i++){

        if(digits[i] != ',' && digits[i] != '-'){
       
            result++;
    
        }

    }

    return result;

}

function clickComma(){

    disableComma();
    disablePlusMinus();

    if(IsDeletedScreen){

        setScreen('0,');
        IsDeletedScreen = false;

    }    
    else if(getScreen().includes(',')){
            
        return;

    }
    else if(calculateNumberOfDigits(getScreen()) >= 10) {
        
        disableNumbers();
        return;

    }
    else if(getScreen() == '0'){
        
        setScreen('0,');

    }
    else{

        addScreen(',');

    }
}

//por revisar

function clickPlusMinus(){
    
    let screen = document.getElementById('screen');

    if(screen.value == '' ||screen.value == 0 || screen.value == '0,' || IsDeletedScreen){
 
        return;

    }else{

        if(screen.value[0] == '-'){

            screen.value = screen.value.substring(1,screen.value.length);

        }else{

            screen.value = screen.value = '-' + screen.value;

        }

    }

}


function clickOperation(NewOperation){
    
    activateNumbers();
    activateComma();
    disablePlusMinus();

    if(operation == '' || operation == '+' || operation == '-' || operation == 'x' || operation == '/'){
      
        operation = NewOperation;
        firstNumber = getScreen();
        IsDeletedScreen = true;
        ThereAreTwoOperatorsFollowed = true;

    }
    else if( ThereAreTwoOperatorsFollowed = true && (operation == '+' || operation == '-' || operation == 'x' || operation == '/')){

        calculate();
        firstNumber = getScreen();
        operation = NewOperation;
        IsDeletedScreen = true;
        ThereAreTwoOperatorsFollowed = false;

    }
    else{
       
        calculate();
        firstNumber = getScreen();
        operation = NewOperation;
        IsDeletedScreen = true;
 
    }
        
}

function calculate(){

    third_number = true;

    disablePlusMinus();

    let screen = document.getElementById('screen');

    if(IsDeletedScreen){

        screen.value = 'ERROR';
        disableButtons();

    }
    else if(operation == ''){
      
        if(screen.value[screen.value.length-1] == ','){
        
            screen.value=screen.value.substring(0,screen.value.length-1);
    
        }

    }
    else{
        
        let result;
        let num1;
        let num2 = '';

        secondNumber = screen.value;
        num1 = convertToNumber(firstNumber);
        num2 = convertToNumber(secondNumber);

        if(operation == '+'){
        
            result = num1+num2;

        }
        else if(operation == '-'){
        
            result = num1-num2;

        }
        else if(operation == 'x'){
        
            result = num1*num2;

        }
        else if(operation == '/'){
            
            result = num1/num2;

        }
    
    operation = '';
    screen.value = convertToString(result);

    }
}

function eraseValue(){

    activateComma();
    activatePlusMinus();
    activateButtons();

    let screen = document.getElementById('screen');

    screen.value = "0"; 
    IsDeletedScreen = false;
    firstNumber = '';
    secondNumber = '';
    operation = '';   

}

//disabling

function disableComma(){

    document.getElementById("comma").style.backgroundColor = "#FF0000";
    document.getElementById("comma").style.cursor = "not-allowed";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled = true;

}

function activateComma(){

    document.getElementById("comma").style.backgroundColor = "#12a6d3";
    document.getElementById("comma").style.cursor = "pointer";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled = false;

}

function disablePlusMinus(){

    document.getElementById("plus-minus").style.backgroundColor = "#FF0000";
    document.getElementById("plus-minus").style.color = "black";
    document.getElementById("plus-minus").style.cursor = "not-allowed";
    document.getElementById("plus-minus").disabled = true;
 
}

function activatePlusMinus(){

    document.getElementById("plus-minus").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("plus-minus").style.color = "black";
    document.getElementById("plus-minus").style.cursor = "pointer";
    document.getElementById("plus-minus").disabled = false;

}

function disableButtons(){

    disableNumbers();
    disableOperators();

}

function disableNumbers(){
    
    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {
        elementsNumbers[index].style.backgroundColor = "#FF0000";
        elementsNumbers[index].style.cursor = "not-allowed";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = true;

    }

    disableComma();
    disablePlusMinus();

}

function disableOperators(){
   
    var elementsOperations = document.querySelectorAll(".operation");
    var index2 = 0, length = elementsOperations.length;

  
    for ( ; index2 < length; index2++) {

        elementsOperations[index2].classList.remove("operation");
        elementsOperations[index2].classList.add("operationRed");
        elementsOperations[index2].disabled = true;

    }


    var elementsOperations2 = document.querySelectorAll(".operation2");
    var index3 = 0, length = elementsOperations2.length;

    for ( ; index3 < length; index3++) {

        elementsOperations2[index3].classList.remove("operation2");
        elementsOperations2[index3].classList.add("operationRed");
        elementsOperations2[index3].disabled = true;

    }

}

function activateButtons(){
  
    activateNumbers();

    var elementsOperations = document.querySelectorAll(".operationRed");
    var index2 = 0, length = elementsOperations.length;

    for ( ; index2 < length; index2++) {

        elementsOperations[index2].classList.remove("operationRed");
        elementsOperations[index2].classList.add("operation");
        elementsOperations[index2].disabled = false;

    }

    activateComma();
    activatePlusMinus();

}

function activateNumbers(){

    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {
        elementsNumbers[index].style.backgroundColor = "rgb(29, 191, 240)";
        elementsNumbers[index].style.cursor = "pointer";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = false;

    }

}

function convertToNumber(text){

    return parseFloat(text.replace(',','.'));

}

function convertToString(num){
   
    if(num == 'Infinity' || num == '-Infinity' || !(num == num)){

        disableButtons();

        return "ERROR";

    }

    if(Math.abs(num) >= 9999999999.5){

        disableButtons();

        return "ERROR";

    }else if(contZero(num) == 0){
        
        return num.toFixed(10-contEnters(num)).toString().replace('.',',');

    } 
    else{

        return num.toFixed(10-contZero(num)).toString().replace('.',',');

    }

}

function contZero(num){

    let zeros = 0;
    let cadena = num.toFixed(10).toString();
   
    if(!cadena.includes('.')){
        return 0;
    }

    let point = cadena.length-1;

    while(cadena[point] == '0'){

        zeros++;
        point--;

    }

    return zeros;

}

function contEnters(num){

    let cadena = num.toFixed(10);
    let enters = cadena.indexOf('.');

    if(cadena[0] == '-'){

        enters--;

    }

    return enters;

}

function changeHighlighted(changeClass){

    removeHighlighted();

    changeClass.remove("operation");
    changeClass.add("operation2");
    
}

function removeHighlighted(){

    let changeClass=document.getElementsByClassName("changedOperationButtonClass");
    
    for(let index=0;index<changeClass.length;index++){

        changeClass[index].classList.remove("operation2");
        changeClass[index].classList.add("operation");

    }
    
}

function keyboard (TheEvent) { 

    events = TheEvent || window.event;
    k=events.keyCode; 
   
    if (k > 47 && k < 58) { 

       p=k-48; 
       p=String(p) 
       clickNumber(p); 

    }	
  
    if (k > 95 && k < 106) {

       p = k-96;
       p = String(p);
       clickNumber(p);

    }

    if (k == 110 || k == 188){clickComma()} 
    if (k == 106 || k == 88){clickOperation('x'); changeHighlighted(document.getElementById('multiply').classList)} 
    if (k == 107 ){clickOperation('+'); changeHighlighted(document.getElementById('plus').classList)} 
    if (k == 109){clickOperation('-'); changeHighlighted(document.getElementById('minus').classList)} 
    if (k == 111){clickOperation('/'); changeHighlighted(document.getElementById('division').classList)} 
    if (k == 32 || k == 13 || k == 187) {calculate();removeHighlighted();} //equal or space
    if (k == 27){eraseValue();removeHighlighted();} //C
    if (k == 17){clickPlusMinus()}
    
    }