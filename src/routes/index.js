import { Router } from "express";

import { catchErrors } from "../shared/errorHandlers";

import * as mainController from "../controllers/mainController";

const router = Router();

router.get("/", catchErrors(mainController.index));

export default router;
