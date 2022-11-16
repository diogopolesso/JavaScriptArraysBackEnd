const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota, indice){
    somaDasNotas += nota;
    console.log(indice);
});

const media = somaDasNotas / notas.length;

console.log(`A média da notas é ${media}.`);

/* 

forEach também é uma estrutura de repetição.
Essa função anônima foi passada como parâmetro de outra função,
o forEach. Quando uma função é parâmetro de outra,
chamamos a função passada como callback. Ou seja,
essa função anônima também é callback nesse caso.

callback significa "chamar de volta".
tem esse nome porque é uma função que estamos
guardando de alguma forma na lógica interna do forEach
e ela vai ser chamada de volta em determinados momentos.
Mais especificamente, ela será chamada para cada
elemento do array de notas.

forEach tem uma lógica parecida com o for of,
ele fornece diretamente o valor do elemento do array,
que nesse caso nomeamos de nota,
e ele também sempre vai do início ao fim do array.

forEach tem uma vantagem em relação ao for of.
Nos parâmetros da função callback,
podemos passar mais um parâmetro,
usando uma vírgula entre os parâmetros.

podemos usar o forEach para acessar o valor de todos
os elementos em um array.

o único parâmetro obrigatório que temos que fornecer
para esse método é Uma função que recebe um elemento.

Essa função tem o nome de callback e vai ser executada
para cada elemento do array, sendo que pode
receber de 1 a 3 argumentos; o elemento,
o índice e o array atual, respectivamente.

*/