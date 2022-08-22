import { NextFunction, Request, Response } from 'express';
import { Discount } from "../model/discount";

class DiscountController {
    getAll = async (req: Request, res: Response) => {
        let discounts = await Discount.find();
        res.status(200).json(discounts);
    }

    addNewDiscount = async (req: Request, res : Response, next : NextFunction) => {
        try {
            let discount = req.body;
            discount = await Discount.create(discount);
            let id = discount._id;
            let regex : RegExp = /^[0-9a-fA-F]{24}$/;
            if (regex.test(id)) {
                let newDiscount = await Discount.findById(discount._id)
                res.status(200).json(newDiscount);
            }
        } catch (err) {
            next(err);
        }
    }
    deleteDiscount = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let discount = await Discount.findById(id);
            if (!discount) {
                res.status(404).json();
            } else {
                discount.delete();
                res.status(204).json();
            }
        } catch (error) {
            next(error);
        }
    }

    getDiscount = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let discount = await Discount.findById(id);
            if (!discount) {
                res.status(404).json();
            } else {
                res.status(200).json(discount);
            }
        } catch (error) {
            next(error)
        }
    }

    updateDiscount = async (req: Request, res: Response) => {
        let id = req.params.id;
        let discount = await Discount.findById(id);
        if (!discount) {
            res.status(404).json();
        } else {
            let data = req.body;
            console.log(data);
            
            await Discount.findOneAndUpdate({
                _id: id
            }, data);
            data._id = id;
            res.status(200).json(data);
        }
    }
}
export default new DiscountController();