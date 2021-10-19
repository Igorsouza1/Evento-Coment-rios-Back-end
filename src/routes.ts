import { Router } from "express";
import { AuthenticateUserContoller } from "./controller/AuthenticateUserContoller";
import { CreateMessageController } from "./controller/CreateMessageController";
import { GetLast3MessageController } from "./controller/GetLast3MessageContoller";
import { ProfileUserContoller } from "./controller/ProfileUserContoller";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";


const router = Router();

router.post("/authenticate", new AuthenticateUserContoller().handle);

router.post("/messages", ensureAuthenticated ,new CreateMessageController().handle);

router.get("/messages/last3", new GetLast3MessageController().handle)

router.get("/profile", ensureAuthenticated ,new ProfileUserContoller().handle)

export { router }