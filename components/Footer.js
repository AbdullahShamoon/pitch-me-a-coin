import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>
            <footer className='flex bg-[#1d181f] text-white p-14 justify-center relative'>
                <div className="logo absolute left-1/2. -top-7 font-anton text-xl bg-[#1d181f] py-2 px-8"><Link href="/">PitchMeACoin</Link></div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-kanit leading-9 tracking-widest w-52 text-center border-r border-gray-600 font-semibold'><Link href="">GET STARTED</Link></h1>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Start a Fundraise</Link></div>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Account Login</Link></div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-kanit leading-9 tracking-widest w-52 text-center border-r border-gray-600 font-semibold'><Link href="">RESOURCES</Link></h1>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">FAQ</Link></div>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Guidelines</Link></div>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Contact Us</Link></div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-kanit leading-9 tracking-widest w-52 text-center border-r border-gray-600 font-semibold'><Link href="">LEGAL</Link></h1>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Privacy Policy</Link></div>
                    <div className='text-xs font-bold text-[#979797] py-1 hover:text-white transition-all duration-200'><Link href="">Terms of Services</Link></div>
                </div>
                <div className='flex flex-col items-center'>
                    <h1 className='font-kanit leading-9 tracking-widest w-52 text-center font-semibold'><Link href="">FOLLOW</Link></h1>
                    
                </div>
            </footer>
            <footer className='flex flex-col bg-[#2A262C]  p-14 justify-center items-center gap-7 px-48'>
                <div className=' text-xs text-white font-semibold'>A startup platform</div>
                <div className=' text-xs text-[#979797]'>Copyright © 2024 Pitchmeacoin.com. All rights reserved.</div>
                <p  className='text-[11px] text-[#666] leading-3'>PitchMeACoin is a software as a service funding platform. PitchMeACoin is not a registered broker-dealer and does not offer investment advice or advise on the raising of capital through securities offerings. PitchMeACoin does not recommend or otherwise suggest that any investor make an investment in a particular company, or that any company offer securities to a particular investor. PitchMeACoin takes no part in the negotiation or execution of transactions for the purchase or sale of securities, and at no time has possession of funds or securities. No securities transactions are executed or negotiated on or through the PitchMeACoin platform. PitchMeACoin receives no compensation in connection with the purchase or sale of securities.</p>
            </footer>
            
        </div>
    )
}

export default Footer