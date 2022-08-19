import {Router} from "express";
import countController from "../controller/count-controller";

export const countDocs = Router();

countDocs.post('/user', countController.countUsers);