//Vamos escrever um programa chamado readability que pega um texto e determina seu nível de leitura.
const texto = prompt ("Digite um Texto: ");

let quantLetras = 0;
let quantPalavras = 1;
let quantFrases = 0;

for (let i = 0; i <= texto.length; i++){

    if (texto[i] >= 'A' && texto[i] <= 'z'){
        quantLetras++;
    }

    if (texto[i] == ' '){
        quantPalavras++;
    }

    if (texto[i] == '!' || texto[i] == '?' || texto[i] == '.' || texto[i] == ','){
        quantFrases++;
    }

}

const mediaLetras = quantLetras / quantPalavras * 100;
const mediaFrases = quantFrases / quantPalavras * 100;

const indice = 0.0588 * mediaLetras - 0.296 * mediaFrases - 15.8;

if (indice < 1)
    {
        alert ("Ensino Fundamental");
    }
    else if (indice > 16)
    {
        alert ("Ensino Superior");
    }
    else
    {
        alert ("Ensino Médio");
    }


alert (`O índice é: ${Math.round(indice)}. A quantidade de letras é: ${quantLetras},
A quantidade de palavras é: ${quantPalavras} 
e a quantidade de frases é: ${quantFrases}`);

