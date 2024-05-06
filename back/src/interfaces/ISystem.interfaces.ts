//  File isystem.interfaces.ts

// Definicion de interfaces
// Estados de informacion
interface IRegistrosEstados  {
    id: number,
    estado: string,
    observacion: string
}

interface IRegistrosCRUD {
    regC: string,
    regR: string,
    regU: string,
    regD: string
}

interface IRoles {
    id: number,
    role: string,
    level: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface IEstructuraDatos{
    RegistrosEstado: IRegistrosEstados , 
    RegistrosCRUD: IRegistrosCRUD, 
    Clientes: IClientes, 
    Proveedores: IProveedores, 
    Usuarios: IUsuarios, 
    Loguins: ILoguins, 
    Testing: ITesting
}

export default { IRegistrosEstados, IRegistrosCRUD, IEstructuraDatos};