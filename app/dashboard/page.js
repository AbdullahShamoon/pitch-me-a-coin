'use client'
import React , { useEffect , useState} from 'react'
import Navbar from '@/components/Navbar'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'


const page = () => {
    const { data: session } = useSession()
    const router = useRouter()
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    useEffect(() => {
        if (!session) {
            router.push('/signin')
        }
    }, [session, router])

    return (
        <div>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
                <Navbar />
            </div>

            <div className="dashboard min-h-[100vh]">
                <h1 className='font-halloween text-center text-3xl bg-gray-900 pt-7 border-t border-black text-white'>Welcome to your <span className='text-yellow-500'>DASHBOARD</span></h1>

                <section className="py-10 my-auto dark:bg-gray-900">
                    <div className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                        <div
                            className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-4 rounded-xl h-fit self-center dark:bg-gray-800/40">
                            {/* <!--  --> */}
                            <div className="">
                                <h1
                                    className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 dark:text-white">
                                    Profile
                                </h1>
                                <h2 className="text-grey text-sm mb-4 dark:text-gray-400">Create Profile</h2>

                                {/* Form  */}

                                <form>
                                    {/* <!-- Cover Image --> */}
                                    <div
                                        className="w-full rounded-sm bg-[url('/cover.jpg')] bg-cover bg-center bg-no-repeat items-center">
                                        {/* <!-- Profile Image --> */}
                                        <div
                                            className={`mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('/profile.jpg')] bg-cover bg-center bg-no-repeat`}>

                                            <div className="bg-white/90 rounded-full w-6 h-6 text-center ml-28 mt-4">

                                                {/* <input type="file" name="profile" id="upload_profile" hidden required /> */}

                                                <label htmlFor="upload_profile">
                                                    <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none"
                                                        strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                                        </path>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="flex justify-end">

                                            {/* <input type="file" name="profile" id="upload_cover" hidden required /> */}

                                            <div
                                                className="bg-white flex items-center gap-1 rounded-tl-md px-2 text-center font-semibold">
                                                <label htmlFor="upload_cover" className="inline-flex items-center gap-1 cursor-pointer">Cover

                                                    <svg data-slot="icon" className="w-6 h-5 text-blue-700" fill="none" strokeWidth="1.5"
                                                        stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                                                        aria-hidden="true">
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z">
                                                        </path>
                                                        <path strokeLinecap="round" strokeLinejoin="round"
                                                            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z">
                                                        </path>
                                                    </svg>
                                                </label>
                                            </div>

                                        </div>
                                    </div>
                                    <h2 className="text-center mt-1 font-semibold dark:text-gray-300">Upload Profile and Cover Image
                                    </h2>
                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                        <div className="w-full  mb-4 mt-6">
                                            <label htmlFor="" className="mb-2 dark:text-gray-300">Full Name</label>
                                            <input type="text"
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder={session?.user?.name} />
                                        </div>
                                        <div className="w-full  mb-4 lg:mt-6">
                                            <label htmlFor="" className=" dark:text-gray-300">Email</label>
                                            <input type="text"
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder={session?.user?.email} />
                                        </div>
                                    </div>

                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                        <div className="w-full ">
                                            <label htmlFor="" className="mb-2 dark:text-gray-300">Username</label>
                                            <input type="text" onChange={handleChange} name='username'
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Username" />
                                        </div>
                                        <div className="w-full">
                                            <h3 className="dark:text-gray-300 mb-2">Date Of Birth</h3>
                                            <input type="date" onChange={handleChange} name='dob'
                                                className="text-grey p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800" />
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                        <div className="w-full  mb-4 mt-6">
                                            <label htmlFor="" className="mb-2 dark:text-gray-300">Profile Pic</label>
                                            <input type="text" onChange={handleChange} name='profile_pic'
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Profile pic URL" />
                                        </div>
                                        <div className="w-full  mb-4 lg:mt-6">
                                            <label htmlFor="" className=" dark:text-gray-300">Cover Pic</label>
                                            <input type="text" onChange={handleChange} name='cover_pic'
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Cover pic URL" />
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                        <div className="w-full  mb-4 mt-4">
                                            <label htmlFor="" className="mb-2 dark:text-gray-300">Razorpay ID</label>
                                            <input type="text" onChange={handleChange} name='razorpay_id'
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Razorpay ID" />
                                        </div>
                                    </div>
                                    <div className="flex lg:flex-row md:flex-col sm:flex-col xs:flex-col gap-2 justify-center w-full">
                                        <div className="w-full  mb-4">
                                            <label htmlFor="" className="mb-2 dark:text-gray-300">Razorpay Secret</label>
                                            <input type="text" onChange={handleChange} name='razorpay_secret'
                                                className="mt-2 p-4 w-full border-2 rounded-lg dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800"
                                                placeholder="Razorpay Secret" />
                                        </div>
                                    </div>
                                    {/* <div className="w-full rounded-lg bg-blue-500 mt-4 text-white text-lg font-semibold">
                                                <button type="submit" className="w-full p-4">Save</button>
                                            </div> */}
                                    <div className="button w-full my-5 flex justify-center">
                                        <button type='submit' className="relative w-[90%] px-6 py-3 font-bold text-white group text-center">
                                            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-blue-700 group-hover:translate-x-0 group-hover:translate-y-0"></span>
                                            <span className="absolute inset-0 w-full h-full border-4 border-white   "></span>
                                            <span className="relative ">Save</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>



            </div>

            {/* Signed in as {session.user.name} <br />
                    Email : {session.user.email} <br />
                    Image :<img src={session.user.image} /> <br />
                    <button onClick={() => signOut()}>Sign out</button> */}

        </div>
    )
}

export default page