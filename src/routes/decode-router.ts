import {Router} from "express";
import decodeToken from "../controller/decodeToken";


export const decodeRoute = Router()
decodeRoute.post('', decodeToken.decodeToken);
