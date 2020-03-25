import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";
import AuthRouter from "./Router/AuthRouter";

class App {
  public application: express.Application;

  constructor() {
    this.application = express();
  }
}

const app = new App().application;

app.use(helmet());
app.use(cors());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

app.use(routes.api, AuthRouter);

export default app;
