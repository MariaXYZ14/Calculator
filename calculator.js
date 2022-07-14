window.onload = function(){ 
    pantalla=document.getElementById("textoPantalla"); 
    document.onkeydown = keyboard; }

function returnValue(x) {
   if(x.length<10){

    if(x==','  &&  document.getElementById('screen').value == 0){
        
        document.getElementById('screen').value+="0,";

    }else{

         document.getElementById('screen').value += x;

    }

}
}

function changeHighlighted(x){
    removeHighlighted();
    let changeClass=x.currentTarget.classList
    changeClass.add("operation2");
}

function removeHighlighted(){
    let changeClass=document.getElementsByClassName("operation");
    for(let index=0;index<changeClass.length;index++){
        changeClass[index].classList.remove("operation2");
    }
    
}

function eraseValue(x) {
    removeHighlighted();
    document.getElementById('screen').value = x;
    
}

function calculate(){
    var number=document.getElementById('screen').value;
    var number2=eval(number.replace('x','*'));
    document.getElementById('screen').value=number2;
}

function keyboard (TheEvent) { 
    events = TheEvent || window.event;
    k=events.keyCode; 
   
    if (k>47 && k<58) { 
       p=k-48; 
       p=String(p) 
       returnValue(p); 
       }	
  
    if (k>95 && k<106) {
       p=k-96;
       p=String(p);
       returnValue(p);
       }

    if (k==110 || k==190) {returnValue(",")} 
    if (k==106 || k==88) {returnValue('x'); changeHighlighted('x')} 
    if (k==107) {returnValue('+'); changeHighlighted('+')} 
    if (k==109) {returnValue('-'); changeHighlighted('-')} 
    if (k==111) {returnValue('/'); changeHighlighted('/')} 
    if (k==32 || k==13) {calculate()} //equal or space
    if (k==67) {eraseValue(" ")} //C
    
    }