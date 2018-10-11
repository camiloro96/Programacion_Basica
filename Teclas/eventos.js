var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas)

document.addEventListener("keydown", dibujarTeclado);
var cuadrito = document.getElementById("area_de_dibujo");
var papel =  cuadrito.getContext("2d");
var x = 100;
var y = 100;

dibujarLinea("red", x-1, y-1, x+1, y+1, papel);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, lienzo) //se declara nueva funcion
{
    lienzo.beginPath(); //Metodo iniciar trazo
    lienzo.strokeStyle = color; //Atributo para asignar color
    lienzo.lineWidth = 3; //Atributo grosor linea
    lienzo.moveTo(xinicial, yinicial); //Metodo para mover el lapiz donde inicia la linea en X y Y 
    lienzo.lineTo(xfinal, yfinal); //Funcion trazar linea hasta X y Y
    lienzo.stroke(); //Dibujar estilo 
    lienzo.closePath(); //Metodo para finalizar trazado
}

function dibujarTeclado(evento)        
{         
    var colorcito = "green";   
    var movimiento = 1;

    switch(evento.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito, x, y, x, y - movimiento, papel);
            y = y - movimiento;
            console.log("arriba");
        break;

        case teclas.DOWN:
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel);
            y = y + movimiento;
            console.log("abajo");
        break;

        case teclas.LEFT:
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel);
            x = x - movimiento;
            console.log("izquierda");
        break;

        case teclas.RIGHT:
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel);
            x = x + movimiento;
            console.log("derecha");
        break;
    }
}                                               

// |left 37 - up 38 - right 39 - down 40|
//               keyCode 
//                 38                                      -Y
//                  ↑                                       ↑
//            37 ←  ↓  → 39                           -X ←  ↓  → +X
//                 40                                      +Y