import {Router} from "express";
import {productRoute} from "./product-route";
import {authRoute} from "./auth-route";
import {categoryRoute} from "./category-route";
import { roleRoute } from "./role-route";

export const router = Router();
router.use('/products', productRoute)
router.use('/categories', categoryRoute)
router.use('/roles', roleRoute);
router.use('', authRoute);
