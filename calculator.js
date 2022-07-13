function returnValue(x) {
   
    if(x==','  &&  document.getElementById('screen').value == 0){
        
        document.getElementById('screen').value+="0,";

    }else{

         document.getElementById('screen').value += x;

    }
}

function eraseValue(x) {
   
    document.getElementById('screen').value = x;
    
}

