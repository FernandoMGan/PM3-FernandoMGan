// file user.repository.ts 
import { AppDataSource, UserModel } from "../config/data-source";
import { User } from "../entities/user.entities";

// Obtener el repositorio de usuarios
const userRepository = AppDataSource.getRepository(User);

// Extender el repositorio con métodos personalizados
const extendedUserRepository = {
    ...userRepository,

    // Definir el método 'findOneBy' para buscar un usuario por criterio
    findOneBy: async function (criteria: Partial<User>): Promise<number | null> {
        // Implementa la lógica para buscar un usuario por criterio aquí
        return 1
    }
};

export default extendedUserRepository;
