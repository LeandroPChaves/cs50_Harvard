let jogador1 = prompt ("Jogador1, Digite uma palavra: ");
let jogador2 = prompt ("Jogador2, Digite uma palavra: ");
let totalJogador1 = 0;
let totalJogador2 = 0;

for (let i = 0; i < jogador1.length; i++){

    if((jogador1.charCodeAt(i) >= 65  && jogador1.charCodeAt(i) <= 90) || (jogador1.charCodeAt(i) >= 97 && jogador1.charCodeAt(i) <= 122)){

    totalJogador1 = totalJogador1 + jogador1.charCodeAt(i);

    }
} 

for (let i = 0; i < jogador2.length; i++){

    if((jogador2.charCodeAt(i) >= 65  && jogador2.charCodeAt(i) <= 90) || (jogador2.charCodeAt(i) >= 97 && jogador2.charCodeAt(i) <= 122)){

    totalJogador2 = totalJogador2 + jogador2.charCodeAt(i);

    }
    
}

if (totalJogador1 > totalJogador2){
    alert ("Jogador 1 venceu");
    } else if (totalJogador2 > totalJogador1) {
        alert ("Jogador 2 venceu");
       } else {
        alert ("empatou");
}


       //const pontos = [1,3,3,2,1,4,2,4,1,8,5,1,3,1,1,3,10,1,1,1,1,4,4,8,4,10]; 
// const scoreMap = {
//     A: 1,
//     E: 1,
//     I: 1,
//     O: 1,
//     U: 1,
//     L: 1,
//     N: 1,
//     R: 1,
//     S: 1,
//     T: 1,
//     D: 2,
//     G: 2,
//     B: 3,
//     C: 3,
//     M: 3,
//     P: 3,
//     F: 4,
//     H: 4,
//     V: 4,
//     W: 4,
//     Y: 4,
//     K: 5,
//     J: 8,
//     X: 8,
//     Q: 10,
//     Z: 10,
// };