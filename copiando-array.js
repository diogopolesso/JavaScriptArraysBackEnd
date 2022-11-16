const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As Novas Notas são ${novasNotas}`);

/*

Esse é um operador do JavaScript que se chama spread operator,
ou "operador de espalhamento". Ao utilizá-lo junto com uma lista,
ele pega todo o conteúdo desse array e espalhar seus valores no local
que estamos indicando. É como se copiássemos o conteúdo da lista,
"7, 7, 8, 9", e colássemos no lugar do [...notas].
É isso que estamos dizendo para o JavaScript. 
Essa é a forma JavaScript de fazer a cópia de um array.

*/
