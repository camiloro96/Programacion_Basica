var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito"); //getElementById metodo del document trae elemento
var ancho = d.width; //width del canvas
var lienzo = d.getContext("2d"); //getContext metodo canvas

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) //se declara nueva funcion
{
    lienzo.beginPath(); //Metodo iniciar trazo
    lienzo.strokeStyle = color; //Atributo para asignar color
    lienzo.moveTo(xinicial, yinicial); //Metodo para mover el lapiz donde inicia la linea en X y Y 
    lienzo.lineTo(xfinal, yfinal); //Funcion trazar linea hasta X y Y
    lienzo.stroke(); //Dibujar estilo 
    lienzo.closePath(); //Metodo para finalizar trazado
}

function dibujoPorClick()
{
    var xx = parseInt(texto.value);
    var lineas = xx;
    var l = 0; 
    var yi, xf;
    var colorcito = "#FAA";
    var espacio = ancho / lineas 

    for(l = 0; l < lineas; l++) //varibale l empieza en 0 itera, mientras variable l sea menor que lineas (30), sumale 1
    {
        yi = espacio * l; //10px cada linea
        xf = espacio * (l+1);
        dibujarLinea(colorcito, 0, yi, xf, 300);
        console.log("Linea " + l);
        //l++ = l+1
    }

    dibujarLinea(colorcito, 1, 1, 1, 299);
    dibujarLinea(colorcito, 1, 299, 299, 299);


}


//                                                             10, 20, 30, 40,
// Tamaño canvas 300px * 300px                                  0   0   0   0
//                                                   0,0  __Y___|___|___|___|________    300,0
//                                                          |                        |
    //xi    yi      l       //xInicial  yInicial     0,10 __|                        |__ 10,300
    //0     0       0       yi= 10*l                        |                        |  
    //0     10      1                                0,20 __|                        |__ 20,300  
    //0     20      2                                       |                        |
    //0     30      3                                0,30 __|                        |__ 30,300
//                                                          |                        |  
    //xf    yf      l       //xFinal    yFinal              |                        |  
    //10    300     0       xf= 10*(l+1)                    |                        |
    //20    300     1                                       |________________________|  300,300
    //30    300     2                                       |   |   |   |   |         X
    //40    300     3                                       0,  10, 20, 30, 40,                                     
//                                                          300 300 300 300 300                                                           
