import {Router} from "express";
import { checkIsAdmin } from "../middleware/checkIsAdmin";
import restaurantController from "../controller/restaurant-controller";
import {auth} from "../middleware/auth";

export const restaurantRoute = Router();
restaurantRoute.use(checkIsAdmin);
restaurantRoute.get('', restaurantController.getAll);
restaurantRoute.post('', restaurantController.addRestaurant)
restaurantRoute.delete('/:id', restaurantController.deleteRestaurant)
restaurantRoute.get('/:id', restaurantController.getRestaurant)
restaurantRoute.put('/:id', restaurantController.updateRestaurant)
