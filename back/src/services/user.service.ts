// file userInfo.service.ts
import { log } from "console";
import { AppDataSource, UserModel } from "../config/data-source";
import { User } from "../entities/user.entities";
import userRepository from '../repositories/user.repository';

export const getUsersService = async function () {
    const users = await UserModel.find();
    return users;
}

export const getUsersByIdService = async function (pid: number) {
    // console.log(`El codigo ingresado es :>> ${pid}  es un tipo de objeto ${typeof(pid)}`);
    // const user = `El codigo ingresado es :>> ${pid}  es un tipo de objeto ${typeof(pid)}`;

    const user = await UserModel.findOneBy({id:pid});
    if (user)  { return user } else return null;
}
export const postCreateUsersService = async function (name: string, email: string, birthdate: string, nDni: string) {
    // console.log(`El codigo ingresado es :>> ${pid}  es un tipo de objeto ${typeof(pid)}`);
    // const user = `El codigo ingresado es :>> ${pid}  es un tipo de objeto ${typeof(pid)}`;

    // console.log(`Desde user.service
    //     Mostrar valores que fueron pasados \n 
    //     name        :> ${name} \n
    //     email       :> ${email} \n
    //     birthdate   :> ${birthdate} \n
    //     nDni        :> ${nDni} \n`);
    // const user = await AppDataSource.getRepository(User).findOneBy({id:pid});
    const user = '5e'
    return user;
}
