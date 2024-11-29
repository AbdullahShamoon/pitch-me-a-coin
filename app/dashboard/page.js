'use client'
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
    const { data: session } = useSession()
    return (
        <div>
            <h1>Dashboard</h1>
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