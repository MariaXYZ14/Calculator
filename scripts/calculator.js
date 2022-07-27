import{disableComma,activateComma,disablePlusMinus,activatePlusMinus,disableButtons,disableNumbers,activateButtons,activateNumbers} from './disabling_buttons_helper.js';
import{calculateNumberOfDigits,convertToNumber,convertToString} from './math_functions_helper.js'
import{getButtons,getScreen,setScreen,addScreen} from './getters-setters_helper.js';
let firstNumber;
let secondNumber;
let operation = '';
let maximumDigits = 10;
let IsDeletedScreen = false;
let third_number = false;

window.onload = function(){ 

    getButtons('zero').onclick = function(){clickNumber(this.value)};
    getButtons('one').onclick = function(){clickNumber(this.value)};
    getButtons('two').onclick = function(){clickNumber(this.value)};
    getButtons('three').onclick = function(){clickNumber(this.value)};
    getButtons('four').onclick = function(){clickNumber(this.value)};
    getButtons('five').onclick = function(){clickNumber(this.value)};
    getButtons('six').onclick = function(){clickNumber(this.value)};
    getButtons('seven').onclick = function(){clickNumber(this.value)};
    getButtons('eight').onclick = function(){clickNumber(this.value)};
    getButtons('nine').onclick = function(){clickNumber(this.value)};

    getButtons('comma').onclick = function(){clickComma()};

    getButtons('division').onclick = function(){clickOperation(this.value);changeHighlighted(document.getElementById('division').classList)};
    getButtons('multiply').onclick = function(){clickOperation(this.value);changeHighlighted(document.getElementById('multiply').classList)};
    getButtons('minus').onclick = function(){clickOperation(this.value);changeHighlighted(document.getElementById('minus').classList)};
    getButtons('plus').onclick = function(){clickOperation(this.value);changeHighlighted(document.getElementById('plus').classList)};
    getButtons('equal').onclick = function(){calculate();removeHighlighted();};

    getButtons('C').onclick = function(){clickErase();removeHighlighted();};
    getButtons('plus-minus').onclick = function(){clickPlusMinus()};

    document.onkeydown = keyboard; 

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
    else if(calculateNumberOfDigits(getScreen()) >= maximumDigits){

        return;

    }
    else if(getScreen() != null && third_number){

        setScreen(number);
        third_number = false;

    }
    else{

        addScreen(number);

        if(calculateNumberOfDigits(getScreen()) >= maximumDigits){ 
            
            disableNumbers();

        }

    }
    
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
    else if(calculateNumberOfDigits(getScreen()) >= maximumDigits) {
        
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

function keyboard (TheEvent) { 

    let events = TheEvent || window.event;
    let k=events.keyCode; 
    let p;
   
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
    if (k == 107 || k == 187){clickOperation('+'); changeHighlighted(document.getElementById('plus').classList)} 
    if (k == 109 || k == 189){clickOperation('-'); changeHighlighted(document.getElementById('minus').classList)} 
    if (k == 111){clickOperation('/'); changeHighlighted(document.getElementById('division').classList)} 
    if (k == 32 || k == 13) {calculate();removeHighlighted();} //equal or space
    if (k == 27){clickErase();removeHighlighted();} //C
    if (k == 17){clickPlusMinus()}
    
    }