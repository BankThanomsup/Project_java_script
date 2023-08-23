function SayHello(userName,userLastname)
{
return "Hello " + userName + " "+ userLastname
}
function  getAge()
{
return 28
}
let userInput = prompt("input your name :")
let sur_userInput = prompt("input your surname:")
alert(SayHello(userInput,sur_userInput))
