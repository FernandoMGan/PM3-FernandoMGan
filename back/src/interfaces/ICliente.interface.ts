// File icliente.interface.ts

interface IClientes {
    id: number,
    razonFantasia: string,
    razonSocial: string,
    cuit: string,
    observacion: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

export default { IClientes };