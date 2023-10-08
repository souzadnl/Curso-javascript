var btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    console.log("clicou")
})

var title = document.querySelector("#title")

title.addEventListener("click", function(){
    console.log("teste")
})

// double click

var subtitle = document.querySelector(".subtitle")

subtitle.addEventListener("dblclick", function() {
    console.log("click duplo!")
})