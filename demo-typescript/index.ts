const vtstVal: number = 1000;
const vtstPrc: number = 0.10; // Utiliza el punto en lugar de la coma para los decimales

// function fncCalculoDescuento(vtstTot: number = vtstVal * vtstPrc): number {
//     return vtstTot;
// }

function fncCalculoDescuento(ValIni:number, ValPrc:number): number {
    let vtstTot: number = vtstVal * vtstPrc
    return vtstTot;
}
console.log(`El valor final es de: ${fncCalculoDescuento(100,35)}`);

