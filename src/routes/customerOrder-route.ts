import { Router } from "express";
import productController from "../controller/product-controller";
import cartController from "../controller/cart-controller";
// import { auth } from '../middleware/auth';

export const customerOrderRoute = Router();

// customerOrderRoute.use(auth)
customerOrderRoute.get('/products', productController.getAll);
customerOrderRoute.post('/products', cartController.createNewOrder)