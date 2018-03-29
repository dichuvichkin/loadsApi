import express from "express";
import bodyParser from "body-parser";
import compression from "compression";
import cookieParser from "cookie-parser";
import expressValidator from "express-validator";
import errorHandler from "errorhandler";
import routes from "./routes";

const app = express();

app.use(compression());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(expressValidator());

app.use(cookieParser());

app.use("/", routes);

if (app.get("env") === "development") {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandler());
}

export default app;
