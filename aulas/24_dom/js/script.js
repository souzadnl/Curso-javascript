var lista = ['uva', 'laranja', 'banana', 'alface']

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul')

console.log(listaNoBody[0]);

for(var i = 0; i < lista.length; i++) {
   console.log(lista[i]);
}
