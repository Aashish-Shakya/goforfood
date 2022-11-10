import express from "express";
import passport from "passport";
import { UserModel } from '../../database/allModels'

const Router = express.Router();

/**
 * Route     /
 * Des       Get authorized user data
 * Params    none
 * Access    Private
 * Method    GET
 */

Router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { email, fullName, phoneNumber, address, role } = req.user;

            return res.json({ user: { email, fullName, phoneNumber, address, role } });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);

/**
 * Route     /:_id
 * Des       Get user data for admin system
 * Params    _id
 * Access    Public
 * Method    GET
 */

Router.get("/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        const getUser = await UserModel.findById(_id);

        //this if block not woroking day-58 17:45
        if (!getUser) {
            return res.status(404).json({ error: "User not found" });
        }

        const { fullName, role } = getUser;

        return res.json({ user: { fullName, role } });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

Router.get("/admin/all", passport.authenticate("jwt", { session: false }), async (req, res) => {
    try {
        // const { _id } = req.params;

        const userList = await UserModel.find();

        //this if block not woroking day-58 17:45
        if (!userList) {
            return res.status(404).json({ error: "User not found" });
        }

        // const { fullName, role } = getUser;
        return res.json({ userList });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


/**
 * Route     /:_id
 * Des       Update user data
 * Params    _id
 * Access    Private
 * Method    PUT
 */
Router.put(
    "/update/:_id",
    passport.authenticate("jwt", { session: false }),
    async (req, res) => {
        try {
            const { _id } = req.params;
            const { userData } = req.body;

            // userData.password = undefined;

            const updateUserData = await UserModel.findByIdAndUpdate(
                _id,
                {
                    $set: userData,
                },
                {
                    new: true,
                }
            );

            return res.json({ user: updateUserData });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);
Router.delete(
    "/delete/:id",
    async (req, res) => {
        try {
            const { user } = req;
            const { id } = req.params;

            const data = await UserModel.findOneAndDelete({
                _id: id,

            });

            if (!data) {
                return res.json({ message: "User was not deleted" });
            }

            return res.json({ message: "Successfully deleted the User.", data });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }
);
export default Router;

//validate user data