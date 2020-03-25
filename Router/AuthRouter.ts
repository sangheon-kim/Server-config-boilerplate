import express from "express";
import routes from "../routes";
import Auth from "../Controllers/Auth";

const AuthRouter = express.Router();

AuthRouter.post(routes.socialJoin, Auth.socialJoin);

export default AuthRouter;
