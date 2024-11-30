import React from 'react'
import Navbar from '@/components/Navbar'

const Username = ({ params }) => {
    return (
        <div>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-gradient-to-b from-black to-[#ecf0f1] ">
                <Navbar />
            </div>
            {params.username}

        </div>
    )
}

export default Username