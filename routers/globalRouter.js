import express from "express";
import routes from "../routes.js";
import { logout, getJoin, postJoin, getlogin, postlogin } from "../controllers/userController.js";
import { home, search } from "../controllers/videoController.js";

const globalRouter = express.Router();

globalRouter.get(routes.join, getJoin);
globalRouter.post(routes.join, postJoin);

globalRouter.get(routes.login, getlogin);
globalRouter.post(routes.login, postlogin);

globalRouter.get(routes.home, home);
globalRouter.get(routes.search, search);
globalRouter.get(routes.logout, logout);

export default globalRouter;
