/*******************************************
 *        STRING RELATED FUNCTIONS         *
 * FROM http://stackoverflow.com/a/1144788 *
 *******************************************/

function escapeRegExp(string) {
    return string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
    
function replaceAll(find, replace, str) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

/*******************************************
 *         CHAR RELATED FUNCTIONS          *
 *******************************************/

function isNumber(char) {
    var asciiVal = char.charCodeAt(0);
    return (asciiVal >= 48 && asciiVal <=57);
}

/*******************************************
 *            BI CHECK FUNCTIONS           *
 *******************************************/

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
        return performBIValidation(replaceAll(" ", "", biVal));
    }
    return -1;
}

/*******************************************
 *            CC CHECK FUNCTIONS           *
 *******************************************/

function getNumberFromChar(letter) {
    if(isNumber(letter)) {
        return parseInt(letter);
    } else {
        return letter.charCodeAt(0) - 55;
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
        return performCCValidation(replaceAll(" ", "", ccVal));
    }
    return -1;
}