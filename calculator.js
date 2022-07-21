let first_number;
let second_number;
let operation='';
let deleteScreen=false;
let third_number=false;
let NonOperation=true;

window.onload = function(){ 
    pantalla=document.getElementById("textoPantalla"); 
    document.onkeydown = keyboard; }


function clickNumber(number){
   
    activedPlusMinus();
    let screen=document.getElementById('screen');

    if(deleteScreen){
      
        screen.value=number;
        deleteScreen=false;
    }
    else if(screen.value == 0){
        
        screen.value = number;

    }
    else if(calculateLength(screen.value)>=10){

        return;
    }
    else if(screen.value!=null && third_number){
        screen.value = number;
        third_number=false;

    }
    else{

        screen.value += number;

    }
    
}

function calculateLength(len){

  let result=0;

  for(let i=0;i<len.length;i++){

    if(len[i]!=',' && len[i]!='-'){result++;}

  }
  return result;

}

function clickComma(){
    
    let screen=document.getElementById('screen');
    disabledComma();
    disabledPlusMinus();

    if(deleteScreen){
        screen.value='0,';
        deleteScreen=false;

    }    
    else if(screen.value.includes(',')){
            
        return;
    }
    else if(calculateLength(screen.value)>=10) {
        return;

    }
    else if(screen.value==''){
        
        screen.value="0,";
    }
    else{
        screen.value+=",";
    }
}

function changePlusMinus(){
    
    let screen=document.getElementById('screen');

    if(screen.value=='' ||screen.value==0 || screen.value=='0,' || deleteScreen){
 
        return;
    }else{
        if(screen.value[0]=='-'){

            screen.value=screen.value.substring(1,screen.value.length);

        }else{

            screen.value=screen.value = '-' + screen.value;
        }

    }

}

function clickOperation(operator){
    
    activedComma();
    disabledPlusMinus();
    NonOperation=false;

    if(operation==''){
        let screen=document.getElementById('screen');
        operation=operator;
    
        first_number=screen.value;
    
        deleteScreen=true;
    }
    else{
       
        calculate();
        let screen=document.getElementById('screen');

        first_number=screen.value;

        operation=operator;

        deleteScreen=true;

       
    }
     

    
}

function calculate(){

    third_number=true;
    disabledPlusMinus();


    let screen=document.getElementById('screen');

    if(NonOperation){

        screen.value=num1;
        NonOperation=false;
    }

    if(deleteScreen){

        screen.value='ERROR';
        disabledButtons();

    }
    else if(operation==''){
        screen.value='ERROR';
        disabledButtons();
    }
    else{
        
    let result;
    let num1;
    let num2='';

    second_number=screen.value;

    num1=convertToNumber(first_number);
    num2=convertToNumber(second_number);

   

    if(operation=='+'){
       
        result=num1+num2;


    }
    else if(operation=='-'){
      
        result=num1-num2;

    }
    else if(operation=='x'){
       
        result=num1*num2;

    }
    else if(operation=='/'){
        
        result=num1/num2;

    }
    
    operation='';

    screen.value=convertToString(result);

    
    }
}

function shout(){

}

function eraseValue(){
    activedComma();
    removeHighlighted();
    activedPlusMinus();
    activedButtons();
    let screen=document.getElementById('screen');
    screen.value="0"; 
    deleteScreen=false;
    first_number='';
    second_number='';
    operation='';   
}

//disabling

function disabledComma(){

    document.getElementById("comma").style.backgroundColor = "#FF0000";
    document.getElementById("comma").style.cursor = "not-allowed";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled= true;


}

function activedComma(){

    document.getElementById("comma").style.backgroundColor = "#12a6d3";
    document.getElementById("comma").style.cursor = "pointer";
    document.getElementById("comma").style.color = "black";
    document.getElementById("comma").disabled= false;


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

    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {
        elementsNumbers[index].style.backgroundColor = "#FF0000";
        elementsNumbers[index].style.cursor = "not-allowed";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = true;

    }
    var elementsOperations = document.querySelectorAll(".operation");
    var index2 = 0, length = elementsOperations.length;

  
    for ( ; index2 < length; index2++) {

        elementsOperations[index2].style.backgroundColor = "#FF0000";
        elementsOperations[index2].style.cursor = "not-allowed";
        elementsOperations[index2].style.color = "black";
        elementsOperations[index2].disabled = true;

    }
    disabledComma();
    disabledPlusMinus();

}

function activedButtons(){
  
    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {
        elementsNumbers[index].style.backgroundColor = "rgb(29, 191, 240)";
        elementsNumbers[index].style.cursor = "pointer";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = false;

    }
    var elementsOperations = document.querySelectorAll(".operation");
    var index2 = 0, length = elementsOperations.length;

  
    for ( ; index2 < length; index2++) {

        elementsOperations[index2].style.backgroundColor = "rgb(255, 255, 255)";
        elementsOperations[index2].style.cursor = "pointer";
        elementsOperations[index2].style.color = "black";
        elementsOperations[index2].disabled = false;

    }
    activedComma();
    activedPlusMinus();


}

function convertToNumber(text){

    return parseFloat(text.replace(',','.'));
}

function convertToString(num){

    if(num=='Infinity' || num=='-Infinity' || !(num==num)){
        disabledButtons();
        return "ERROR";

    }

    //let cadena = num.toFixed(10);

    //console.log('hello ' + cadena + ' : ' + calculateLength(cadena));

    console.log(contEnters(num));
    console.log(calculateLength(num.toString()));

    if(Math.abs(num) >= 9999999999.5){
        disabledButtons();
        return "ERROR";


    }else if(contZero(num)==0){
        
        console.log("case1");
        return num.toFixed(10-contEnters(num)).toString().replace('.',',');

    }
    else{
        return num.toFixed(10-contZero(num)).toString().replace('.',',');

    }

}

function contZero(num){
    let zeros=0;
    let cadena=num.toFixed(10).toString();
   
    if(!cadena.includes('.')){
        return 0;
    }

    let point=cadena.length-1;

    while(cadena[point]=='0'){
        zeros++;
        point--;
    }

    return zeros;
}


function contEnters(num){
    let cadena=num.toFixed(10).toString();
    let enters=cadena.indexOf('.');

    if(cadena[0]=='-'){

        enters--;
    }
    return enters;

}

function changeHighlighted(changeClass){
    removeHighlighted();
    changeClass.add("operation2");
}

function removeHighlighted(){
    let changeClass=document.getElementsByClassName("operation");
    for(let index=0;index<changeClass.length;index++){
        changeClass[index].classList.remove("operation2");
    }
    
}

function keyboard (TheEvent) { 
    events = TheEvent || window.event;
    k=events.keyCode; 
   
    if (k>47 && k<58) { 
       p=k-48; 
       p=String(p) 
       clickNumber(p); 
       }	
  
    if (k>95 && k<106) {
       p=k-96;
       p=String(p);
       clickNumber(p);
       }

    if (k==110 || k==188) {clickComma()} 
    if (k==106 || k==88) {clickOperation('x'); changeHighlighted(document.getElementById('multiply').classList)} 
    if (k==107 ) {clickOperation('+'); changeHighlighted(document.getElementById('plus').classList)} 
    if (k==109) {clickOperation('-'); changeHighlighted(document.getElementById('minus').classList)} 
    if (k==111) {clickOperation('/'); changeHighlighted(document.getElementById('division').classList)} 
    if (k==32 || k==13 || k==187) {calculate()} //equal or space
    if (k==27) {eraseValue()} //C
    if( k==17){ changePlusMinus()}
    
    }
