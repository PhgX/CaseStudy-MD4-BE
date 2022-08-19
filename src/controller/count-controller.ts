import {NextFunction, Request, Response} from "express";
import { Category } from "../model/category";
import { Restaurant } from "../model/restaurant";
import { Tag } from "../model/tag";
import { User } from "../model/user";

class CountDocument {
    countUsers = async (req: Request, res: Response) => {
        let numb = await User.countDocuments();
        res.status(201).json({total : numb});
    }

    countRestaurant = async (req: Request, res: Response) => {
        let numb = await Restaurant.countDocuments();
        res.status(201).json({total : numb});
    }

    countCategory = async (req: Request, res: Response) => {
        let numb = await Category.countDocuments();
        res.status(201).json({total : numb});
    }
    
    countTag = async (req: Request, res: Response) => {
        let numb = await Tag.countDocuments();
        res.status(201).json({total : numb});
    }
}

export default new CountDocument();