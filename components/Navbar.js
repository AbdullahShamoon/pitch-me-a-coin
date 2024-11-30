'use client'
import React, { useRef } from 'react'
import Link from 'next/link'
import { useSession, signIn, signOut } from "next-auth/react"


const Navbar = () => {
    const { data: session } = useSession()
    const r = useRef();
    const s = useRef();

    return (
        <div>
            <div className="navContent w-full flex justify-between items-center">

                <div className="flex gap-7 h-12 items-center w-72">
                    <Link href="#_" className='font-kanit text-sm font-semibold cursor-default'>
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>RAISE CAPITAL</span>
                    </Link>
                    <Link href="#_" className='font-kanit text-sm font-semibold cursor-default'>
                        <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>BROWSE PROJECTS</span>
                    </Link>
                </div>
                {/* Logo */}
                <div className="text-3xl font-anton flex cursor-default h-12 w-fit items-start"><Link href="/">PitchMeACoin</Link></div>
                {!(session) &&
                    <div className="flex items-center justify-end gap-6 w-72">
                        <Link href="/signin" className="font-kanit text-sm font-semibold cursor-default">
                            <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>SIGN IN</span>
                        </Link>
                        <div className="button ">
                            <Link href="" className="border-2 hover:border-[#3198de] transition-all duration-300 relative inline-flex items-center justify-center px-2 py-1 overflow-hidden font-mono font-medium tracking-tighter text-white  group">
                                <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-[#3198de] rounded-full group-hover:w-56 group-hover:h-56"></span>
                                <span className="relative font-kanit">GET STARTED</span>
                            </Link>
                        </div>
                    </div>
                }
                {(session) &&
                    // <div className="flex items-center gap-6">
                    //     <Link href="/dashboard" className="font-kanit text-sm font-semibold cursor-default">
                    //         <span className='hover:text-[#3198de] transition-all duration-300 cursor-pointer'>Dashboard</span>
                    //     </Link>
                    //     <button onClick={() => signOut()}>Sign out</button>
                    //     <img src={session.user.image} className='rounded-full w-7'/>
                    // </div>




                    <div className="flex items-start justify-center w-72 h-12  relative">
                        <div className="absolute inset-0 rounded-lg drop-shadow-xl " >
                            <div aria-label="header" className="flex space-x-4 items-center ">
                                <div aria-label="avatar" className="flex mr-auto items-center gap-3">
                                    <img
                                        src={session.user.image}
                                        alt="avatar"
                                        className="w-10 shrink-0 rounded-full"
                                    />
                                    <div className="space-y-2 flex flex-col flex-1 truncate">
                                        <div className="font-medium relative text-md leading-tight text-white">
                                            <span className="flex">
                                                <span className="truncate relative pr-8 font-kanit">
                                                    {session.user.name}
                                                    <span
                                                        aria-label="verified"
                                                        className="absolute top-1/2 -translate-y-1/2 right-1 inline-block rounded-full"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            aria-hidden="true"
                                                            className="w-5 h-5 text-cyan-400"
                                                            width="24"
                                                            height="24"
                                                            viewBox="0 0 24 24"
                                                            stroke-width="2"
                                                            stroke="currentColor"
                                                            fill="none"
                                                            stroke-linecap="round"
                                                            stroke-linejoin="round"
                                                        >
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                            <path
                                                                d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z"
                                                                stroke-width="0"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <p className="font-normal text-sm leading-tight text-white truncate font-kanit">
                                            {session.user.email}
                                        </p>
                                    </div>
                                </div>
                                
                                <button onClick={() =>{ 
                                    r.current.classList.toggle("hidden")
                                    s.current.classList.toggle("rotate-180")
                                    }} onBlur={()=>setTimeout(() => {
                                        r.current.classList.add("hidden")
                                        s.current.classList.remove("rotate-180")
                                    }, 200)} >

                                    <svg
                                        ref={s}
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        className="w-6 h-6 text-white shrink-0 transition-all duration-300"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        stroke-width="2"
                                        stroke="currentColor"
                                        fill="none"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                    >
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                        <path d="M8 9l4 -4l4 4"></path>
                                        <path d="M16 15l-4 4l-4 -4"></path>
                                    </svg>
                                </button>

                            </div>
                            <div ref={r} className='hidden'>
                                <div aria-label="navigation" className="py-2 text-black flex justify-end  ">
                                    <nav className="flex flex-col gap-1 w-[75%] border rounded-3xl bg-white drop-shadow-2xl p-3">
                                        <Link
                                            href="/"
                                            className="flex items-center leading-6 space-x-3 justify-between w-full text-lg focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200 "
                                        >
                                    
                                            <span>Account Settings</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-7 h-7"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
                                                <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/"
                                            className="flex items-center leading-6 space-x-3 justify-between w-full text-lg focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200"
                                        >
                                            <span>Integrations</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-7 h-7"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M9.785 6l8.215 8.215l-2.054 2.054a5.81 5.81 0 1 1 -8.215 -8.215l2.054 -2.054z"
                                                ></path>
                                                <path d="M4 20l3.5 -3.5"></path>
                                                <path d="M15 4l-3.5 3.5"></path>
                                                <path d="M20 9l-3.5 3.5"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/"
                                            className="flex items-center leading-6 space-x-3 justify-between w-full text-lg focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200"
                                        >
                                            <span>Settings</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-7 h-7"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
                                                ></path>
                                                <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/"
                                            className="flex items-center leading-6 space-x-3 justify-between w-full text-lg focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200"
                                        >
                                            <span>Guide</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-7 h-7"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                                                <path
                                                    d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"
                                                ></path>
                                                <path d="M9 17h6"></path>
                                                <path d="M9 13h6"></path>
                                            </svg>
                                        </Link>
                                        <Link
                                            href="/"
                                            className="flex items-center leading-6 space-x-3 justify-between w-full text-lg  focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200"
                                        >
                                            <span>Helper Center</span>
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-7 h-7"
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24"
                                                stroke-width="2"
                                                stroke="currentColor"
                                                fill="none"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                            >
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                <path
                                                    d="M19.875 6.27c.7 .398 1.13 1.143 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z"
                                                ></path>
                                                <path d="M12 16v.01"></path>
                                                <path
                                                    d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"
                                                ></path>
                                            </svg>
                                        </Link>

                                        <div aria-label="footer" className="pt-2">
                                            <button
                                            onClick={() => signOut()}
                                                type="button"
                                                className="flex items-center space-x-3 justify-between w-full leading-6 text-lg  focus:outline-none hover:text-[#3198de] rounded-md transition-all duration-200"
                                            >
                                                <span>Logout</span>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    aria-hidden="true"
                                                    className="w-7 h-7"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    stroke-width="2"
                                                    stroke="currentColor"
                                                    fill="none"
                                                    stroke-linecap="round"
                                                    stroke-linejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                                    <path
                                                        d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"
                                                    ></path>
                                                    <path d="M9 12h12l-3 -3"></path>
                                                    <path d="M18 15l3 -3"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>


                }
            </div>
        </div>
    )
}

export default Navbar