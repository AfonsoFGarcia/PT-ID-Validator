Portuguese-ID-Validator
=======================

This library provides functions to validate the portuguese `Bilhete de Identidade` and `Cartão de Cidadão` number.

Usage
-----

You can either check-out the current development version and include it in your projects or use a release. The current release is 2.0.0 and can be accessed at https://cdn.rawgit.com/AfonsoFGarcia/Portuguese-ID-Validator/v2.0.0/validator.js

In order to perform validations, you need to input the ID number accordingly to the description in https://www.autenticacao.gov.pt/documents/20126/115760/Valida%C3%A7%C3%A3o+de+N%C3%BAmero+de+Documento+do+Cart%C3%A3o+de+Cidad%C3%A3o.pdf/ (Portuguese only). Although this description is for `Cartão de Cidadão`, the same applies for `Bilhete de Identidade`, only without the AAT end.

The provided function checks the correctness of the number and the format.

`check(val)` verifies if the format is valid for either `Cartão do Cidadão` or `Bilhete de Identidade`, according to the format DDDDDDDD C AAT or DDDDDDDD C, respectively. After that, it uses the correct check digit algorithm to verify if it the number is valid.

If the number that you want to check has 7 digits instead of 8, you don't need to input the leftmost 0 of the number.

The return values are as follows:

* `false` if the provided string is not a valid `Cartão do Cidadão`/`Bilhete de Identidade`
* `true` if the provided string is a valid `Cartão do Cidadão`/`Bilhete de Identidade`

When an incorrect format is passed, a `TypeError` is thrown.