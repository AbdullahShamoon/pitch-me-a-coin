'use client'
import React from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
    const { data: session } = useSession()


    return (
        <div>
            <div className="navContent w-full flex justify-between items-center">

                <div className="flex gap-7">
                    <a href="#_" className='font-kanit text-sm font-semibold cursor-default'>
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>RAISE CAPITAL</span>
                    </a>
                    <a href="#_" className='font-kanit text-sm font-semibold cursor-default'>
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>BROWSE PROJECTS</span>
                    </a>
                </div>
                {/* Logo */}
                <div className="text-3xl font-anton cursor-default"><Link href="/">PitchMeACoin</Link></div>
                {!(session) &&
                <div className="flex items-center gap-6">
                    <Link href="/signin" className="font-kanit text-sm font-semibold cursor-default">
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>SIGN IN</span>
                    </Link>
                    <div className="button ">
                        <a href="" className="border-2 hover:border-[#3198de] transition-all duration-300 relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-mono font-medium tracking-tighter text-white  group">
                            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3198de] rounded-full group-hover:w-56 group-hover:h-56"></span>
                            <span className="relative font-kanit">GET STARTED</span>
                        </a>
                    </div>
                </div>
                }
                {(session) &&
                <div className="flex items-center gap-6">
                    <Link href="/dashboard" className="font-kanit text-sm font-semibold cursor-default">
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>Dashboard</span>
                    </Link>
                    <button onClick={() => signOut()}>Sign out</button>
                    <img src={session.user.image} className='rounded-full w-7'/>
                </div>
                }
            </div>
        </div>
    )
}

export default Navbar