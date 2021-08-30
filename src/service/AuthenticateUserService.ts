import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepository } from "../repository/UserRepository";
import { sign } from "jsonwebtoken";


interface IAuthenticateUser {
    email: string,
    password: string
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateUser) {
        
        const userRepository = getCustomRepository(UserRepository);

        const user = await userRepository.findOne({ email });

        if(!user) {
            throw new Error("email/Password incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email/Password incorrect");
        }

        const token = sign(
            {
                email: user.email
            }, "4dbf1122162ca70c58d58b5d393206c2",
            {
                subject: user.profile_id,
                expiresIn: "1d"
            }
        );

        return token;
        
    }
}

export { AuthenticateUserService }