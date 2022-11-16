const nomes = ["ana Julia", "Caio vinicios", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
    return nome.toUpperCase();
});

console.log(nomesPadronizados);

/* Uma particularidade das arrow functions
é que quando tudo o que fazemos dentro da arrow function
é retornar um valor, podemos simplesmente omitir
a palavra-chave return, vamos apagá-la,
e podemos tirar as chaves de abertura e chave
de fechamento da função.
uma forma bem sucinta de escrever arrow functions: */

const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());

console.log(nomesPadronizados);