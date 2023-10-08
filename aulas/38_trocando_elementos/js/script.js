// criar elemento

var element = document.createElement('h3')

element.classList = "testando_classe"

var texto = document.createTextNode("Este é o nosso texto")

element.appendChild(texto)

console.log(element)

// selecionar o elemento que quero trocar

var title = document.querySelector("#title")

console.log(title)

// selecionar o pai do elemento

var pai = title.parentNode

// trocar os elementos

pai.replaceChild(element, title)