import {Router} from "express";
import { checkIsAdmin } from "../middleware/checkIsAdmin";
import categoryController from "../controller/category-controller";
import {auth} from "../middleware/auth";

export const categoryRoute = Router();
categoryRoute.use(checkIsAdmin);
categoryRoute.get('', categoryController.getAll);
categoryRoute.post('', categoryController.addCategory)
categoryRoute.delete('/:id', categoryController.deleteCategory)
categoryRoute.get('/:id', categoryController.getCategory)
categoryRoute.put('/:id', categoryController.updateCategory)
