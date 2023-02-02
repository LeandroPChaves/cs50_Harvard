const num = prompt("Digite um número: ");
let numEsquerdo;
let numDireito;

numEsquerdo = num - 1;
numDireito = Number(num) + 1;

document.write (`O número que vem antes do ${num} é: ${numEsquerdo} e o número que vem imediatamente depois do ${num} é: ${numDireito}`);

