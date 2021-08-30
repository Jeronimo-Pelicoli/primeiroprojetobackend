import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm"
import { ProfileRepository } from "../repository/ProfileRepository";
import { UserRepository } from "../repository/UserRepository";


interface ICreateUserRequest {
    name: string,
    cep: string,
    email: string,
    password: string
}

class CreateUserService {

    async execute({ name, cep, email, password }: ICreateUserRequest) {
        const userRepository = getCustomRepository(UserRepository);
        const profileRepository = getCustomRepository(ProfileRepository);

        if(!email) {
            throw new Error("Email incorrect");
        }

        const userAlreadyExixts = await userRepository.findOne({email});

        if(userAlreadyExixts) {
            throw new Error("Usuario already exists")
        }

        const profile = profileRepository.create({
            name,
            cep
        })

        await profileRepository.save(profile);

        const passwordHash = await hash(password, 8);

        const user = userRepository.create({
            email,
            password: passwordHash,
            profile
        })

        await userRepository.save(user);

        return user;
    }
}

export { CreateUserService }