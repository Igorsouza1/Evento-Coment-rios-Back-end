import { Router } from "express";
import { AuthenticateUserContoller } from "./controller/AuthenticateUserContoller";
import { CreateMessageController } from "./controller/CreateMessageController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserContoller().handle);

router.post("/messages", ensureAuthenticated ,new CreateMessageController().handle);

export { router }