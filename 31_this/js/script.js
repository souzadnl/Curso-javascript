teste = 5;

console.log(this)

let pessoa = {
    nome: "Daniel",
    idade: 19,
    falar: function() {
        console.log("Olá, tudo bem?")
    },
    soma: function(a,b){
        return a + b;
    },
    dizer_nome: function() {
        console.log("O meu nome é " + this.nome)
    },
    aniversario: function() {
        console.log(this.idade +=1);
    },
    saudacao: function(){
        return 'Sr. ' + this.nome;
    }
};

console.log(pessoa.nome)

pessoa.falar()
pessoa.dizer_nome()
pessoa.aniversario()
console.log(pessoa.saudacao())

var soma = pessoa.soma(2,3)
console.log(soma)

