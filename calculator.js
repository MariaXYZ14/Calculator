let first_number;
let second_number;
let operation='';

window.onload = function(){ 
    pantalla=document.getElementById("textoPantalla"); 
    document.onkeydown = keyboard; }


function clickNumber(number){
   
    let screen=document.getElementById('screen');


    if(screen.value == 0){
        
        screen.value = number;

    }
    else if(calculateLength(screen.value)>=10){

        return;
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

    if(screen.value.includes(',')){
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

    if(screen.value=='' ||screen.value==0 || screen.value=='0,'){
 
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


    if(operation==''){
        let screen=document.getElementById('screen');
        operation=operator;
    
        first_number=screen.value;
    
        screen.value='0';  
    }
    else{
       
        calculate();
        let screen=document.getElementById('screen');

        first_number=screen.value;

        operation=operator;

        screen.value='0';  

       
    }
     

    
}

function calculate(){
    
    let screen=document.getElementById('screen');
    let result;
    let num1;
    let num2='';
    removeHighlighted();


    second_number=screen.value;

    num1=convertToNumber(first_number);
    num2=convertToNumber(second_number);

   
    console.log(operation);
    
    if(operation=='+'){
       
        result=num1+num2;


    }
    else if(operation=='-'){
      
        result=num1-num2;

    }
    if(operation=='x'){
       
        result=num1*num2;

    }
    if(operation=='/'){
        
        result=num1/num2;

    }
    else if( num2=='' && operation==''){
        screen=num1;
    }
    else if(num2==''){
        screen.value=convertToString(result);
        result='ERROR';
    }

    operation='';

    screen.value=convertToString(result);
    
}

function eraseValue(){
    removeHighlighted();
    let screen=document.getElementById('screen');
    screen.value="0";    
}

function convertToNumber(text){

    return parseFloat(text.replace(',','.'));
}

function convertToString(num){

    if(num=='Infinity' || num=='-Infinity' || !(num==num)){
        return "ERROR";
    }

    return num.toFixed(10-contZero(num)).toString().replace('.',',');
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

    if (k==110 || k==190) {clickComma()} 
    if (k==106 || k==88) {clickOperation('x'); changeHighlighted(document.getElementById('multiply').classList)} 
    if (k==107) {clickOperation('+'); changeHighlighted(document.getElementById('plus').classList)} 
    if (k==109) {clickOperation('-'); changeHighlighted(document.getElementById('minus').classList)} 
    if (k==111) {clickOperation('/'); changeHighlighted(document.getElementById('division').classList)} 
    if (k==32 || k==13) {calculate()} //equal or space
    if (k==27) {eraseValue()} //C
    if( k==17){ changePlusMinus()}
    
    }