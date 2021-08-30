import { Request, Response } from "express";
import { CreateUserService } from "../service/CreateUserService";


class CreateUserController {
    async handle(request: Request, response: Response) {
        const { name, cep, email, password } = request.body;

        const createUserService = new CreateUserService();

        const user = await createUserService.execute({ name, cep, email, password });
    
        return response.json(user);
    }

}

export { CreateUserController }