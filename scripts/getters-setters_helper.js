export function getButtons(buttonName){

    let button;

    switch(buttonName){

        case 'zero':

            button= document.getElementById("zero");

        break;

        case 'one':
        
            button= document.getElementById("one");

        break;

        case 'two':

            button= document.getElementById("two");

        break;

        case 'three':
        
            button= document.getElementById("three");

        break;

        case 'four':

            button= document.getElementById("four");

        break;

        case 'five':
        
            button= document.getElementById("five");

        break;

        case 'six':

            button= document.getElementById("six");
    
        break;
    
        case 'seven':
            
            button= document.getElementById("seven");
    
        break;
    
        case 'eight':
    
            button= document.getElementById("eight");
    
        break;
    
        case 'nine':
            
            button= document.getElementById("nine");
    
        break;

        case 'plus':
                
            button= document.getElementById("plus");
        
        break;
        
        case 'minus':
        
            button= document.getElementById("minus");
        
        break;
        
        case 'multiply':
                
            button= document.getElementById("multiply");
        
        break;

        case 'division':
                
            button= document.getElementById("division");
        
        break;
            
        case 'equal':
                
            button= document.getElementById("equal");
        
        break;

        case 'C':
                
            button= document.getElementById("C");
        
        break;

        case 'plus-minus':
                
            button= document.getElementById("plus-minus");
            
        break;

        case 'comma':
                
            button= document.getElementById("comma");
            
        break;

    }

   return button;

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