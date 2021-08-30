import { Request, Response } from "express";
import { ListProfileService } from "../service/ListProfileService";

class ListProfileController {

    async handle(request: Request, response: Response) {

        const listProfileService = new ListProfileService();

        const profile = await listProfileService.execute();

        return response.json(profile);

    }
}

export { ListProfileController }