var numeros = 100;

for(var i = 1; i <= 100; i++) //numero que vaya desde 1 a 100, el ciclo se mueve mientras la i sea igual o menor a  100
{
    if(esDivisible(i,3))
    {
        document.write("Fizz");
    }
    if(esDivisible(i,5))
    {
        document.write("Buzz");
    }
    if(!esDivisible(i,3) && !esDivisible(i,5))
    {
        document.write(i);
    }
    document.write("<br>");
}

function esDivisible(num, divisor)
{
    if(num % divisor == 0)
    {
        return true;
    }
    else
    {
        return false;
    }
}