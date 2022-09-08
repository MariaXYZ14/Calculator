import{getButtons, getComma,getPlusMinus} from './getters-setters_helper.js';

export function disableComma(){

    getComma().style.backgroundColor = "#FF0000";
    getComma().style.cursor = "not-allowed";
    getComma().style.color = "black";
    getComma().disabled = true;

}

export function disableZero(){

    getButtons("zero").style.backgroundColor = "#FF0000";
    getButtons("zero").style.cursor = "not-allowed";
    getButtons("zero").style.color = "black";
    getButtons("zero").disabled = true;

}

export function setCommaStatus(){

    getComma().style.backgroundColor = "#12a6d3";
    getComma().style.cursor = "pointer";
    getComma().style.color = "black";
    getComma().disabled = false;

}

export function disablePlusMinus(){

    getPlusMinus().style.backgroundColor = "#FF0000";
    getPlusMinus().style.color = "black";
    getPlusMinus().style.cursor = "not-allowed";
    getPlusMinus().disabled = true;
 
}

export function setPlusMinusStatus(){

    getPlusMinus().style.backgroundColor = "rgb(255, 255, 255)";
    getPlusMinus().style.color = "black";
    getPlusMinus().style.cursor = "pointer";
    getPlusMinus().disabled = false;

}

export function disableButtons(){

    disableNumbers();
    disableOperators();

}

export function disableNumbers(){
    
    var elementsNumbers = document.querySelectorAll(".numbers");

    for ( var index =0; index < elementsNumbers.length; index++) {

        elementsNumbers[index].style.backgroundColor = "#FF0000";
        elementsNumbers[index].style.cursor = "not-allowed";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = true;

    }

    disableComma();
    disablePlusMinus();

}

export function disableOperators(){
   
    var elementsOperations = document.getElementsByClassName("changedOperationButtonClass");
    
    for ( var index = 0 ; index < elementsOperations.length; index++) {

        elementsOperations[index].classList.remove("operation");
        elementsOperations[index].classList.add("operationRed");
        elementsOperations[index].disabled = true;

    }

}

export function setButtonsStatus(){
  
    setNumbersStatus();

    var elementsOperations = document.getElementsByClassName("changedOperationButtonClass");
   
    for ( var index = 0 ; index < elementsOperations.length; index++) {

        elementsOperations[index].classList.remove("operationRed");
        elementsOperations[index].classList.add("operation");
        elementsOperations[index].disabled = false;

    }

    setPlusMinusStatus();

}

export function setNumbersStatus(){

    var elementsNumbers = document.querySelectorAll(".numbers");
    
    for ( var index = 0 ; index < elementsNumbers.length; index++) {

        elementsNumbers[index].style.backgroundColor = "rgb(29, 191, 240)";
        elementsNumbers[index].style.cursor = "pointer";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = false;

    }

}