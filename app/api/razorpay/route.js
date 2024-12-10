import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import connectDb from "@/db/connectDb";
import User from "@/models/User";

export const POST = async (req) => {
    //Connect to the database
    await connectDb();

    let body = await req.formData()
    body = Object.fromEntries(body)

    //check if Razorpay orderId id is present in the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id });
    if (!p) return NextResponse.json({ success: false, message: "Order Id not found in the database" })

    //fetch the secret key of the user who is getting the payment
    let user = await User.findOne({ username: p.to_user });
    const secret = user.razorpay_secret

    //verify the payment
    let v = validatePaymentVerification({ "order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, secret)

    if (v) {
        //update the payment status in the database
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: true }, { new: true });
        return NextResponse.redirect(`http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`)
    }
    else {
        return NextResponse.json({ success: false, message: "Payment verification failed" })
    }

}