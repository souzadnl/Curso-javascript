// clearTimeout

var x = 0;

var time = setInterval (function(){
    console.log("testando")
},500)

setTimeout(function(){
    console.log("para de rodar")
    clearInterval(time)
}, 2500)