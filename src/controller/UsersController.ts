import { Request, Response } from 'express';
import { UsersService } from '../services/UsersService';

class UsersController {
    async list( request: Request, response:Response ) {
        const usersService = new UsersService();
        const user = await usersService.list();
        return response.json(user)
    }

    async show( request: Request, response:Response ) {
        const { id } = request.params;
        const usersService = new UsersService();
        const user = await usersService.show( Number(id) );
        return response.json(user)
    }

    async create( request: Request, response: Response ) {
        const { id, title, description } = request.body;
        const usersService = new UsersService();
        const user = await usersService.create( Number(id), title, description );
        return response.json(user)
    }

    async update( request: Request, response:Response ) {
        const { id, title, description } = request.body;
        const usersService = new UsersService();
        const user = await usersService.update( Number(id), title, description );
        return response.json(user)
    }

    async delete( request: Request, response:Response ) {
        const { id } = request.body;
        const usersService = new UsersService();
        const user = await usersService.delete( Number(id) );
        return response.json(user)
    }
}

export { UsersController }