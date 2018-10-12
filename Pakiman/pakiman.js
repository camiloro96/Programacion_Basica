class Pakiman

{
    constructor(n, v, a) //funciona igual que Function
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque = a;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar() // no se pone "function." porque se entiende como funcion de la clase
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen); //agregar hijos
        document.write("<p>");
        document.write("<strong>" + this.nombre + "</strong><br>")
        document.write("Vida: " + this.vida + "</strong><br>")
        document.write("Ataque: " + this.ataque + "</strong><br>")
        document.write("</p><hr>");
    }
}