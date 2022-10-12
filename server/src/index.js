import express from 'express';
import dotenv from 'dotenv';
import passport from 'passport';


//Private route authrization config
import privateRouteConfig from "./config/route.config";


//Db connection 
import ConnectDB from './database/connection'
import Auth from "./api/auth";
import Food from "./api/food";
import User from "./api/user";
import Order from "./api/order";



dotenv.config();
privateRouteConfig(passport);

const goforfood = express();

goforfood.use(express.json());

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


const PORT = 6000;

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