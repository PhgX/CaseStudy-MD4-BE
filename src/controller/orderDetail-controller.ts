import { Request, Response } from "express";
import { Order } from "../model/order";
import { OrderDetail } from "../model/orderDetail";
import decodeToken from "./decodeToken";

class OrderDetailController {
    getAll = async (req: Request, res: Response) => {
        // let orderDetails = await OrderDetail.find().populate({path: 'order',populate: {path: 'user'}});
        let orderDetails = await OrderDetail.find().populate({path: 'product',populate: {path: 'restaurant'}});
        res.status(200).json(orderDetails);
    }
    addToOrder = async (req: Request, res: Response) => {
        let data = decodeToken.decodeToken(req, res);
        let userId = data.id;
        let orderDetail = req.body
        let currentOrder = await Order.find({user:userId})
        orderDetail.order = currentOrder[0]._id
        // if (!currentOrder) {
        //     let newOrder = await Order.create({
        //         user: userId,
        //         status: 'pending',
        //         totalPrice: 0
        //     });
        //     orderDetail.order = newOrder._id;
        // } else {
        //     orderDetail.order = currentOrder[0]._id;
        // }
        let newOrderDetail = await OrderDetail.create(orderDetail)
        res.status(200).json(newOrderDetail)
    }

}
export default new OrderDetailController();