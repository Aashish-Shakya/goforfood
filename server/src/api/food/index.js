import express from "express";
import { FoodModel } from '../../database/allModels'
import { validateCategory, validateId } from "../../validation/common.validation";
// import cloudinary from "../../utils/cloudinary"
import { v2 as cloudinary } from 'cloudinary'

import path from 'path';
import fs from 'fs'
// const fs = require("fs");


const Router = express.Router();

/**
 * Route    :-  /:_id
 * Desc     :- Get food based on id
 * Params   :- _id
 * Access   :- Public
 * Method   :- Get
 * 
 */
Router.get("/", async (req, res) => {
    try {
        const foodList = await FoodModel.find();
        return res.json({ foodList });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})


Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;
        await validateId(req.params);
        const food = await FoodModel.findById(_id);
        return res.json({ food });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})

Router.delete(
    "/delete/:id",
    async (req, res) => {
        try {
            const { food } = req;
            const { id } = req.params;

            const data = await FoodModel.findOneAndDelete({
                _id: id,

            });

            if (!data) {
                return res.json({ message: "Food was not deleted" });
            }

            return res.json({ message: "Successfully deleted the Dish.", data });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);
/**
 * Route    :-  /r/:_id
 * Desc     :- Get all food based on particulat restaurant
 * Params   :- _id
 * Access   :- Public
 * Method   :- Get
 * 
 */

// Router.get("/r/:_id", async (req, res) => {
//     try {
//         const { _id } = req.params;
//         // await validateId(req.params);
//         const foods = await FoodModel.find({ restaurant: _id })
//         return res.json({ foods });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });

//     }
// })

cloudinary.config({
    cloud_name: 'dm5krjksw',
    api_key: '723413961412168',
    api_secret: 'y37L0wrWgOYLXRbGuZtqU6p2Tmc',
    secure: false
});
/**
 * Route    :-  /:_id
 * Desc     :- Create New Food Item
 * Params   :- none
 * Access   :- Public
 * Method   :- Post
 * 
 */

// Router.post("/signup", async (req, res) => {
//     try {
//         await ValidateSignup(req.body.credentials);

//         await UserModel.findByEmailAndPhone(req.body.credentials);
//         const newUser = await UserModel.create(req.body.credentials);
//         const token = newUser.generateJwtToken();

//         return res.status(200).json({ token, status: "success" })

//     } catch (error) {
//         return res.status(500).json({ error: error.message });

//     }
// });
Router.post(
    "/new/dish",
    // passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            // const { name, description, isVeg, category, photos, price } = req.body

            const newDish = await FoodModel.create(req.body.dishData);

            return res.status(200).json({
                status: "success"
            });

        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);



//   <---------------Home work- ---------->
Router.get("/c/:category", async (req, res) => {
    try {
        const { category } = req.params;
        await validateCategory(req.params);

        const foods = await FoodModel.find({ category: { $regex: category, $options: "i" }, });
        if (!foods) return res.status(404).json({ erro: `No food matched with ${category}` })

        return res.json({ foods });
    } catch (error) {
        return res.status(500).json({ error: error.message });

    }
})


export default Router;
