 //Não podemos criar constantes com palavras reservadas
 //Contantes precisam ter nomes significativos
 //NÃO UTILIZE VAR, UTILIZE CONST.
//CONSTANTE TEM QUE TER UM VALOR INICIAL/ATRIBUIÇÃO

const nome = 'João';

const primeiroNumero = 5;
const segundoNumero = 10;

const resultado = primeiroNumero + segundoNumero;
const resultado1 = primeiroNumero - segundoNumero;
const resultado2 = primeiroNumero * segundoNumero;
const resultado3 = primeiroNumero / segundoNumero;

console.log(resultado);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);

let resultadoDuplicado = resultado * 3;
resultadoDuplicado = resultadoDuplicado + 10;
console.log(resultadoDuplicado);

console.log(typeof resultado)

const numeroConcatenado = "5"
console.log(numeroConcatenado + 50);
//Quando concatenamos strings com números, o resultado do typeof é uma string.
console.log(typeof(numeroConcatenado + 50))


