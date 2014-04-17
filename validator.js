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

function checkCC(ccVal) {
    var regExp = /^[0-9]{7,8}\ [0-9]\ [A-Z]{2}[0-9]$/;
    if(regExp.test(ccVal)) {
        var biVal = ccVal.slice(0, -4);
        return performBIValidation(biVal.replace(" ", ""));
    }
    return -1;
}