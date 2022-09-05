import{disableButtons} from './disabling_buttons_helper.js';

export function calculateNumberOfDigits(digits){

    let result = 0;

    for(let i = 0;i < digits.length;i++){

        if(digits[i] != ',' && digits[i] != '-'){
       
            result++;
    
        }

    }

    return result;

}

export function convertToNumber(text){

    return parseFloat(text.replace(',','.'));

}

export function convertToString(number){
   
    if(number == 'Infinity' || number == '-Infinity' || !(number == number)){

        disableButtons();

        return "ERROR";

    }

    if(Math.abs(number) >= 9999999999.5){

        disableButtons();

        return "ERROR";

    }else if(contZero(number) == 0){
        
        return number.toFixed(10-contEnters(number)).toString().replace('.',',');

    } 
    else{

        return number.toFixed(10-contZero(number)).toString().replace('.',',');

    }

}

export function contZero(number){

    let zeros = 0;
    let cadena = number.toFixed(10).toString();
   
    if(!cadena.includes('.')){
        
        return 0;
    }

    let point = cadena.length-1;

    while(cadena[point] == '0'){

        zeros++;
        point--;

    }

    return zeros;

}

export function contEnters(number){

    let cadena = number.toFixed(10);
    let enters = cadena.indexOf('.');

    if(cadena[0] == '-'){

        enters--;

    }

    return enters;

}