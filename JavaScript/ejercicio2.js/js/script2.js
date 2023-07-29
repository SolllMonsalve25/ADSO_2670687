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

/*const sueldo=1300000
const ventas=prompt("valor total de ventas");
const pventas=30/100;
const nsueldo=parseInt(sueldo) + parseInt(ventas*pventas)
alert("el nuevo sueldo con el aumento del 30% de las ventas es: "+sueldo)*/



/*ejercicio 4/1 - Una tienda ofrece un 25% de descuento 
por cada compra. Un cliente desea saber
cuánto deberá pagar por su compra.*/

let vcompra = prompt(" indique el valor de su compra");
let pdesc = 25/100;
let vtcompra = parseInt(vcompra) - parseInt(vcompra*pdesc);
alert("el valor total de la compra con descuento es: "+vtcompra)



/*ejercicio 5/2 - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/

let capIni = prompt(" el valor que desea invertir es: ");
let tInt = 2/100; 
let ganancia = parseInt(capIni*tInt); 
alert("La ganancia después de un mes es: " + ganancia); - Suponga que un individuo desea invertir su capital en un banco y desea saber
cuánto dinero ganara después de un mes si el banco paga a razón de 2%
mensual.*/




/*ejercicio 6/3 - Un alumno desea saber cuál será su calificación final en la materia de
Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
a. 55% del promedio de sus tres calificaciones parciales.
b. 30% de la calificación del examen final.
c. 15% de la calificación de un trabajo final*/


let califParcial1 = prompt(" calificacion parcial 1: "); 
let califParcial2 = prompt(" calificacion parcial 2: "); 
let califParcial3 = prompt(" calificacion parcial 3: "); 
let califExamenFinal = prompt(" calificacion examen final: "); 
let califTrabajoFinal = prompt(" calificacion trabajo final: "); 

let porcentajeParciales = 55/100; 
let porcentajeExamenFinal = 30/100; 
let porcentajeTrabajoFinal = 15/100; 
      
let promedioParciales = parseInt(califParcial1 + califParcial2 + califParcial3);
let calificacionFinal = parseInt(promedioParciales * porcentajeParciales) + parseInt(califExamenFinal * porcentajeExamenFinal) + parseInt(califTrabajoFinal * porcentajeTrabajoFinal);
      
alert("La calificación final es: "+ calificacionFinal)

/* Ejercicio 7/4 - El dueño de una tienda compra un artículo a un precio determinado. Obtener el
precio en que lo debe vender para obtener una ganancia del 30%.*/


let precioCompra = 100;
let gananciaPorcentaje = 30/100;
let precioVenta = precioCompra + parseInt(precioCompra * gananciaPorcentaje);
alert("El precio de venta necesario es: " + precioVenta);


/* Ejercicio 8/5 - Un taxi cobra por una carrera 15 mil pesos por kilómetro recorrido y 2 mil por
minuto. Determine el monto a pagar por una carrera.*/

let distancia = prompt(" cuantos kilometros recorrio el taxi");
let tiempo= prompt(" en cuanto tiempo recorrio la carrera");
let tPK = 15000;
let tPM = 2000;
let MAP = parseInt(distancia * tPK) + parseInt(tiempo * tPM);
alert("El monto a pagar por la carrera es: " + MAP);



/*Ejercicio 9/6 - Realizara un programa en el cual se van a leer tres números y determinar el
cuadrado de cada uno de ellos.*/

let numero1 = prompt(" indique el numero");
let numero2 = prompt(" indique el numero"); 
let numero3 = prompt(" indique el numero");

let cuadrado1 = parseInt(numero1 * numero1); 
let cuadrado2 = parseInt(numero2 * numero2);
let cuadrado3 = parseInt(numero3 * numero3);
  
alert("El cuadrado del primer numero es el: "+ cuadrado1 +
      ", El cuadrado del segundo numero es el: " + cuadrado2 + " y el cuadrado del tercer numero es el: 
      " + cuadrado3);


/*Ejercicio 10/7 - En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. El
presupuesto anual del hospital se reparte conforme a la sig. tabla:
Área / Porcentaje del presupuesto
Ginecología : 40%
Traumatología : 30%
Pediatría : 30%
Obtener la cantidad de dinero que recibirá cada área, para cualquier monto
presupuestal.*/

let MonPre = prompt(" indique el valor del monto presupuestal: ")

let Ginec = 40/100;
let trau = 30/100;
let pedi= 30/100;

let MFGi = parseInt(MonPre * Ginec);
let MFTr = parseInt(MonPre * trau);
let MFPe = parseInt(MonPre * pedi);

alert(" El dinero recibido por el area de gineconologia es: " + MFGi + ", el dinero recibido por el area de traumologia es: " + MFTr + " y el dinero recibido por el area de pediatria es: " + MFPe )
