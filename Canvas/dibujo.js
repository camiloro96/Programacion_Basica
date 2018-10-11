var d = document.getElementById("dibujito"); //getElementById metodo para obtener id en document
var lienzo = d.getContext("2d");

lienzo.beginPath(); //Iniciar trazo en JS
lienzo.strokeStyle = "red"; //Atributo para asignar color
lienzo.moveTo(100, 100); //Metodo para mover el lapiz donde inicia la linea en X y Y 
lienzo.lineTo(200, 200); //Funcion trazar linea hasta X y Y
lienzo.stroke(); //Dibujar estilo 
lienzo.closePath(); //Metodo para finalizar trazado