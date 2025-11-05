console.log ("Elaborado por: Alberto Cortes Palacios, Juan Sebastian Nieto, Diana Yeimy Moya")

import { PI, IVA, DIAS_SEMANA, DESCUENTO } from "./constantes.js";
import { sumar, restar, multiplicar, areaCirculo1, calcularTotal, aplicarImpuestos, DescuentoTotal} from "./operaciones-matematicas.js";

console.log(" EJERCICIO 1")
const areaCirculo = PI*5*5;
console.log(`El área del círculo es: ${areaCirculo}`);

const calculoiva = IVA*100;
const totaliva = calculoiva+100
console.log(`El precio con IVA es de: ${totaliva}`)

console.log(`El tercer día de la semana es: `,DIAS_SEMANA[2])

console.log("\n EJERCICIO 2")
const suma = console.log(`La suma de los números es: `,sumar(5,4));
const resta = console.log(`La resta de los números es: `,restar(5,4));
const multiplicacion = console.log(`La multiplicación de los números es: `,multiplicar(5,4));
const areaCirc = console.log(`El área del círculo es: `,areaCirculo1(8));

console.log("\n EJERCICIO 3")
let total = calcularTotal(100,3);
console.log(`El total es `,total);
let totalconImp = aplicarImpuestos(total,IVA);
console.log(`El total con impuestos es `,totalconImp);
let totalconDcto = DescuentoTotal(totalconImp,DESCUENTO);
console.log(`El total con impuestos y descuentos es `,totalconDcto);

