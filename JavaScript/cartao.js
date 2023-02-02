let card;

do{
    card = prompt("Digite o número do cartão: ")
}

while (card < 1); //Número do cartão deve ser maior que 0

let card1;
let card2;
let card3;
let card4;
let card5;
let card6;
let card7;
let card8;
 


    card1 = ((card % 100)/10)*2;
    card2 = ((card % 10000)/1000*2);
    card3 = ((card % 1000000)/100000*2);
    card4 = ((card % 100000000)/10000000*2);
    card5 = ((card % 10000000000)/1000000000*2);
    card6 = ((card % 1000000000000)/100000000000*2);
    card7 = ((card % 100000000000000)/10000000000000*2);
    card8 = ((card % 10000000000000000)/1000000000000000*2);
    
    card1 = (card1 % 100/10) + (card1 % 10);
    card2 = (card2 % 100/10) + (card2 % 10);
    card3 = (card3 % 100/10) + (card3 % 10);
    card4 = (card4 % 100/10) + (card4 % 10);
    card5 = (card5 % 100/10) + (card5 % 10);
    card6 = (card6 % 100/10) + (card6 % 10);
    card7 = (card7 % 100/10) + (card7 % 10);
    card8 = (card8 % 100/10) + (card8 % 10);

let sum1 = (card1 + card2 + card3 + card4 + card5 + card6+ card7 + card8);
    
//Agora precisamos encontrar os dígitos que não foram multiplicados por 2 a partir do último dígito do número do cartão que foi digitado
    
let card9;
let card10;
let card11;
let card12;
let card13;
let card14;
let card15;
let card16;

card9 = (card % 10);
card10 = ((card % 1000)/100);
card11 = ((card % 100000)/10000);
card12 = ((card % 10000000)/1000000);
card13 = ((card % 1000000000)/100000000);
card14 = ((card % 100000000000)/10000000000);
card15 = ((card % 10000000000000)/1000000000000);
card16 = ((card % 1000000000000000)/100000000000000);

let sum2 = (card9 + card10 + card11 + card12 + card13 + card14 + card15 + card16);
let sum3 = sum1 + sum2;
    
let posicao = 0;
let visa = card;
let amex = card;
let master = card;

if ((sum3 % 10) !=0)
    {
        document.write( "INVALIDO");
        return 0;
    }
    
    //Agora precisamos diferenciar entre visa, master e amex
    
    while (card > 0)
    {
        card = (card/10);
        posicao++;
    }
    
    //Identificando se o cartão é Visa
    while (visa >= 10)
    {
        visa /= 10;
    } 
    if (visa == 4 && (posicao == 13 || posicao == 16))
    {
        document.write("VISA");
        return 0;
    }

    //Identificando se o cartão é AMEX
    while (amex >= 10000000000000)
    {
        amex /= 10000000000000;
    } 
    if (posicao == 15 && (amex == 34 || amex == 37))
    {
        document.write("AMEX");
        return 0;
    }
    
    //Identificando se o cartão é Master
    while (master >= 100000000000000)
    {
        master /= 100000000000000;
    } 
    if (posicao == 16 && (master == 51 || master == 52 || master == 53 || master == 54 || master == 55 || master == 58))
    {
        document.write("MASTERCARD");
        return 0;
    }
    else
    document.write("INVALIDO");
    return 0;
    
