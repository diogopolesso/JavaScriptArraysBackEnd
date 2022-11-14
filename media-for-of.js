/* Termo of significa "de", em inglês.
é como se estivéssemos dizendo: para cada elemento de notas,
execute o código que está dentro das chaves.
O for of é muito adequado para utilizarmos com arrays.
Quando queremos percorrer um array, podemos usar o for of */

const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0

for (let nota of notas) {
    somaDasNotas += nota;
}

    console.log(`A soma da notas é ${somaDasNotas}.`);
