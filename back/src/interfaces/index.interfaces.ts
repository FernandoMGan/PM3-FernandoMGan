interface IUsuarios {
    id: number,
    nombres: string,
    apellidos: string,
    email: string,
    sec2FA: string,
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