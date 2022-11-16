import mongoose, { mongo } from "mongoose";
const OrderSchema = new mongoose.Schema(
    {
        users: {
            type: mongoose.Types.ObjectId,
            ref: "users"
        },

        orderDetails: [
            {

                itemTotal: { type: Number, required: true },
                razorpay_payment_id: { type: String, required: true },
                food: [
                    {
                        name: { type: String, required: true },
                        image: { type: String, required: true },
                        dishId: { type: mongoose.Types.ObjectId, ref: "foods" },
                        quantity: { type: Number, required: true },
                    },
                ],

                paymode: { type: String, required: true },
                status: { type: String, default: "Placed" },

            }]
    },
    {
        timestamps: true,
    })

export const OrderModel = mongoose.model("orders", OrderSchema)