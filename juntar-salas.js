/*Metodo concat() Junta dois arrays, colocando o array passado como argumento,
logo depois do primeiro. Em português essa operação é conhecida como concatenação.
Não altera o array no qual foi chamado,
então precisamos salvar esse resultado em um novo array.*/


const salaJS = ["Evaldo", "Camila", "Mari"];

const salaPython = ["Juliana", "Leo", "Raquel"];

const salasUnifiadas = salaJS.concat(salaPython);

console.log(salasUnifiadas);