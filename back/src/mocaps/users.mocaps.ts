// file users.mocaps.ts

enum ERegEstados {
    Activo = 'activo',
    Bloqueado = 'bloqueado',
    Eliminado = 'eliminado',
    Rastreo = 'rastreo',
    NecesitaAutorizacion = 'auth-need'
}
enum ERolesUsuarios {
    ADMIN = 'admin',
    USUARIO = 'user',
    INVITADO = 'guest'
};

type TCrud = {
    regC: string,
    regR: string | null,
    regU: string | null,
    regD: string | null
};

type TUsuarios = {
    id: number,
    nombres: string,
    apellidos: string,
    email: string,
    sec2FA: string,
    regCrud: TCrud,
    regEstado: ERegEstados
};

type TCredencial = {
    id:number,
    idUsuario:number,
    loguin: string,
    pass: string,
    role: ERolesUsuarios
};

let infoCredenciales: TCredencial[] = [
    {
        id:1,
        idUsuario:1,
        loguin: 'root',
        pass: '7e4821aa84f3387884d6c38544ddb9603592e1229235627bf46d8ef666d66d060e710ce059d63ab281170bb7daf42b88b0cfe983de635f6c40ee4980fd498c82',
        role: ERolesUsuarios.ADMIN
    },
    {
        id:2,
        idUsuario:1,
        loguin: 'fergan',
        pass: '7e4821aa84f3387884d6c38544ddb9603592e1229235627bf46d8ef666d66d060e710ce059d63ab281170bb7daf42b88b0cfe983de635f6c40ee4980fd498c82',
        role: ERolesUsuarios.USUARIO
    },
    {
        id:3,
        idUsuario:3,
        loguin: 'test',
        pass: '881c7d6ba98678bcd96e253086c4048c3ea15306d0d13ff48341c6285ee71102a47b6f16e20e4d65c0c3d677be689dfda6d326695609cbadfafa1800e9eb7fc1',
        role: ERolesUsuarios.INVITADO
    }
]

let infoUsuarios: TUsuarios[] = [
    {
        id: 1,
        nombres: "Fernando Martin",
        apellidos: "Gan",
        email: "fmgsch@gmail.com",
        sec2FA: "+5492975213076",
        regCrud: {
            regC: new Date().toISOString(),
            regR: null,
            regU: null,
            regD: null
        },
        regEstado: ERegEstados.Activo // Establece el estado inicial como 'Activo'
    },
    {
        id: 2,
        nombres: "Gabriel Fernando",
        apellidos: "Gan",
        email: "gfg@gmail.com",
        sec2FA: "gfg@gmail.com",
        regCrud: {
            regC: new Date().toISOString(),
            regR: null,
            regU: null,
            regD: null
        },
        regEstado: ERegEstados.Bloqueado // Establece el estado inicial como 'Activo'
    },
    {
        id: 3,
        nombres: "Video Escuela",
        apellidos: "Company",
        email: "vec@gmail.com",
        sec2FA: "admin@company.com",
        regCrud: {
            regC: new Date().toISOString(),
            regR: null,
            regU: null,
            regD: null
        },
        regEstado: ERegEstados.Rastreo // Establece el estado inicial como 'Activo'
    }

];

export {infoUsuarios, infoCredenciales};