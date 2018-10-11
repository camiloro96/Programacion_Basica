var d = document.getElementById("dibujito"); //getElementById metodo del document trae elemento
var lienzo = d.getContext("2d"); //getContext metodo canvas

lienzo.beginPath(); //Metodo iniciar trazo
lienzo.strokeStyle = "blue"; //Atributo para asignar color
lienzo.moveTo(50, 10); //Metodo para mover el lapiz donde inicia la linea en X y Y 
lienzo.lineTo(250, 2); //Funcion trazar linea hasta X y Y
lienzo.stroke(); //Dibujar estilo 
lienzo.closePath(); //Metodo para finalizar trazado