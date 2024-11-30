'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
    const { data: session } = useSession()
    return (
        <div>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-gradient-to-b from-black to-[#ecf0f1] ">
                <Navbar />
            </div>
            <h1>Dashboard</h1>
            {(!session)&& 
                // const router = useRouter()
                // router.push('/dashboard')
                useRouter().push('/signin')

            }
            {(session) &&
                <>
                    Signed in as {session.user.name} <br />
                    Email : {session.user.email} <br />
                    Image :<img src={session.user.image} /> <br />
                    <button onClick={() => signOut()}>Sign out</button>
                </>
            }
        </div>
    )
}

export default page