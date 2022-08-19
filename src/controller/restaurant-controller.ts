import {NextFunction, Request, Response} from "express";
import {Restaurant} from "../model/restaurant"

class RestaurantController {
    getAll = async (req: Request, res: Response) => {
        let restaurants = await Restaurant.find();
        res.status(200).json(restaurants);
    }

    addRestaurant = async (req: Request, res: Response, next: NextFunction) => {
       try {
           let restaurant = req.body;
           restaurant = await Restaurant.create(restaurant);
           res.status(201).json(restaurant);
       }catch (error){
           next(error);
       }
    }

    deleteRestaurant = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let restaurant = await Restaurant.findById(id);
            if (!Restaurant) {
                res.status(404).json();
            } else {
                restaurant.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getRestaurant = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let restaurant = await Restaurant.findById(id);
            if (!restaurant) {
                res.status(404).json();
            } else {
                res.status(200).json(restaurant);
            }
        } catch (error) {
            next(error)
        }
    }

    updateRestaurant = async (req: Request, res: Response) => {
        let id = req.params.id;
        let restaurant = await Restaurant.findById(id);
        if (!Restaurant) {
            res.status(404).json();
        } else {
            let data = req.body;
            await Restaurant.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            res.status(200).json(data);
        }
    }
}

export default new RestaurantController();
