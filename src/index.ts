/*******************************************
 *        STRING RELATED FUNCTIONS         *
 * FROM http://stackoverflow.com/a/1144788 *
 *******************************************/

function escapeRegExp(str: string): string {
  return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}

function replaceAll(find: string, replace: string, str: string) {
  return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

/*******************************************
 *         CHAR RELATED FUNCTIONS          *
 *******************************************/

function isNumber(char: string): boolean {
  const asciiVal = char.charCodeAt(0);
  return asciiVal >= 48 && asciiVal <= 57;
}

/*******************************************
 *            BI CHECK FUNCTIONS           *
 *******************************************/

function validBI(biVal: string, is10: boolean): boolean {
  return (
    Array.from(Array(biVal.length).keys())
      .reverse()
      .map((charIndex, index) => {
        if (charIndex === biVal.length - 1 && is10) {
          return 10 * (index + 1);
        }
        return parseInt(biVal.charAt(charIndex), 10) * (index + 1);
      })
      .reduce((a, b) => a + b, 0) %
      11 ===
    0
  );
}

function performBIValidation(biVal: string): boolean {
  if (!validBI(biVal, false)) {
    if (parseInt(biVal.charAt(biVal.length - 1), 10) === 0) {
      return validBI(biVal, true);
    }
    return false;
  }
  return true;
}

/*******************************************
 *            CC CHECK FUNCTIONS           *
 *******************************************/

function getNumberFromChar(letter: string): number {
  if (isNumber(letter)) {
    return parseInt(letter, 10);
  } else {
    return letter.charCodeAt(0) - 55;
  }
}

function performCCValidation(ccVal: string): boolean {
  return (
    Array.from(Array(ccVal.length).keys())
      .reverse()
      .map((charIndex, index) => {
        let value = getNumberFromChar(ccVal.charAt(charIndex));
        if (index % 2 !== 0) {
          value *= 2;
          if (value > 9) {
            value -= 9;
          }
        }
        return value;
      })
      .reduce((a, b) => a + b, 0) %
      10 ===
    0
  );
}

/*******************************************
 *              CHECK FUNCTION             *
 *******************************************/

export default function check(val: string): boolean {
  const ccRegExp = /^[0-9]{7,8}\ [0-9]\ ([A-Z]|[0-9]){2}[0-9]$/;
  const biRegExp = /^[0-9]{7,8}\ [0-9]$/;
  if (ccRegExp.test(val)) {
    return performCCValidation(replaceAll(' ', '', val));
  } else if (biRegExp.test(val)) {
    return performBIValidation(replaceAll(' ', '', val));
  } else {
    throw TypeError('The value provided does not match the official format for portuguese IDs');
  }
}
