import { getCustomRepository } from "typeorm"
import { UserRepository } from "../repository/UserRepository"


class ListUserService {

    async execute() {

        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.find();

        return user;

    }

}

export { ListUserService }