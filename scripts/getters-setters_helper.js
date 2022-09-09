export function getButtons(buttonName){

    let button;

    button = document.getElementById(buttonName);

    return button;

}

export function getButtonsByClass(classButton){

    let buttonClass;
   
    buttonClass = document.getElementsByClassName(classButton);
    
    return buttonClass;

}

export function getScreen(){

    return document.getElementById('screen').value;
    
}

export function setScreen(newValue) {
    
    document.getElementById('screen').value = newValue;
    
}

export function addToScreen(newValue) {
    
    document.getElementById('screen').value += newValue;
    
}

export function getComma(){

    return document.getElementById("comma");

}
export function getPlusMinus(){

    return document.getElementById("plus-minus");

}