import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';
import multer from 'multer'
import path from 'path'
// import fileUpload from 'express-fileupload'
//Private route authrization config
import session from "express-session";

import privateRouteConfig from "./config/route.config";

import cors from "cors"
import helmet from "helmet"

//Db connection 
import ConnectDB from './database/connection'
import Auth from "./api/auth";
import Food from "./api/food";
import User from "./api/user";
import Order from "./api/order";

// Require the cloudinary library

// import { v2 as cloudinary } from 'cloudinary'


// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0
dotenv.config();
privateRouteConfig(passport);

const goforfood = express();

goforfood.use(cors({ origin: "http://localhost:3000" }));
goforfood.use(helmet());

goforfood.use(express.json());
goforfood.use(session({ secret: process.env.JWTSECRET }));
goforfood.use(passport.initialize());
goforfood.use(passport.session());

goforfood.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    })
});
///auth/signup
goforfood.use("/auth", Auth);
goforfood.use("/food", Food);
goforfood.use("/user", User);
goforfood.use("/order", Order);


// goforfood.use(fileUpload({
//     debug: true,
//     useTempFiles: true,
//     tempFileDir: path.join(__dirname, "./temp"),
// }))



const PORT = 4000;

goforfood.listen(PORT, () => {
    ConnectDB()
        .then(() => {
            console.log("Server is running with DB !!!");
        })
        .catch((error) => {
            console.log("Server is running, but database connection failed...");
            console.log(error);
        });
});