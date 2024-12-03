'use server'

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import { mongo } from "mongoose"


export const initiate = async (amount, to_username, paymentform) => {
    await mongoose.connect("mongodb://localhost:27017/pitchmeacoin");
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });

    instance.orders.create({
        amount: 5000,
        currency: "INR",
        receipt: "receipt#1",
        notes: {
            key1: "value3",
            key2: "value2"
        }
    })
}