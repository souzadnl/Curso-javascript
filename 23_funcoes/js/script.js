function primeira_funcao() {

   console.log("Hello World!");
}

var nome = "Daniel";

primeira_funcao();

function dizer_nome(nome){
   console.log("Olá " + nome)
}

dizer_nome(nome);

var nome_banco_de_dados = "João";

function soma(a, b) {
   var soma = a + b;
   return soma;
}

var soma_um = soma(2, 5);

console.log(soma_um)