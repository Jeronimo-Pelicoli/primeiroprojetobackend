import { Router } from 'express';
import { UsersController } from '../src/controller/UsersController';

const routes = Router();

const usersController = new UsersController();

routes.get("/proj", usersController.list);
routes.get("/proj/:id", usersController.show);
routes.post("/proj", usersController.create);
routes.put("/proj", usersController.update);
routes.delete("/proj", usersController.delete);

export { routes };