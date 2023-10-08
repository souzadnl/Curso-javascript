// criar elemento

var element = document.createElement('div')

element.classList = "div_criada"

console.log(element)

var container = document.querySelector('#container')
container.appendChild(element)

// inserbefore - insere antes

var element2 = document.createElement('div')

element2.classList = "div_before"
var element3 = document.querySelector('#container .div_criada')
console.log(element3)

container.insertBefore(element2, element3)