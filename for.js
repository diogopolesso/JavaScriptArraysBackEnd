const numeros = [100, 200, 300, 400, 500, 600]

/*  Primeira Expressão: é executada apenas uma vez.
    Segunda Expressão: condição de execução do bloco {}
    Terceira Expressão: é executada sempre ao final do bloco {}. */

for (let indice = 0; indice < numeros.length; indice = indice + 1) {
    console.log(numeros[indice]);

}
