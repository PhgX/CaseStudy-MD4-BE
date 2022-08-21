import { NextFunction, Request, Response } from 'express';
import fs from 'fs';
import { Error } from 'mongoose';

export const errorHandler = (err : Error, req : Request, res : Response, next : NextFunction) => {
    fs.writeFile("./log.txt", err.message, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("The file was saved!");
    });
    res.status(400).json({
        errorCode: 400,
        message: err.message
    });
    next();
}
