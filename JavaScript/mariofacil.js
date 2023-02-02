//Fazer uma pirâmide estilo jogo do Mário da direita para a esquerda.

let n;
let j;

do
    {
        n  = prompt("Digite a quantidade da pirâmide")
    }
    while (n < 1);


for(let i = 1; i <= n; i++) {
        
    for (j = n - i; j >= 0; j--){
        document.write(" .");
    }
    
    for(j = 1; j <= i; j++){
        document.write("#");  
    }

    document.write("<br>"); 

 } 


//-------------------------------------------------------------

// O mesmo programa no C

// #include <cs50.h>
// #include <stdio.h>

// int main(void)
// {
//     int i, j, n;
//     do
//     {
//         n = get_int("Width: ");
//     }
//     while (n < 1);
    
//     for(i = 1; i <= n; i++) {
        
//         for (j = n - i; j >= 1; j--){
//             printf(" ");
//         }
        
//         for(j = 1;j <= i; j++){
//           printf ("#");  
//         }
//           printf("\n"); 
        
//      }  
    
//  }