/*
&& -> AND -> E 
|| -> OR -> OU
/*FALSY 
false
0
'' "" ``
null / undefined
NaN
*/


console.log("Paulo" && "Roberto"); // Como o primeiro valor é verdadeiro, ele retorna o último valor
console.log("Paulo" && " " && "Roberto"); // Como o valor do meio é falso, ele retorna o valor falso e não retorna mais nada