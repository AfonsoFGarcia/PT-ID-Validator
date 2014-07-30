Portuguese-ID-Validator
=======================

This library provides functions to validate the portuguese `Bilhete de Identidade` and `Cartão de Cidadão` number.

Usage
-----

You can either check-out the current development version and include it in your projects or use a release. The current release is 1.2.0 and can be accessed at https://cdn.rawgit.com/AfonsoFGarcia/Portuguese-ID-Validator/v1.2.0/validator.js

In order to perform validations, you need to input the ID number accordingly to the description in http://www.cartaodecidadao.pt/index.php%3Foption=com_content&task=view&id=156&Itemid=35&lang=pt.html. Although this description is for `Cartão de Cidadão`, the same applies for `Bilhete de Identidade`, only without the AAT end.

The provided function checks the correctness of the number and the format.

`check(val)` verifies if the format is valid for either `Cartão do Cidadão` or `Bilhete de Identidade`, according to the format DDDDDDDD C AAT or DDDDDDDD C, respectively. After that, it uses the correct check digit algorithm to verify if it the number is valid.

The following functions perform these verifications, but do not verify which type of document is passed. You should use the previous one if you don't know what type of document it is. If you know, checking it using one of these functions will be faster. **Be careful**, these functions are marked as legacy and will not be improved. They can also be removed in the next releases.

`checkCC(ccVal)`, which checks if a `Cartão do Cidadão` provided in the format DDDDDDDD C AAT is valid,
`checkBI(biVal)`, which checks if a `Bilhete de Identidade` provided in the format DDDDDDDD C is valid.

If the number that you want to check has 7 digits instead of 8, you don't need to input the leftmost 0 of the number.

All functions return:

* `-1` if the provided string is not in the correct format
* `0` if the provided string is not a valid `Cartão do Cidadão`/`Bilhete de Identidade`
* `1` if the provided string is a valid `Cartão do Cidadão`/`Bilhete de Identidade`
