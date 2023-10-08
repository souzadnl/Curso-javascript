var novo_paragrafo = document.createElement('p')
console.log(novo_paragrafo)

var texto = document.createTextNode("Vai ficar dentro do paragrafo")
novo_paragrafo.appendChild(texto)

var body = document.querySelector('body')

console.log(body)

body.appendChild(novo_paragrafo)

var container = document.getElementById('container')
console.log(container)

var element = document.createElement('span')
element.appendChild(document.createTextNode("texto de span"))

console.log(element)

container.appendChild(element)