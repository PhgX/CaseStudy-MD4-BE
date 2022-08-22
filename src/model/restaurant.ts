import { model, Schema } from "mongoose";
import { IUser } from "./user";

export interface IRestaurant {
    name?: string;
    address?: string;
    userOwn?: IUser;
}
const restaurantSchema = new Schema<IRestaurant>({
    name: String,
    address: String,
    userOwn: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})
const Restaurant = model<IRestaurant>('Restaurant', restaurantSchema);
export {Restaurant}