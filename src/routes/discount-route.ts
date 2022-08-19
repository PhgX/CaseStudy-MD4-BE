import {Router} from "express";
import { checkIsAdmin } from "../middleware/checkIsAdmin";
import discountController from "../controller/discount-controller";
import {auth} from "../middleware/auth";

export const discountRoute = Router();
discountRoute.use(checkIsAdmin);
discountRoute.get('', discountController.getAll);
discountRoute.post('', discountController.addDiscount)
discountRoute.delete('/:id', discountController.deleteDiscount)
discountRoute.get('/:id', discountController.getDiscount)
discountRoute.put('/:id', discountController.updateDiscount)
