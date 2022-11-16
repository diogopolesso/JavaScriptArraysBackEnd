const nomes = ["Evaldo", "Mari", "Camis"];

nomes.forEach(function(nome){
    console.log(nome);
})

/* também podemos usar a sintaxe de arrow funtion (=>),
em português seria algo como "função flecha": */

nomes.forEach((nome) => {
    console.log(nome);
})

/* Podemos criar a função callback de forma externa: */

function imprimeNome (nome){
    console.log(nome);
}

nomes.forEach(imprimeNome);