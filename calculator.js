function returnValue(x) {
   
    if(x==','  &&  document.getElementById('screen').value == 0){
        
        document.getElementById('screen').value+="0,";

    }else{

         document.getElementById('screen').value += x;

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
