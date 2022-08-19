import {Router} from "express";
import {productRoute} from "./product-route";
import {authRoute} from "./auth-route";
import {categoryRoute} from "./category-route";
import { roleRoute } from "./role-route";
import { decodeRoute } from "./decode-router";
import { searchRoute } from "./search-route";
import searchController from "../controller/search-controller";
import countController from "src/controller/count-controller";
import { countDocs } from "./count-route";

export const router = Router();
router.use('/products', productRoute)
router.use('/categories', categoryRoute)
router.use('/roles', roleRoute);
router.use('', authRoute);
router.use('/decode', decodeRoute );
router.use('/search?', searchController.searchUser );
router.use('/count', countDocs);
