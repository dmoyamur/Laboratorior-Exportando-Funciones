console.log ("Elaborado por: Alberto Cortes Palacios, Juan Sebastian Nieto, Diana Yeimy Moya")

import { PI, IVA, DIAS_SEMANA, DESCUENTO } from "./constantes.js";
import { sumar, restar, multiplicar, areaCirculo1, calcularTotal, aplicarImpuestos, DescuentoTotal, aplicarDescuentoPorRol} from "./operaciones-matematicas.js";
import { ROLES } from "./usuariosConstantes.js";
import { crearUsuario } from "./usuarios.js";

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
let totalconImp = total+aplicarImpuestos(total,IVA);
console.log(`El total con impuestos es `,totalconImp);
let totalconDcto = DescuentoTotal(totalconImp,DESCUENTO);
console.log(`El total con impuestos y descuentos es `,totalconDcto);

console.log("\n Ejercicio 4")
let usuario1 = crearUsuario("Pedro", ROLES.ADMIN);
let usuario2 = crearUsuario("Carlos", ROLES.CLIENTE);
console.log(usuario1)
console.log(usuario2)

console.log("\n Ejercicio 5")
let subtotal1 = calcularTotal(25,4)
let totalapagar1=subtotal1+aplicarImpuestos(subtotal1,IVA)-aplicarDescuentoPorRol(subtotal1,usuario1.rol)
console.log(`El sub-total de la compra de ${usuario1.nombre} es ${subtotal1}`);
console.log(`El valor del impuesto es de: `, aplicarImpuestos(subtotal1,IVA));
console.log(`El valor del descuento es de: `, aplicarDescuentoPorRol(subtotal1,usuario1.rol))
console.log(`El total a pagar de ${usuario1.nombre}, es de ${totalapagar1}`)


let subtotal2 = calcularTotal(50,3)
let totalapagar2=subtotal1+aplicarImpuestos(subtotal2,IVA)-aplicarDescuentoPorRol(subtotal2,usuario2.rol)
console.log(`\nEl sub-total de la compra de ${usuario2.nombre} es ${subtotal2}`);
console.log(`El valor del impuesto es de: `, aplicarImpuestos(subtotal2,IVA));
console.log(`El valor del descuento es de: `, aplicarDescuentoPorRol(subtotal2,usuario2.rol))
console.log(`El total a pagar de ${usuario2.nombre}, es de ${totalapagar2}`)