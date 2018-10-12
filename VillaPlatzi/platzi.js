var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var fondo =
{
    url: "tile.png",
    cargaOK: false
};
var vaca = 
{
    url: "vaca.png",
    cargaOK: false
};
var cerdo = 
{
    url: "cerdo.png",
    cargaOK: false
};

var cantidad = aleatorio(0, 25);
var xinicial = 0;
var yinicial = 0;

fondo.imagen = new Image(); //clase Image
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdos);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdos()
{
    cerdo.cargaOK = true;
    dibujar();
}

function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }

    if(vaca.cargaOK)
    {
        console.log(cantidad);
        for(var v=0; v < cantidad; v++)
        {
            var x = aleatorio(0,7);
            var y = aleatorio(0,7);
            var x = x * 60;
            var y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        papel.drawImage(cerdo.imagen, xinicial, yinicial);
    }
}

function aleatorio (min, maxi)
{
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
    return resultado;
}

var teclas = 
{
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

console.log(teclas)

document.addEventListener("keydown", movCerdo);
var x = 100;
var y = 100;


function movCerdo(evento)        
{          
    var movimiento = evento.keyCode;

   switch(movimiento)
    {
        case teclas.UP:
            xinicial = xinicial;
            yinicial = yinicial - 10;
            dibujar();
            console.log("arriba");
        break;

        case teclas.DOWN:
            xinicial = xinicial;
            yinicial = yinicial + 10;
            dibujar();
            console.log("abajo");
        break;

        case teclas.LEFT:
            xinicial = xinicial - 10;
            yinicial = yinicial;
            dibujar();
            console.log("izquierda");
        break;

        case teclas.RIGHT:
            xinicial = xinicial + 10;
            yinicial = yinicial;
            dibujar();           
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