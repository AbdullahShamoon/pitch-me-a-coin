import { NextResponse } from "next/server";
import { validatePaymentVerification } from "razorpay/dist/utils/razorpay-utils";
import Payment from "@/models/Payment";
import Razorpay from "razorpay";
import mongoose from "mongoose";

export const POST = async (req) => {
    await mongoose.connect("mongodb://localhost:27017/pitchmeacoin");
    
    let body = await req.formData()
    body = Object.fromEntries(body)

    //check if Razorpay orderId id is present in the server
    let p = await Payment.findOne({ oid: body.razorpay_order_id }); 
    if(!p) return NextResponse.json({success:false, message: "Order Id not found" })

    //verify the payment
    let v = validatePaymentVerification({"order_id": body.razorpay_order_id, "payment_id": body.razorpay_payment_id }, body.razorpay_signature, process.env.KEY_SECRET)

    if(v){
        //update the payment status in the database
        const updatedPayment = await Payment.findOneAndUpdate({ oid: body.razorpay_order_id }, { done: "true" }, { new: true });
        return NextResponse.redirect(`http://localhost:3000/${updatedPayment.to_user}?paymentdone=true`)
    }
    else{
        return NextResponse.json({ success: false, message: "Payment verification failed"} )
    }
    
}