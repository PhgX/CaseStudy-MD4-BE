import { Request, Response } from "express";
import { User } from "../model/user";
import decodeToken from "./decodeToken";
import {Product} from '../model/product';
import { Order } from "../model/order";
import { OrderDetail } from "../model/orderDetail";


class CartController {
    getAll = async (req: Request, res: Response) => {
        let data = decodeToken.decodeToken(req, res);
        let userId = data.id;
        let products = await Product.find().populate('tag').populate('category')
            .populate('restaurant')
            .populate('discount');
        // products.userId = userId;
        res.status(200).json({
            products : products,
            userId: userId
        });
    }
    createNewOrder = async(req: Request, res: Response) => {
        let Cart = [];
        
        let data = req.body
        let userId = data.userId;
        let totalPrice = 0;
        if(data.totalMoney){
         totalPrice += +data.totalMoney;
        }
        let newOrder = {
            user: userId,
            totalPrice: totalPrice
        }
        let order = await Order.create(newOrder);
        let orderId = order._id;
        console.log('orderId', orderId);
        
        // let countOrderDetail = await OrderDetail.countDocuments({ order : orderId })
        // console.log('countOrderDetail', countOrderDetail);
        
        let productId = data.productId;
        let price = data.totalMoney;
        let amount = data.amount;
        // Cart.push(orderId);
        let orderDetail = {
            product : productId,
            order : orderId,
            price : price,
            amount : amount
        }
        let newOrderDetail = await OrderDetail.create(orderDetail);
        console.log('order', order);
        
        res.status(201).json({
            // countOrderDetail: countOrderDetail,
            orderId : order._id,
            newOrderDetail : newOrderDetail
        })
    }

    
    // addToCart = async (req: Request, res: Response) => {
    //     let tokenData = decodeToken.decodeToken(req, res);
    //     let userId = tokenData.id;
    //     let user = await User.findById(userId);
    //     console.log(user);
        
    //     let orderData = req.query;
    //     let productId = orderData.product;
    //     let value= await Product.findById(productId) ;
    //     let productPrice = value.price;
    //     let amount = +orderData.amount;
    //     let orderPrice = productPrice * amount;

    //     let order = {
    //         product : value,
    //         amount: amount,
    //         price : orderPrice,

    //     }

    //     let orderDetail = {

    //     }
    // }
}

export default new CartController();