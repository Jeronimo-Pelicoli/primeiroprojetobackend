import { Request, Response } from "express";
import { ListUserService } from "../service/ListUserService";


class ListUserController {

    async handle(request: Request, response: Response) {
        const listUserController = new ListUserService();

        const user = await listUserController.execute();

        return response.json(user);
    }
}

export { ListUserController }