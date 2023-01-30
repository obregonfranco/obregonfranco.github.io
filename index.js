document.getElementById('boton').onclick = function() {
    console.log("Capturamos el evento click")
    document.getElementById("prueba").innerHTML = "Estamos probando nuestro primer evento en JS"
    document.body.style.backgroundColor = 'red'
}


/**

document.addEventListener('click', function(){
    console.log("Hola mundo desde Event Listener")
    document.getElementById("prueba").innerHTML = "Estamos probando nuestro primer evento en JS"
})


document.getElementById('boton').addEventListener('click', function(){
    console.log("Hola mundo desde Event Listener")
    document.getElementById("prueba").innerHTML = "Estamos probando nuestro primer evento en JS"
})


document.getElementById('boton').onclick = function() {
    document.body.style.backgroundColor = 'red'
}


document.getElementById('boton').onclick = function() {
    document.getElementById('prueba').style.display = 'none'
}

*/
