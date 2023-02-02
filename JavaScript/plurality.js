//Programa de votação aonde tem 3 candidatos e a quantidade de eleitores deve ser no máximo de 9.
//Ao final imprimir o candidato vencedor.

const eleitoral = [{
    nome: "Alice",
    votos: 0
},
{
    nome: "Bob",
    votos: 0
},
{
    nome: "Charlie",
    votos: 0
}]
let eleitores = prompt ("Informe quantidade de eleitores");
let voto;
let votoMaior = -1;
let votoEmpate;
let nomeMaior;
let quantEmpate = 0;

while (eleitores > 9 || eleitores < 1 ){
    eleitores = prompt ("Informe a quantidade de eleitores entre 1 a 9.");
}

for (let i = 0; i < eleitores; i++){
    voto = prompt (`Digite: 
                            1 para votar em ${eleitoral[0].nome}, 
                            2 para votar em ${eleitoral[1].nome},
                            3 para votar em ${eleitoral[2].nome}. `)

    while (voto != 1 && voto != 2 && voto !=3){
        voto = prompt (`Voto inválido, digite: 
        1 para votar em ${eleitoral[0].nome}, 
        2 para votar em ${eleitoral[1].nome},
        3 para votar em ${eleitoral[2].nome}. `)
    }  
                      
    if (voto == 1){
        eleitoral[0].votos++;
    } 
    else if (voto == 2){
        eleitoral[1].votos++;
    } 
    else {
        eleitoral[2].votos++;
    }
}

for (let i = 0; i < eleitoral.length; i++){

      if (eleitoral[i].votos > votoMaior){
        votoMaior = eleitoral[i].votos;
        nomeMaior = eleitoral[i].nome;
        
    } else if (eleitoral[i].votos == votoMaior){
        quantEmpate++;
        votoEmpate = eleitoral[i].votos
    } 
}

if (quantEmpate > 0 && votoEmpate >= votoMaior){
    alert ("Eleições empatadas entre os vencedores. Haverá 2º Turno");
} else {
    alert (`O Candidato vencedor é: ${nomeMaior} com ${votoMaior} votos`);
}


            



 