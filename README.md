Portuguese-ID-Validator
=======================

This library provides functions to validate the portuguese `Bilhete de Identidade` and `Cartão de Cidadão` number.

Usage
-----

You can either check-out the current development version and include it in your projects or use a release. The current release is 1.1 and can be accessed at https://cdn.rawgit.com/AfonsoFGarcia/Portuguese-ID-Validator/v1.1/validator.js

In order to perform validations, you need to input the ID number accordingly to the description in http://www.cartaodecidadao.pt/index.php%3Foption=com_content&task=view&id=156&Itemid=35&lang=pt.html. Although this description is for the `Cartão de Cidadão`, the same applies for `Bilhete de Identidade`, only without the AAT end.

The provided functions check the correctness of the number and the format. They are:

`checkCC(ccVal)`, which checks if a `Cartão do Cidadão` provided in the format DDDDDDDD C AAT is valid,
`checkBI(biVal)`, which checks if a `Bilhete de Identidade` provided in the format DDDDDDDD C is valid.

If the number that you want to check has 7 digits instead of 8, you don't need to input the leftmost 0 of the number.

Both functions return:

* `-1` if the provided string is not in the correct format
* `0` if the provided string is not a valid `Cartão do Cidadão`/`Bilhete de Identidade`
* `1` if the provided string is a valid `Cartão do Cidadão`/`Bilhete de Identidade`
