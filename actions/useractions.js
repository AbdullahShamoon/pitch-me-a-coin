'use server'

import Razorpay from "razorpay"
import Payment from "@/models/Payment"
import User from "@/models/User"
import connectDb from "@/db/connectDb"


export const initiate = async (amount, to_user, paymentform) => {
    await connectDb();
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

export const fetchuser = async (username) => {
    await connectDb()
    // let u = await User.findOne({ username: username })
    // let user = u.toObject({ flattenObjectIds: true })
    let u = await User.findOne({ username: username }) || {};
    let user = u.toObject ? u.toObject({ flattenObjectIds: true }) : {};

    return user
}

export const fetchpayments = async (username) => {
    await connectDb()
    // find all payments sorted by decreasing order of amount and flatten the object
    let p = await Payment.find({ to_user: username , done: true }).sort({ amount: -1 }).lean()
    return p
}

export const updateUser = async (data, oldusername) => {
    await connectDb()
    let ndata = Object.fromEntries(data)
    console.log(ndata)

    //if the username is being updated , check if it is available
    if (ndata.username !== oldusername) {
        let u = await User.findOne({ username: ndata.username })
        if (u) return { error: "Username already exists" }
    }

    //update the user
    await User.updateOne({ email: ndata.email }, ndata)
}