'use server'

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import mongoose from "mongoose"

export const initiate = async (amount, to_user, paymentform) => {
    await mongoose.connect("mongodb://localhost:27017/pitchmeacoin");
    var instance = new Razorpay({ key_id: process.env.KEY_ID, key_secret: process.env.KEY_SECRET });

    let x = await instance.orders.create({
        amount: Number.parseInt(amount),
        currency: "INR",
    })

    //create a payment object which shows a pending payment in the database
    await Payment.create({
        name: paymentform.name,
        message: paymentform.message,
        to_user: to_user,
        oid: x.id,
        amount: amount
    })
    return x
}