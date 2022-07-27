export function getButtons(buttonName){

    let button;

    button= document.getElementById(buttonName);

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