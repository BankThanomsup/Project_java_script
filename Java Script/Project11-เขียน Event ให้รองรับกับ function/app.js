function toCelsius(fahrenheit)
{
    
    let value = (fahrenheit-32)*5/9
    return value.toFixed(2)+"C";
}
function display(getElementById,value)
{
    document.getElementById(getElementById).innerHTML= "<b>"+value+"</b>"
}
function toFahrenheit(Celsius)
{
    let value =(Celsius*9)/5+32
    return value.toFixed(2)+"°F";
}

function toCelsiusProgram(value)
{
    alert(toCelsius(value))
}

function toFahrenheitProgram(value)
{
    alert(toFahrenheit(value))
}
