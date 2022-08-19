import {Router} from "express";
import { checkIsAdmin } from "../middleware/checkIsAdmin";
import productController from "../controller/product-controller";
import {auth} from "../middleware/auth";

export const productRoute = Router();
productRoute.use(checkIsAdmin);
productRoute.get('', productController.getAll);
productRoute.post('', productController.addProduct)
productRoute.delete('/:id', productController.deleteProduct)
productRoute.get('/:id', productController.getProduct)
productRoute.put('/:id', productController.updateProduct)
