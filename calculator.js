var y=null;
var z=null;
var result;

window.onload = function(){ 
    pantalla=document.getElementById("textoPantalla"); 
    document.onkeydown = keyboard; }

function returnValue(x) {
   
    if(x==','  &&  document.getElementById('screen').value == 0){
        
        document.getElementById('screen').value+="0,";

    }else{

         document.getElementById('screen').value += x;

    }

    let first_number =document.getElementById('screen').value;
    first_number=first_number.replace(',','.');

    if(first_number.includes('+')){
        y=parseFloat(first_number.substring(0,first_number.indexOf('+')));
        

    }
    if(first_number.includes('-')){
        y=parseFloat(first_number.substring(0,first_number.indexOf('-')));

    }
    if(first_number.includes('x')){
        y=parseFloat(first_number.substring(0,first_number.indexOf('x')));

    }
    if (first_number.includes('/')){
        y=parseFloat(first_number.substring(0,first_number.indexOf('/')));

    }


    
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

function eraseValue(x) {
    removeHighlighted();
    document.getElementById('screen').value = x;
    document.getElementById('screen').placeholder = "0";

}

function calculate(){
    removeHighlighted();
    var number=document.getElementById('screen').value;
    var number2=eval(number.replace('x','*'));
    document.getElementById('screen').value=number2;

    if(number2=='Infinity' || number2=='-Infinity' || !(number2==number2)){
        document.getElementById('screen').value='ERROR';
    }

}

function calculate2(){

    let second_number=document.getElementById('screen').value;
    second_number=second_number.replace(',','.');
    if(second_number.includes('+')){
        z=parseFloat(second_number.substring(second_number.indexOf('+')+1,second_number.length));
        result=y+z;

    }
    if(second_number.includes('-')){
        z=parseFloat(second_number.substring(second_number.indexOf('-')+1,second_number.length));
        result=y-z;

    }
    if(second_number.includes('x')){
        z=parseFloat(second_number.substring(second_number.indexOf('x')+1,second_number.length));
        result=y*z;

    }
    if(second_number.includes('/')){
        z=parseFloat(second_number.substring(second_number.indexOf('/')+1,second_number.length));
        result=y/z;

    }
    result=parseFloat(result);
    result=result.toString();
    result=result.replace('.', ',');


    if(second_number=='Infinity' || second_number=='-Infinity' || !(second_number==second_number) || result=='Infinity'){
        document.getElementById('screen').value='ERROR';
    }
    else{
        document.getElementById('screen').value=result;
    }


}

function changePlusMinus(){


    if(document.getElementById('screen').value.includes('+')&&(y>0 ||y<0)){
        if(y>0){
            y=-y;
        }
        else if(y<0){
            y=-y; 
        }
        
        document.getElementById('screen').value=y+"+";

    }
    else if(document.getElementById('screen').value.includes('-')&&(y>0 ||y<0)){
        if(y>0){
            y=-y;
        }
        else if(y<0){
            y=-y; 
        }
        document.getElementById('screen').value=y+"-";
    }
    else if(document.getElementById('screen').value.includes('x')&&(y>0 ||y<0)){
        
        if(y>0){
            y=-y;
        }
        else if(y<0){
            y=-y; 
        }
        
        document.getElementById('screen').value=y+"x";
    }
     else if(document.getElementById('screen').value.includes('/')&&(y>0 ||y<0)){
        
        
        if(y>0){
            y=-y;
        }
        else if(y<0){
            y=-y; 
        }
        
        document.getElementById('screen').value=y+"/";
        
    } 
    
    else{
        document.getElementById('screen').value=-document.getElementById('screen').value;

    }

   /* if(z==parseFloat(second_number.substring(second_number.indexOf('/')+1,second_number.length)) && document.getElementById('screen').value.includes('+')){


    }*/

    
    console.log(y);
   
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
    if (k==106 || k==88) {returnValue('x'); changeHighlighted(document.getElementById('multiply').classList)} 
    if (k==107) {returnValue('+'); changeHighlighted(document.getElementById('plus').classList)} 
    if (k==109) {returnValue('-'); changeHighlighted(document.getElementById('minus').classList)} 
    if (k==111) {returnValue('/'); changeHighlighted(document.getElementById('division').classList)} 
    if (k==32 || k==13) {calculate2()} //equal or space
    if (k==27) {eraseValue(" ")} //C
    
    }