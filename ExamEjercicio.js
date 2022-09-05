const PromptSync = require("prompt-sync");
const prompt = require("prompt-sync")();

suma = 0;
promedio = 0;
contador = 0;
var continuar = new Boolean(true);

while(continuar)
{
    n = prompt ('Ingrese la cantidad de numeros a promediar: ');

    arreglo = [n]

    for(let i = 0; i < n; i++)
    {
        arreglo[i] = prompt(`Ingrese el numero ${i+1}: `);

        suma = suma+ parseFloat(arreglo[i]);
    }
    promedio = suma/n;

    for(let j = 0; j < n; j++)
    {
        if(arreglo[j] > promedio)
        {
            contador ++;
        }
    }
    console.log('Los numeros que son mayores al promedio son: '+contador);

    opc = prompt('Desea repetir el programa: 1:Si 2:No ');
    if (opc == 1)
    {
        console.log('Repitiendo programa...');
    }
    else
    {
        console.log('Programa finalizado...');
        continuar = false;
    }
}

