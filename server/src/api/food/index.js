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

Router.post(
    "/new/image",
    // passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { name, description, isVeg, category, photos, price } = req.body

            const result = await cloudinary.uploader.upload(
                photos,
                {

                    folder: "dish",

                }, (err, image) => {
                    if (err) {
                        console.log(err);
                    }
                    console.log("File Uploaded");


                }
            );


            const dish = await FoodModel.create({
                name,
                description,
                isVeg,
                category,
                photos: `${cloudinary.url(result.public_id + ".jpg")}`,
                price


            });

            return res.status(200).json({
                data: {
                    dish
                },
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
