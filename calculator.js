let firstNumber;
let secondNumber;
let operation = '';
let IsDeletedScreen = false;
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


function clickPlusMinus(){
    
    let screen = getScreen();

    if(screen == '' || screen == 0 || screen == '0,' || IsDeletedScreen){
 
        return;

    }else{

        if(screen[0] == '-'){
        
            setScreen(screen.substring(1,screen.length))

        }else{

            setScreen('-'+ screen);

        }

    }

}


function clickOperation(NewOperation){
    
    activateNumbers();
    activateComma();
    disablePlusMinus();

    if(operation == '' || IsDeletedScreen){
      
        operation = NewOperation;
        firstNumber = getScreen();
        IsDeletedScreen = true;

    }
    else if(!IsDeletedScreen){

        calculate();
        firstNumber = getScreen();
        operation = NewOperation;
        IsDeletedScreen = true;
 
    }
        
}


function calculate(){

    third_number = true;

    disablePlusMinus();

    let screen = getScreen();

    if(IsDeletedScreen){
        
        setScreen('ERROR');
        disableButtons();

    }
    else if(operation == ''){
      
        if(screen[screen.length-1] == ','){
        
           setScreen(screen.substring(0,screen.length-1));
    
        }

    }
    else{
        
        let result;
        let firstNumberConverted;
        let secondNumberConverted = '';

        secondNumber = screen;
        firstNumberConverted = convertToNumber(firstNumber);
        secondNumberConverted = convertToNumber(secondNumber);

        if(operation == '+'){
        
            result = firstNumberConverted+secondNumberConverted;

        }
        else if(operation == '-'){
        
            result = firstNumberConverted-secondNumberConverted;

        }
        else if(operation == 'x'){
        
            result = firstNumberConverted*secondNumberConverted;

        }
        else if(operation == '/'){
            
            result = firstNumberConverted/secondNumberConverted;

        }
    
    operation = '';
    setScreen(convertToString(result));

    }
}

function clickErase(){

    activateComma();
    activatePlusMinus();
    activateButtons();

    setScreen('0'); 
    IsDeletedScreen = false;
    firstNumber = '';
    secondNumber = '';
    operation = '';   

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

//disabling

function getComma(){

    return document.getElementById("comma");

}
function getPlusMinus(){

    return document.getElementById("plus-minus");

}
function disableComma(){

    getComma().style.backgroundColor = "#FF0000";
    getComma().style.cursor = "not-allowed";
    getComma().style.color = "black";
    getComma().disabled = true;

}

function activateComma(){

    getComma().style.backgroundColor = "#12a6d3";
    getComma().style.cursor = "pointer";
    getComma().style.color = "black";
    getComma().disabled = false;

}

function disablePlusMinus(){

    getPlusMinus().style.backgroundColor = "#FF0000";
    getPlusMinus().style.color = "black";
    getPlusMinus().style.cursor = "not-allowed";
    getPlusMinus().disabled = true;
 
}

function activatePlusMinus(){

    getPlusMinus().style.backgroundColor = "rgb(255, 255, 255)";
    getPlusMinus().style.color = "black";
    getPlusMinus().style.cursor = "pointer";
    getPlusMinus().disabled = false;

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
   
    var elementsOperations = document.getElementsByClassName("changedOperationButtonClass");
    var index = 0, length = elementsOperations.length;

    for ( ; index < length; index++) {

        elementsOperations[index].classList.remove("operation");
        elementsOperations[index].classList.add("operationRed");
        elementsOperations[index].disabled = true;

    }

}

function activateButtons(){
  
    activateNumbers();

    var elementsOperations = document.getElementsByClassName(".operationRed");
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
    if (k == 27){clickErase();removeHighlighted();} //C
    if (k == 17){clickPlusMinus()}
    
    }