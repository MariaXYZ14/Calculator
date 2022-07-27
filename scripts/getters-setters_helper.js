export function getButtons(className){

    let number;

    switch(className){

        case 'zero':

        number= document.getElementById("zero");

        break;

        case 'one':
        
        number= document.getElementById("one");

        break;

        case 'two':

        number= document.getElementById("two");

        break;

        case 'three':
        
        number= document.getElementById("three");

        break;

        case 'four':

        number= document.getElementById("four");

        break;

        case 'five':
        
        number= document.getElementById("five");

        break;

        case 'six':

         number= document.getElementById("six");
    
        break;
    
        case 'seven':
            
        number= document.getElementById("seven");
    
        break;
    
        case 'eight':
    
        number= document.getElementById("eight");
    
        break;
    
        case 'nine':
            
        number= document.getElementById("nine");
    
        break;
    }

   return number;

}
export function getScreen(){

    return document.getElementById('screen').value;
}

export function setScreen(newValue) {
    
    document.getElementById('screen').value = newValue;
    
}

export function addScreen(newValue) {
    
    document.getElementById('screen').value += newValue;
    
}