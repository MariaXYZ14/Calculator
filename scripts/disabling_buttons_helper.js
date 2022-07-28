import{getComma,getPlusMinus} from './getters-setters_helper.js';

export function disableComma(){

    getComma().style.backgroundColor = "#FF0000";
    getComma().style.cursor = "not-allowed";
    getComma().style.color = "black";
    getComma().disabled = true;

}

export function activateComma(){

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

export function activatePlusMinus(){

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
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {

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
    var index = 0, length = elementsOperations.length;

    for ( ; index < length; index++) {

        elementsOperations[index].classList.remove("operation");
        elementsOperations[index].classList.add("operationRed");
        elementsOperations[index].disabled = true;

    }

}

export function activateButtons(){
  
    activateNumbers();

    var elementsOperations = document.getElementsByClassName(".operationRed");
    var index2 = 0, length = elementsOperations.length;

    for ( ; index2 < length; index2++) {

        elementsOperations[index2].classList.remove("operationRed");
        elementsOperations[index2].classList.add("operation");
        elementsOperations[index2].disabled = false;

    }

    activateComma();
    activatePlusMinus();

}

export function activateNumbers(){

    var elementsNumbers = document.querySelectorAll(".numbers");
    var index = 0, length = elementsNumbers.length;

    for ( ; index < length; index++) {

        elementsNumbers[index].style.backgroundColor = "rgb(29, 191, 240)";
        elementsNumbers[index].style.cursor = "pointer";
        elementsNumbers[index].style.color = "black";
        elementsNumbers[index].disabled = false;

    }

}