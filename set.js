const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

/*

O Set é uma classe do JavaScript,
usaremos uma classe porque ela já vem com algumas lógicas internas.
parecidas com outras lista, porem com algumas regras a mais.
Uma delas é que os elementos de um Set não podem se repetir.

*/