const alunos = ["João", "Juliana", "Ana", "Caio"];
const medias = [10, 8, 7.5, 9];

const listaDeAlunosEMedias = [alunos, medias];

function exibeNomeNota(aluno) {
    if (listaDeAlunosEMedias[0].includes(aluno)) {

        /*const alunos = listaDeAlunosEMedias[0];
        const medias = listaDeAlunosEMedias[1];*/
        
        //Recurso de Desestruturação:

        const [alunos, medias] = listaDeAlunosEMedias;

        const indice = alunos.indexOf(aluno);
        const mediaDoAluno = medias[indice];

        console.log(`${aluno} tem a Media ${mediaDoAluno}`);

    } else {console.log("Aluno não Encontrado!");
    }
}

exibeNomeNota("Juliana");