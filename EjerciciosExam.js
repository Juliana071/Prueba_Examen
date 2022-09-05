//const cadena = "hola me llamo Juliana";
//console.log(cadena.charAt(1));

//La funcion prompt guarda lo que ingresa el usuario en Strings

const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

//const name = prompt('Ingresa tu nombre: ');
//const apP = prompt('Ingresa tu apellido paterno: ');
//const apM = prompt('Ingresa tu apellido materno: ');
//console.log('Tus iniciales son: '+name.charAt(0)+apP.charAt(0)+apM.charAt(0));

n = prompt('Ingresa el numero: ');
//Factorial de un numero:
var fac = 1; 
for (let i = 1; i <= n; i++) 
{
	fac = fac * i; 
}
console.log('El factorial de '+n+' es: '+fac);

//Maximo y minimo de un arreglo:
//let arreglo = [2,20,6,13,10,21]

//console.log(Math.max(...arreglo));
//console.log(Math.min(...arreglo));

