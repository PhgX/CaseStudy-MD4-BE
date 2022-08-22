
import { Router } from "express";
import discountController from "../controller/discount-controller";

export const discountRoute = Router();
discountRoute.get('', discountController.getAll);
discountRoute.post('', discountController.addNewDiscount);
discountRoute.delete('/:id',discountController.deleteDiscount);
discountRoute.get('/:id',discountController.getDiscount);
discountRoute.put('/:id',discountController.updateDiscount);


