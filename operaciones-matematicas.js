import {PI, IVA, DESCUENTO} from "./constantes.js"

export function sumar(a,b){
    return (a+b);
};

export function restar(a,b){
    return (a-b);
};

export function multiplicar(a,b){
    return (a*b);
};

export function areaCirculo1(radio){
    return(PI*radio*radio);
};

export function calcularTotal(precio,cantidad){
    return(precio*cantidad);
};

export function aplicarImpuestos(total,IVA){
    return(total+(total*IVA));
};

export function DescuentoTotal(total,DESCUENTO){
    return(total-(total*DESCUENTO));
};
