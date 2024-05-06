// File preload.data.ts
import { AppDataSource, UserModel } from "../config/data-source";
import { User } from "../entities/user.entities";

const user001 = {
    "name": "testeo 001",
    "email": "tst001@gmail.com",
    "birthdate": "11/11/1965",
    "nDni": "22...001"
};
const user002 = {
    "name": "testeo 002",
    "email": "tst002@gmail.com",
    "birthdate": "11/11/1966",
    "nDni": "22...002"
};
const user003 = {
    "name": "testeo 003",
    "email": "tst003@gmail.com",
    "birthdate": "11/11/1967",
    "nDni": "22...003"
};
const user004 = {
    "name": "testeo 004",
    "email": "tst004@gmail.com",
    "birthdate": "11/11/1968",
    "nDni": "22...004"
};

export const preloadData = async () => {
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {
        const newUser001 = await UserModel.create(user001);
        const newUser002 = await UserModel.create(user002);
        const newUser003 = await UserModel.create(user003);
        const newUser004 = await UserModel.create(user004);
    
    });

}
