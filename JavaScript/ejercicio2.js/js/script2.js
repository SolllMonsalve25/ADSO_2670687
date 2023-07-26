/*Ejercicio 2 - Dado el sueldo de un empleado imprimir 
en una alerta el nuevo sueldo del empledo si tuvo
un aumento del 10%*/

/*let sueldo = prompt("ingrese el valor del sueldo")
let  psueldo= 10/100;
let nsueldo = sueldo + parseInt(sueldo+psueldo);
alert("el nuevo sueldo con el aumento es: "+nsueldo);*/

/* Ejercicio 3 - Un vendedor que tiene su sueldo base, 
recibe una comision del 30% del total de las ventas del mes, 
el quiere saber cuanto ganara en un mes que tuvo tres ventas*/

const sueldo=1300000
const ventas=prompt("valor total de ventas");
const pventas=30/100;
const nsueldo=parseInt(sueldo) + parseInt(ventas*pventas)
alert("el nuevo sueldo con el aumento del 30% de las ventas es: "+sueldo)