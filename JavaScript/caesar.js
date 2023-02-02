let textoSimples = prompt ("Digite o texto");
let chave = prompt ("Quantos números deseja pular: ")
let textoCodigoAsc = [];
let textoCifrado = [];

for (let i = 0; i < textoSimples.length; i++){
   

   if((textoSimples.charCodeAt(i) >= 65  && textoSimples.charCodeAt(i) <= 90) || (textoSimples.charCodeAt(i) >= 97 && textoSimples.charCodeAt(i) <= 122) ){

   textoCodigoAsc.push(textoSimples.charCodeAt(i) + Number(chave));
   textoCifrado.push(String.fromCharCode(textoCodigoAsc[i]));

   }

   else {

      textoCodigoAsc.push(textoSimples.charCodeAt(i));
      textoCifrado.push(String.fromCharCode(textoCodigoAsc[i]));

   }
}

alert (textoCifrado.join(" ")); 

 

 