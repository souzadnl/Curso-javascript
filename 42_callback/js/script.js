function exibir(num){
    console.log("resultado "+num)
}

function soma(a,b,callback) {
    var op = a + b
    callback(op)
}

function multiplicacao(a,b) {
    var op = a * b
    console.log(op)
}

soma(2,2,exibir)

multiplicacao(2,4)