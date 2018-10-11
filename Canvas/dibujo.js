var d = document.getElementById("dibujito"); //getElementById metodo del document trae elemento
var lienzo = d.getContext("2d"); //getContext metodo canvas

dibujarLinea("pink", 10, 300, 220, 10)
dibujarLinea("yellow", 300, 10, 10, 220)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) //se declara nueva funcion
{
    lienzo.beginPath(); //Metodo iniciar trazo
    lienzo.strokeStyle = color; //Atributo para asignar color
    lienzo.moveTo(xinicial, yinicial); //Metodo para mover el lapiz donde inicia la linea en X y Y 
    lienzo.lineTo(xfinal, yfinal); //Funcion trazar linea hasta X y Y
    lienzo.stroke(); //Dibujar estilo 
    lienzo.closePath(); //Metodo para finalizar trazado
}