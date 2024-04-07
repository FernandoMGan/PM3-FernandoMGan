//  File index.interfaces.ts

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

interface IClientes {
    id: number,
    razonFantasia: string,
    razonSocial: string,
    cuit: string,
    observacion: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface IProveedores {
    id: number,
    razonFantasia: string,
    razonSocial: string,
    observacion: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface IUsuarios {
    id: number,
    nombres: string,
    apellidos: string,
    email: string,
    sec2FA: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface IRoles {
    id: number,
    role: string,
    level: string,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface ILoguins {
    id: number,
    idUser: number,
    nickName: string,
    password: string,
    role: IRoles,
    regCrud: IRegistrosCRUD,
    estadosReg: number | 1
}

interface ITesting {
    id: number,
    user: string,
    pass: string,
    observacion : string
};

interface IEstructuraDatos{
    RegistrosEstado: IRegistrosEstados , 
    RegistrosCRUD: IRegistrosCRUD, 
    Clientes: IClientes, 
    Proveedores: IProveedores, 
    Usuarios: IUsuarios, 
    Loguins: ILoguins, 
    Testing: ITesting
}

export default IEstructuraDatos;