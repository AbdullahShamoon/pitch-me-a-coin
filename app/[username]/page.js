import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import PaymentPage from '@/components/PaymentPage'

const Username = ({ params }) => {

    return (
        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f]  ">
                <Navbar />
            </div>

            <PaymentPage p={params} />

            <Footer />
        </>
    )
}

export default Username