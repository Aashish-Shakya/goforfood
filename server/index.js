import express from 'express';
import dotenv from 'dotenv';

//Db connection 
import ConnectDB from './database/connection'
import Auth from "./api/auth";


dotenv.config();

const goforfood = express();

goforfood.use(express.json());

goforfood.get("/", (req, res) => {
    res.json({
        message: "Server is running"
    })
});
///auth/signup
goforfood.use("/auth", Auth);


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