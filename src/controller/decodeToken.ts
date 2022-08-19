import { Request, Response } from "express";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "../middleware/auth";
import jwt_decode from "jwt-decode";

class DecodeToken {
    decodeToken = (req: Request, res: Response) => {
        let decodeData: any = -1;
        let authorization = req.headers.authorization;
    if (authorization) {
        let accessToken = authorization.split(' ')[1];
        decodeData = jwt_decode(accessToken);
        console.log('decodeData', decodeData);
        
        // if (!accessToken) {
        //     decodeData = -1;
        // } else {
        //     jwt.verify(accessToken, SECRET_KEY, (err, data) => {
        //         if (err) {
        //             decodeData = -1;
        //         } else {
        //             decodeData = data;
        //         }
        //     });
        // }
    } else {
        decodeData = -1;
    }
    return decodeData;
    }
}
export default new DecodeToken;