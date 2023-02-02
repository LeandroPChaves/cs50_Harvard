let popInicio;

    do{
        popInicio = prompt("Digite a população atual");
    }
    while (popInicio <= 9);


let popFinal;

    do{
        popFinal= prompt("Digite a população Final");
    }
    while (popFinal < popInicio);


let ano = 0;
let popGanho;
let popPerda;
let popAtual;

 while (popInicio < popFinal){

    popGanho = popInicio / 3;
    popPerda = popInicio / 4;
    popAtual = (Number(popInicio)) + ((Number(popGanho)) - (Number(popPerda)));
    popInicio = popAtual;
    ano++;
}

alert(`Para chegar na quantidade da população final informada é necessário ${ano} anos.`);