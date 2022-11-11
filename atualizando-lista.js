/*Metodo splice() Consegue remover, um ou mais elementos consecutivos
caso o segundo parâmetro tenha um valor maior que 0,
e incluir um ou mais elementos a partir de um índice escolhido.*/

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie'];

nomes.splice(1, 2, "Rodrigo");

console.log(nomes);