import { Router }from "express";
import { CreateUserController } from "./controller/CreateUserController";
import { ListUserController } from "./controller/ListUserController";
import { ListProfileController } from "./controller/ListProfileController";
import { AuthenticateUserController } from "./controller/AuthenticateUserController";


const router = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const listProfileController = new ListProfileController();
const authenticateUserController = new AuthenticateUserController();

router.post("/user", createUserController.handle);
router.get("/user", listUserController.handle);
router.get("/profile", listProfileController.handle);
router.post("/login", authenticateUserController.handle);

export { router }