//programa que primeiro pergunta ao usuário quanto dinheiro é devido e depois imprime o número mínimo de moedas com as quais essa mudança pode ser feita.


//Caixa com troco em moedas de 25, 10, 5 e 1 em Java Script

let quantMoeda1 = 0;
let quantMoeda5 = 0;
let quantMoeda10 = 0;
let quantMoeda25 = 0;
let quantMoedaTroco = 0;
let valorMoeda1 = 0;
let valorMoeda5 = 0;
let valorMoeda10 = 0;
let valorMoeda25 = 0;
let trocoReduzido;
let valorTotal = prompt ("Digite valor Total");
let valorPago;

do{
    valorPago = prompt ("Digite valor pago")  
}
while (valorPago < 1);

let valorTroco = (parseFloat(valorPago)) - (parseFloat(valorTotal));


    for (valorMoeda25 = valorTroco; valorMoeda25 >= 0.25; valorMoeda25 = valorMoeda25 - 0.25){
    quantMoeda25++;
    }
    trocoReduzido = valorMoeda25;

    for (valorMoeda10 = trocoReduzido; valorMoeda10 >= 0.10; valorMoeda10 = valorMoeda10 - 0.10){
        quantMoeda10++;
    }
    trocoReduzido = valorMoeda10;

    for (valorMoeda5 = trocoReduzido; valorMoeda5 >= 0.05; valorMoeda5 = valorMoeda5 - 0.05){
        quantMoeda5++;
    }
    trocoReduzido = valorMoeda5;

    for (valorMoeda1 = trocoReduzido; valorMoeda1 >= 0.01; valorMoeda1 = valorMoeda1 - 0.01){
        quantMoeda1++;
    }
    trocoReduzido = valorMoeda1;

quantMoedaTroco = quantMoeda1 + quantMoeda5 + quantMoeda10 + quantMoeda25;
 
 alert (`O troco total é: R$  ${(valorTroco.toFixed(2))}
O total de moedas dadas no troco são: ${quantMoedaTroco}, 
distribuidas em ${quantMoeda25} moedas de 25 centavos,   ${quantMoeda10} em moedas de 10 centavos,   ${quantMoeda5} em moedas de 5 centavos e 
${quantMoeda1} em moedas de 1 centavo.`); 
 
//-----------------------------------------------------------------------------------------
//O programa em C

// include <cs50.h>
// #include <stdio.h>

// int main(void)
// {
//     float qmoeda1 = 0;
//     float qmoeda5 = 0;
//     float qmoeda10 = 0;
//     float qmoeda25 = 0;
//     float vmoeda1 = 0;
//     float vmoeda5 = 0;
//     float vmoeda10 = 0;
//     float vmoeda25 = 0;
//     float quantmoedatroco = 0;
//     float trocoreduzido;
//     float valorpago;
//     float valortroco;
    
//    float valortotal = get_float("Digite o valor total: ");
   
//    do{
//     valorpago = get_float ("Digite valor pago: ");  
//      }
//    while (valorpago < 1);
   
//    valortroco = valorpago - valortotal;
   
//     for (vmoeda25 = valortroco; vmoeda25 >= 0.25; vmoeda25 = vmoeda25 - 0.25){
//         qmoeda25++;
//         }
//         trocoreduzido = vmoeda25;
    
//     for (vmoeda10 = trocoreduzido; vmoeda10 >= 0.10; vmoeda10 = vmoeda10 - 0.10){
//         qmoeda10++;
//     }
//     trocoreduzido = vmoeda10;

//     for (vmoeda5 = trocoreduzido; vmoeda5 >= 0.05; vmoeda5 = vmoeda5 - 0.05){
//         qmoeda5++;
//     }
//     trocoreduzido = vmoeda5;

//     for (vmoeda1 = trocoreduzido; vmoeda1 >= 0.01; vmoeda1 = vmoeda1 - 0.01){
//         qmoeda1++;
//     }
//     trocoreduzido = vmoeda1;
    
//     quantmoedatroco = qmoeda1 + qmoeda5 + qmoeda10 + qmoeda25;
    
//     printf("%f\n", qmoeda25);
//     printf("%f\n", qmoeda10);
//     printf("%f\n", qmoeda5);
//     printf("%f\n", qmoeda1);
// }