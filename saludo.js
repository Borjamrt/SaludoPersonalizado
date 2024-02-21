function saludar(){
var nombre = document.getElementById("nombre").value.trim();
var apellido = document.getElementById("apellido").value.trim();
var mensajeSaludo = document.getElementById("mensajeSaludo");
var mensaje = "hola" + nombre + apellido
mensajeSaludo.innerText = mensaje;

}