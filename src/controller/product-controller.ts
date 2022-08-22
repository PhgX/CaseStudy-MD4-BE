import { NextFunction, Request, response, Response } from "express";
import { Product } from "../model/product";

class ProductController {
    getAll = async (req: Request, res: Response) => {
        let products = await Product.find().populate('tag').populate('category')
            .populate('restaurant')
            .populate('discount');
        res.status(200).json(products);
    }

    deleteProduct = async (req: Request, res: Response, next: NextFunction) => {
        let id = req.params.id;
        try {
            let product = await Product.findById(id);
            if (!product) {
                res.status(404).json();
            } else {
                product.delete();
                res.status(204).json();
            }
        } catch (err) {
            next(err);
        }
    }
    addProduct = async (req: Request, res: Response, next: NextFunction) => {
        try {
            let product = req.body;
            product = await Product.create(product);
            let id = product._id;
            let regex : RegExp = /^[0-9a-fA-F]{24}$/;
            if (regex.test(id)) {
                let newProduct = await Product.findById(product._id)
                    .populate('tag')
                    .populate('category')
                    .populate('restaurant')
                    .populate('discount');
                res.status(200).json(newProduct);
            }
        } catch (err) {
            next(err);
        }
    }

    updateProduct = async (req: Request, res: Response, next: NextFunction) => {
        try{
            let id = req.params.id;
            let product = await Product.findById(id);
            if (!product) {
                res.status(404).json();
            } else {
                let data = req.body;
                await Product.findOneAndUpdate({
                    _id: id
                }, data);
                data._id = id;
                product = await Product.findById(id).populate('category','name');
                res.status(200).json(product);
            }

        } catch (err) {
            next(err)
        }
    }
}
export default new ProductController();