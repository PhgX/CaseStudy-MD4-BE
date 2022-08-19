import {model, Schema} from "mongoose";

export interface ICategory {
    name?: string;
    image?: string
}

const categorySchema = new Schema<ICategory>({
    name: String,
    image : String
});

const Category = model<ICategory>('Category', categorySchema);
export {Category};
