import {NextFunction, Request, Response} from "express";
import { Category } from "../model/category";
import { Restaurant } from "../model/restaurant";
import { Tag } from "../model/tag";
import { User } from "../model/user";

class SearchController {
    searchUser = async (req : Request, res: Response, next: NextFunction) => {
        let query = req.query;
        console.log(query);
        let userName = query.username;
        let listUser = await User.find({ 'username' : { '$regex' : userName, '$options' : 'i'} }).limit(10);
        res.status(201).json({
            listUser : listUser
        });
        
    }

    searchRestaurant = async (req : Request, res: Response, next: NextFunction) => {
        let query = req.query;
        // console.log(query);
        let name = query.name;
        let listRestaurant = await Restaurant.find({ 'name' : { '$regex' : name, '$options' : 'i'} }).limit(10);
        res.status(201).json({
            listRestaurant : listRestaurant
        });
    }

    searchCategory = async (req : Request, res: Response, next: NextFunction) => {
        let query = req.query;
        // console.log(query);
        let name = query.name;
        let listCate = await Restaurant.find({ 'name' : { '$regex' : name, '$options' : 'i'} }).limit(10);
        res.status(201).json({
            listCate : listCate
        });
    }

    searchTag = async (req : Request, res: Response, next: NextFunction) => {
        let query = req.query;
        // console.log(query);
        let tag = query.tag;
        let listTag = await Tag.find({ 'name' : { '$regex' : tag, '$options' : 'i'} }).limit(10);
        res.status(201).json({
            listTag : listTag
        });
    }
}

export default new SearchController();

