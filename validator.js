function validBI(biVal, is10) {
    i = 1;
    sum = 0;
    for(j = biVal.length-1; j >= 0; j--) {
        if(j == biVal.length-1 && is10 == 1) {
            sum += 10*i;
            i++;
            continue; 
        }
        sum += parseInt(biVal.charAt(j))*i;
        i++;
    }
    return (sum % 11 == 0 ? 1 : 0);
}

function performBIValidation(biVal) {
    if(!validBI(biVal, 0)) {
        if(parseInt(biVal.charAt(biVal.length - 1)) == 0) {
            return validBI(biVal, 1);
        }
        return 0;
    }
    return 1;
}

function checkBI(biVal) {
    var regExp = /^[0-9]{7,8}\ [0-9]$/;
    if(regExp.test(biVal)) {
        return performBIValidation(biVal.replace(" ", ""));
    }
    return -1;
}

function getNumberFromChar(letter) {
    switch(letter) {
        case "0" : return 0;
        case "1" : return 1;
        case "2" : return 2;
        case "3" : return 3;
        case "4" : return 4;
        case "5" : return 5;
        case "6" : return 6;
        case "7" : return 7;
        case "8" : return 8;
        case "9" : return 9;
        case "A" : return 10;
        case "B" : return 11;
        case "C" : return 12;
        case "D" : return 13;
        case "E" : return 14;
        case "F" : return 15;
        case "G" : return 16;
        case "H" : return 17;
        case "I" : return 18;
        case "J" : return 19;
        case "K" : return 20;
        case "L" : return 21;
        case "M" : return 22;
        case "N" : return 23;
        case "O" : return 24;
        case "P" : return 25;
        case "Q" : return 26;
        case "R" : return 27;
        case "S" : return 28;
        case "T" : return 29;
        case "U" : return 30;
        case "V" : return 31;
        case "W" : return 32;
        case "X" : return 33;
        case "Y" : return 34;
        case "Z" : return 35;
    }
}

function performCCValidation(ccVal) {
    var sum = 0;
    var secondDigit = false;

    for(i = ccVal.length - 1; i >= 0; i--) {
        var valor = getNumberFromChar(ccVal.charAt(i));
        if(secondDigit) {
            valor *= 2;
            if(valor > 9) {
                valor -= 9;
            }
        }

        sum += valor;
        secondDigit = !secondDigit;
    }

    return (sum % 10 == 0 ? 1 : 0);
}

function checkCC(ccVal) {
    var regExp = /^[0-9]{7,8}\ [0-9]\ [A-Z]{2}[0-9]$/;
    if(regExp.test(ccVal)) {
        var biVal = ccVal.slice(0, -4);
        return performBIValidation(biVal.replace(" ", ""));
    }
    return -1;
}