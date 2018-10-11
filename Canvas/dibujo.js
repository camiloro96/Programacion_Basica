var d = document.getElementById("dibujito"); //getElementById metodo del document trae elemento
var lienzo = d.getContext("2d"); //getContext metodo canvas
var lineas = 30;
var l = 0; 
var yi, xf;

// Tamaño canvas 300px * 300px
//                                                    0,0 __ X 
//                                                          |
    //xi    yi      l       //xInicial  yInicial     0,10 __|
    //0     0       0       yi= 10*l                        |
    //0     10      1                                0,20 __|
    //0     30      2                                       |
    //0     40      3                                0,30 __|   
//                                                          |
    //xf    yf      l       //xFinal    yFinal              |  
    //10    300     0       xf= 10*(l+1)                    |  
    //20    300     1                                       |____________________ 300,300
    //30    300     2                                           |   |   |   |    Y
    //40    300     3                                          10, 20, 30, 40,                                     
//                                                             300 300 300 300                                                           

while(l < lineas)
{
    yi = 10 * l; //10px cada linea
    xf = 10 * (l+1);
    dibujarLinea("#aaf", 0, yi, xf, 300);
    console.log("Linea " + l);
    l = l + 1;
}

dibujarLinea("#AFA", 1, 1, 1, 300);
dibujarLinea("#AFA", 1, 299, 299, 299);

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) //se declara nueva funcion
{
    lienzo.beginPath(); //Metodo iniciar trazo
    lienzo.strokeStyle = color; //Atributo para asignar color
    lienzo.moveTo(xinicial, yinicial); //Metodo para mover el lapiz donde inicia la linea en X y Y 
    lienzo.lineTo(xfinal, yfinal); //Funcion trazar linea hasta X y Y
    lienzo.stroke(); //Dibujar estilo 
    lienzo.closePath(); //Metodo para finalizar trazado
}