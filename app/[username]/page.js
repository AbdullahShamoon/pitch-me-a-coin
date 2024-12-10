import React from 'react'
import Navbar from '@/components/Navbar'
import PaymentPage from '@/components/PaymentPage'
import { notFound } from "next/navigation"
import User from '@/models/User'
import connectDb from '@/db/connectDb'

const Username = async ({ params }) => {


    await connectDb()
    const user = await User.findOne({ username: params.username })
    if (!user) return notFound()


    return (
        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f]  ">
                <Navbar />
            </div>

            <PaymentPage p={params} />
        </>
    )
}

export default Username

export async function generateMetadata({ params }) {
    return {
        title: `${params.username} - Pitch Me A Coin`,
    }
}