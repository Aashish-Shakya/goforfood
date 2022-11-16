import express from "express";
import passport from "passport";

import { OrderModel } from "../../database/allModels";

const Router = express.Router();

/**
 * Route     /
 * Des       Get all orders by user id
 * Params    none
 * Access    Private
 * Method    GET
 */
Router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { user } = req;

            const getOrders = await OrderModel.findOne({ user: user._id });

            if (!getOrders) {
                return res.status(400).json({ error: "User not found" });
            }

            return res.status(200).json({ orders: getOrders });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);


Router.get("/admin/all", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        // const { _id } = req.params;

        const orderList = await OrderModel.find();

        //this if block not woroking day-58 17:45
        if (!orderList) {
            return res.status(404).json({ error: "Order not found" });
        }

        // const { fullName, role } = getUser;
        return res.json({ orderList });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});
/**
 * Route     /new
 * Des       Add new order
 * Params    none
 * Access    Private
 * Method    PUT
 */
Router.put(
    "/new",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { user } = req;
            console.log(user._id)
            // const { orderDetails } = req.body;
            // console.log(user);


            const addNewOrder = await OrderModel.create(

                {
                    user: user._id,


                    orderDetails: req.body,

                }

            );

            return res.json({ order: addNewOrder });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);

export default Router;



//Task validate order