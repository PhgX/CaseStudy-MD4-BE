import { model, Schema } from "mongoose";
import { IUser } from "./user";

export interface IOrder {
    user?: IUser;
    status?: string;
    totalPrice?: number;
}
const orderSchema = new Schema<IOrder>({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    status: String,
    totalPrice: Number
})
const Order = model<IOrder>('Order', orderSchema);
export {Order}