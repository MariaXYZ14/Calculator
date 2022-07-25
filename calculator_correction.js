let first_number;
let second_number;
let operation = '';
let deleteScreen = false;
let third_number = false;

window.onload = function(){ 

    pantalla = document.getElementById("screen"); 
    document.onkeydown = keyboard; 

}

function getScreen()
{}

function setScreen(newValue) {

}

function clickNumber(number){
   
    activedPlusMinus(); //activatePlusMinus;
    
    let screen = document.getElementById('screen');

    if(deleteScreen){
      
        screen.value=number;
        deleteScreen=false;

    }
    else if(screen.value == 0){
        
        screen.value = number;

    }
    else if(calculateLength(screen.value) >= 10){

        return;

    }
    else if(screen.value != null && third_number){

        screen.value = number;
        third_number = false;

    }
    else{

        screen.value += number;
        if(calculateLength(screen.value) >= 10){ 
            
            disabledNumbers()
            
        ;}

    }
    
}

function calculateLength(num){

    let result = 0;

    for(let i = 0;i < len.length;i++){

        if(len[i] != ',' && len[i] != '-'){result++;}

    }
    return result;

}

function clickComma(){
    
    let screen = document.getElementById('screen');

    disabledComma();
    disabledPlusMinus();

    if(deleteScreen){

        screen.value = '0,';
        deleteScreen = false;

    }    
    else if(screen.value.includes(',')){
            
        

    }
    else if(calculateLength(screen.value) >= 10) {
        
        disabledNumbers();
        

    }
    else if(screen.value == ''){
        
        screen.value = "0,";

    }
    else{

        screen.value += ",";

    }
}

function changePlusMinus(){
    
    let screen = document.getElementById('screen');

    if(screen.value == '' ||screen.value == 0 || screen.value == '0,' || deleteScreen){
 
        return;

    }else{

        if(screen.value[0] == '-'){

            screen.value = screen.value.substring(1,screen.value.length);

        }else{

            screen.value = screen.value = '-' + screen.value;

        }

    }

}

function clickOperation(operator){
    
//setEnabledButton('/', true);

    activedNumbers();
    activedComma();
    disabledPlusMinus();

    if(operation == '' || operation == '+' || operation == '-' || operation == 'x' || operation == '/'){
      
        let screen = document.getElementById('screen');

        operation = operator;
        first_number = screen.value;
        deleteScreen = true;

    }
    else{
       
        calculate();

        let screen = document.getElementById('screen');

        first_number = screen.value;
        operation = operator;
        deleteScreen = true;
 
    }
     

    
}

function calculate(){

    third_number = true;

    disabledPlusMinus();

    let screen = document.getElementById('screen');

    if(deleteScreen){

        screen.value = 'ERROR';
        disabledButtons();

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

        second_number = screen.value;
        num1 = convertToNumber(first_number);
        num2 = convertToNumber(second_number);

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

    activedComma();
    activedPlusMinus();
    activedButtons();

    let screen = document.getElementById('screen');

    screen.value = "0"; 
    deleteScreen = false;
    first_number = '';
    second_number = '';
    operation = '';   

}

//disabling

function disabledComma(){

    document.getElementById("comma").style.backgroundColor = "#FF0000";
    document.getElementById("comma").style.cursor = "not-allowed";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled = true;

}

function activedComma(){

    document.getElementById("comma").style.backgroundColor = "#12a6d3";
    document.getElementById("comma").style.cursor = "pointer";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled = false;

}

function disabledPlusMinus(){

    document.getElementById("plus-minus").style.backgroundColor = "#FF0000";
    document.getElementById("plus-minus").style.color = "black";
    document.getElementById("plus-minus").style.cursor = "not-allowed";
    document.getElementById("plus-minus").disabled = true;
 
}

function activedPlusMinus(){

    document.getElementById("plus-minus").style.backgroundColor = "rgb(255, 255, 255)";
    document.getElementById("plus-minus").style.color = "black";
    document.getElementById("plus-minus").style.cursor = "pointer";
    document.getElementById("plus-minus").disabled = false;

}

function disabledButtons(){

    disabledNumbers();
    disabledOperators();

}

function disabledNumbers(){
    
    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {
        elementsNumbers[index].style.backgroundColor = "#FF0000";
        elementsNumbers[index].style.cursor = "not-allowed";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = true;

    }

    disabledComma();
    disabledPlusMinus();

}

function disabledOperators(){
   
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

function activedButtons(){
  
    activedNumbers();

    var elementsOperations = document.querySelectorAll(".operationRed");
    var index2 = 0, length = elementsOperations.length;

    for ( ; index2 < length; index2++) {

        elementsOperations[index2].classList.remove("operationRed");
        elementsOperations[index2].classList.add("operation");
        elementsOperations[index2].disabled = false;

    }

    activedComma();
    activedPlusMinus();

}

function activedNumbers(){

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

        disabledButtons();

        return "ERROR";

    }

    if(Math.abs(num) >= 9999999999.5){

        disabledButtons();

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
    if (k == 17){changePlusMinus()}
    
    }