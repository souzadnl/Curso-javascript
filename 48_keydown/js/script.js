document.addEventListener("keydown", function(event){

    if (event.key == "Enter"){
        console.log("Você clicou enter")
    }
})

// keyup

document.addEventListener("keyup", function(event){

    if (event.key == "Shift"){
        console.log("Você soltou o shift")
    }
})