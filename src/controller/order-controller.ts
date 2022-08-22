import { Request, Response } from "express";
import { OrderDetail } from "../model/orderDetail";
import { Order } from "../model/order";
import decodeToken from "./decodeToken";

class OrderController {
    getAll = async (req: Request, res: Response) => {
        let data = decodeToken.decodeToken(req, res);
        let userId = data.id;
        let order = await Order.find({user: userId});
        let allOrderDetails = await OrderDetail.find({order: order[0]._id})
        let totalPrice = 0;
        for (let i =0; i<allOrderDetails.length;i++) {
            totalPrice += allOrderDetails[i].price
        }
        order[0].totalPrice = totalPrice
        res.status(200).json(totalPrice)
    }
    countOrderDetails =async (req: Request, res: Response) => {
        let data = decodeToken.decodeToken(req, res);
        let userId = data.id; 
        let order = await Order.find({user: userId})
        let orderId = order[0]._id;
        let count = await OrderDetail.countDocuments({order:orderId})
        res.status(200).json(count)
    }

}
export default new OrderController();