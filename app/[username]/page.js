'use client'
import React from 'react'
import Navbar from '@/components/Navbar'
import { useState } from 'react'

const Username = ({ params }) => {
    const [rangeval, setRangeval] = useState(500);

    return (

        <div>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f]  ">
                <Navbar />
            </div>



            <section className="relative pt-36 pb-24">
                <img src="https://pagedone.io/asset/uploads/1705471739.png" alt="cover-image" className="w-full absolute top-0 left-0 z-0 h-60 object-cover" />
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                    <div className="flex items-center justify-center relative z-10 mb-2.5">
                        <img src="https://pagedone.io/asset/uploads/1705471668.png" alt="user-avatar-image" className="border-4 border-solid border-white rounded-full object-cover" />
                    </div>
                    <div className="flex flex-col sm:flex-row max-sm:gap-5 items-center justify-between mb-5">
                        <ul className="flex items-center gap-5">
                            <li> <a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12.5 14.0902L7.5 14.0902M2.5 9.09545V14.0902C2.5 15.6976 2.5 16.5013 2.98816 17.0006C3.47631 17.5 4.26198 17.5 5.83333 17.5H14.1667C15.738 17.5 16.5237 17.5 17.0118 17.0006C17.5 16.5013 17.5 15.6976 17.5 14.0902V10.9203C17.5 9.1337 17.5 8.24039 17.1056 7.48651C16.7112 6.73262 15.9846 6.2371 14.5313 5.24606L11.849 3.41681C10.9528 2.8056 10.5046 2.5 10 2.5C9.49537 2.5 9.04725 2.80561 8.151 3.41681L3.98433 6.25832C3.25772 6.75384 2.89442 7.0016 2.69721 7.37854C2.5 7.75548 2.5 8.20214 2.5 9.09545Z"
                                        stroke="black" strokeWidth="1.6" strokeLinecap="round" />
                                </svg>
                                <span className="font-medium text-base leading-7 text-gray-900">Home</span>
                            </a>
                            </li>
                            <li> <a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20"
                                    fill="none">
                                    <path d="M4.12567 1.13672L1 18.8633" stroke="#E5E7EB" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                                <span className="font-medium text-base leading-7 text-gray-400">Account</span>
                            </a>
                            </li>
                            <li><a href="javascript:;" className="flex items-center gap-2 cursor-pointer group">
                                <svg xmlns="http://www.w3.org/2000/svg" width="5" height="20" viewBox="0 0 5 20"
                                    fill="none">
                                    <path d="M4.12567 1.13672L1 18.8633" stroke="#E5E7EB" strokeWidth="1.6"
                                        strokeLinecap="round" />
                                </svg>
                                <span className="font-medium text-base leading-7 text-gray-400">Profile</span>
                                <span
                                    className="rounded-full py-1.5 px-2.5 bg-indigo-50 flex items-center justify-center font-medium text-xs text-indigo-600">New</span>
                            </a>
                            </li>
                        </ul>
                        <div className="flex items-center gap-4">
                            <button
                                className="rounded-full border border-solid border-gray-300 bg-gray-50 py-3 px-4 text-sm font-semibold text-gray-900 shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-50 hover:bg-gray-100 hover:border-gray-300">Message</button>
                            <button
                                className="rounded-full border border-solid border-indigo-600 bg-indigo-600 py-3 px-4 text-sm font-semibold text-white whitespace-nowrap shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:bg-indigo-700 hover:border-indigo-700">Book
                                a Session</button>
                        </div>
                    </div>
                    <h3 className="text-center font-manrope font-bold text-3xl leading-10 text-gray-900 mb-3">{params.username}</h3>
                    <p className="font-normal text-base leading-7 text-gray-500 text-center mb-8">A Full Stack Web Developer</p>
                    <div className="flex items-center justify-center gap-5">
                        <a href="javascript:;"
                            className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1115_412)">
                                    <path className="fill-blue-400 transition-all duration-500 group-hover:fill-white"
                                        d="M20 10.2391C20 9.56523 19.9333 8.86958 19.8222 8.21741H10.2V12.0652H15.7111C15.4889 13.3044 14.7556 14.3913 13.6667 15.087L16.9556 17.587C18.8889 15.8261 20 13.2609 20 10.2391Z"
                                        fill="" />
                                    <path className="fill-green-400 transition-all duration-500 group-hover:fill-white"
                                        d="M10.2 19.9783C12.9556 19.9783 15.2667 19.087 16.9556 17.5652L13.6667 15.087C12.7556 15.6957 11.5778 16.0435 10.2 16.0435C7.53337 16.0435 5.28893 14.2826 4.46671 11.9348L1.08893 14.4783C2.82226 17.8479 6.33337 19.9783 10.2 19.9783Z"
                                        fill="#34A353" />
                                    <path className="fill-yellow-400 transition-all duration-500 group-hover:fill-white"
                                        d="M4.46673 11.913C4.0445 10.6739 4.0445 9.32608 4.46673 8.08695L1.08895 5.52173C-0.355496 8.34782 -0.355496 11.6739 1.08895 14.4783L4.46673 11.913Z"
                                        fill="#F6B704" />
                                    <path className="fill-red-400 transition-all duration-500 group-hover:fill-white"
                                        d="M10.2 3.97827C11.6445 3.95653 13.0667 4.5 14.1112 5.47827L17.0223 2.6087C15.1778 0.913046 12.7334 2.58834e-06 10.2 0.0217417C6.33337 0.0217417 2.82226 2.15218 1.08893 5.52174L4.46671 8.08696C5.28893 5.7174 7.53337 3.97827 10.2 3.97827Z"
                                        fill="#E54335" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1115_412">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="javascript:;"
                            className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_1115_52)">
                                    <path className="fill-indigo-600 transition-all duration-500 group-hover:fill-white"
                                        d="M10.0001 20C15.523 20 20.0001 15.5228 20.0001 10C20.0001 4.47715 15.523 0 10.0001 0C4.47727 0 0.00012207 4.47715 0.00012207 10C0.00012207 15.5228 4.47727 20 10.0001 20Z"
                                        fill="" />
                                    <path className="fill-white transition-all duration-500 group-hover:fill-indigo-700"
                                        d="M13.2516 3.06946H11.0364C9.72179 3.06946 8.25958 3.62236 8.25958 5.52793C8.266 6.1919 8.25958 6.82779 8.25958 7.54345H6.73877V9.96352H8.30665V16.9305H11.1877V9.91754H13.0893L13.2613 7.53666H11.1381C11.1381 7.53666 11.1428 6.47754 11.1381 6.16997C11.1381 5.41693 11.9216 5.46005 11.9688 5.46005C12.3416 5.46005 13.0666 5.46114 13.2527 5.46005V3.06946H13.2516V3.06946Z"
                                        fill="" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1115_52">
                                        <rect width="20" height="20" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </a>
                        <a href="javascript:;"
                            className="p-3 rounded-full border border-solid border-gray-300 bg-gray-50 group transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                            <svg className="stroke-red-600 transition-all duration-500 group-hover:stroke-white" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M14.1667 5.83333V5.875M9.16673 17.5H10.8334C13.9761 17.5 15.5474 17.5 16.5237 16.5237C17.5001 15.5474 17.5001 13.976 17.5001 10.8333V9.16667C17.5001 6.02397 17.5001 4.45262 16.5237 3.47631C15.5474 2.5 13.9761 2.5 10.8334 2.5H9.16673C6.02403 2.5 4.45268 2.5 3.47637 3.47631C2.50006 4.45262 2.50006 6.02397 2.50006 9.16667V10.8333C2.50006 13.976 2.50006 15.5474 3.47637 16.5237C4.45268 17.5 6.02403 17.5 9.16673 17.5ZM13.3334 10C13.3334 11.8409 11.841 13.3333 10.0001 13.3333C8.15911 13.3333 6.66673 11.8409 6.66673 10C6.66673 8.15905 8.15911 6.66667 10.0001 6.66667C11.841 6.66667 13.3334 8.15905 13.3334 10Z"
                                    stroke="" strokeWidth="1.6" strokeLinecap="round" />
                            </svg>
                        </a>
                        <a href="javascript:;"
                            className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="fill-red-600 transition-all duration-500 group-hover:fill-white"
                                    d="M1.40288 6.21319C1.48321 4.97646 2.47753 4.00723 3.71535 3.9459C5.5078 3.8571 8.06973 3.75 10.0001 3.75C11.9304 3.75 14.4923 3.8571 16.2848 3.9459C17.5226 4.00723 18.5169 4.97646 18.5972 6.21319C18.6742 7.39808 18.7501 8.85604 18.7501 10C18.7501 11.144 18.6742 12.6019 18.5972 13.7868C18.5169 15.0235 17.5226 15.9928 16.2848 16.0541C14.4923 16.1429 11.9304 16.25 10.0001 16.25C8.06973 16.25 5.5078 16.1429 3.71535 16.0541C2.47753 15.9928 1.48321 15.0235 1.40288 13.7868C1.32591 12.6019 1.25006 11.144 1.25006 10C1.25006 8.85604 1.32591 7.39808 1.40288 6.21319Z"
                                    fill="#FC0D1B" />
                                <path className="fill-white transition-all duration-500 group-hover:fill-indigo-700" d="M8.12506 7.5V12.5L13.1251 10L8.12506 7.5Z" fill="white" />
                            </svg>
                        </a>
                        <a href="javascript:;"
                            className="p-3 rounded-full border border-solid border-gray-300 group bg-gray-50 transition-all duration-500 hover:bg-indigo-700 hover:border-indigo-700">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle className="transition-all duration-500 group-hover:fill-white" cx="10.0001" cy="10" r="8.75" fill="url(#paint0_linear_1115_481)" />
                                <path className="transition-all duration-500 group-hover:fill-indigo-700"
                                    d="M14.3667 6.38049C14.4446 5.87707 13.9659 5.47972 13.5183 5.67625L4.60307 9.59053C4.28208 9.73146 4.30556 10.2177 4.63848 10.3237L6.47703 10.9092C6.82792 11.0209 7.20789 10.9631 7.5143 10.7514L11.6594 7.88767C11.7844 7.80131 11.9207 7.97904 11.8139 8.08914L8.83013 11.1654C8.54069 11.4638 8.59814 11.9695 8.94629 12.1878L12.2869 14.2827C12.6616 14.5176 13.1436 14.2816 13.2137 13.8288L14.3667 6.38049Z"
                                    fill="white" />
                                <defs>
                                    <linearGradient id="paint0_linear_1115_481" x1="10.0001" y1="1.25" x2="10.0001" y2="18.75"
                                        gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#37BBFE" />
                                        <stop offset="1" stopColor="#007DBB" />
                                    </linearGradient>
                                </defs>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>


            <div className="my-4 flex flex-col 2xl:flex-row space-y-4 2xl:space-y-0 2xl:space-x-4">
                <div className=" w-full flex flex-col 2xl:w-1/3 items-center">
                    <div className="flex-1 w-[90%]  bg-white rounded-lg shadow-xl p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Personal Info</h4>
                        <ul className="mt-2 text-gray-700">
                            <li className="flex border-y py-2 ">
                                <span className="font-bold w-24">Full name:</span>
                                <span className="text-gray-700">Amanda S. Ross</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Birthday:</span>
                                <span className="text-gray-700">24 Jul, 1991</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Joined:</span>
                                <span className="text-gray-700">10 Jan 2022 (25 days ago)</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Mobile:</span>
                                <span className="text-gray-700">(123) 123-1234</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Email:</span>
                                <span className="text-gray-700">amandaross@example.com</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Location:</span>
                                <span className="text-gray-700">New York, US</span>
                            </li>
                            <li className="flex border-b py-2">
                                <span className="font-bold w-24">Languages:</span>
                                <span className="text-gray-700">English, Spanish</span>
                            </li>
                            <li className="flex items-center border-b py-2 space-x-2">
                                <span className="font-bold w-24">Elsewhere:</span>
                                <a href="#" title="Twitter">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm90493 110539c-6654 2976-13822 4953-21307 5835 7669-4593 13533-11870 16333-20535-7168 4239-15133 7348-23574 9011-6787-7211-16426-11694-27105-11694-20504 0-37104 16610-37104 37101 0 2893 320 5722 949 8450-30852-1564-58204-16333-76513-38806-3285 5666-5022 12109-5022 18661v4c0 12866 6532 24246 16500 30882-6083-180-11804-1876-16828-4626v464c0 17993 12789 33007 29783 36400-3113 845-6400 1313-9786 1313-2398 0-4709-247-7007-665 4746 14736 18448 25478 34673 25791-12722 9967-28700 15902-46120 15902-3006 0-5935-184-8860-534 16466 10565 35972 16684 56928 16684 68271 0 105636-56577 105636-105632 0-1630-36-3209-104-4806 7251-5187 13538-11733 18514-19185l17-17-3 2z" fill="#1da1f2"></path></svg>
                                </a>
                                <a href="#" title="LinkedIn">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 333333 333333" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd"><path d="M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm-18220 138885h28897v14814l418 1c4024-7220 13865-14814 28538-14814 30514-1 36157 18989 36157 43691v50320l-30136 1v-44607c0-10634-221-24322-15670-24322-15691 0-18096 11575-18096 23548v45382h-30109v-94013zm-20892-26114c0 8650-7020 15670-15670 15670s-15672-7020-15672-15670 7022-15670 15672-15670 15670 7020 15670 15670zm-31342 26114h31342v94013H96213v-94013z" fill="#0077b5"></path></svg>
                                </a>
                                <a href="#" title="Github">
                                    <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="0" height="0" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 640 640"><path d="M319.988 7.973C143.293 7.973 0 151.242 0 327.96c0 141.392 91.678 261.298 218.826 303.63 16.004 2.964 21.886-6.957 21.886-15.414 0-7.63-.319-32.835-.449-59.552-89.032 19.359-107.8-37.772-107.8-37.772-14.552-36.993-35.529-46.831-35.529-46.831-29.032-19.879 2.209-19.442 2.209-19.442 32.126 2.245 49.04 32.954 49.04 32.954 28.56 48.922 74.883 34.76 93.131 26.598 2.882-20.681 11.15-34.807 20.315-42.803-71.08-8.067-145.797-35.516-145.797-158.14 0-34.926 12.52-63.485 32.965-85.88-3.33-8.078-14.291-40.606 3.083-84.674 0 0 26.87-8.61 88.029 32.8 25.512-7.075 52.878-10.642 80.056-10.76 27.2.118 54.614 3.673 80.162 10.76 61.076-41.386 87.922-32.8 87.922-32.8 17.398 44.08 6.485 76.631 3.154 84.675 20.516 22.394 32.93 50.953 32.93 85.879 0 122.907-74.883 149.93-146.117 157.856 11.481 9.921 21.733 29.398 21.733 59.233 0 42.792-.366 77.28-.366 87.804 0 8.516 5.764 18.473 21.992 15.354 127.076-42.354 218.637-162.274 218.637-303.582 0-176.695-143.269-319.988-320-319.988l-.023.107z"></path></svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex-1 w-[90%] bg-white rounded-lg shadow-xl mt-4 p-8">
                        <h4 className="text-xl text-gray-900 font-bold">Activity log</h4>
                        <div className="relative px-4">
                            <div className="absolute h-full border border-dashed border-opacity-20 border-secondary"></div>

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">Profile informations changed.</p>
                                    <p className="text-xs text-gray-500">3 min ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">
                                        Connected with <a href="#" className="text-blue-600 font-bold">Colby Covington</a>.</p>
                                    <p className="text-xs text-gray-500">15 min ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">Invoice <a href="#" className="text-blue-600 font-bold">#4563</a> was created.</p>
                                    <p className="text-xs text-gray-500">57 min ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">
                                        Message received from <a href="#" className="text-blue-600 font-bold">Cecilia Hendric</a>.</p>
                                    <p className="text-xs text-gray-500">1 hour ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">New order received <a href="#" className="text-blue-600 font-bold">#OR9653</a>.</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}

                            {/* <!-- start::Timeline item --> */}
                            <div className="flex items-center w-full my-6 -ml-1.5">
                                <div className="w-1/12 z-10">
                                    <div className="w-3.5 h-3.5 bg-blue-600 rounded-full"></div>
                                </div>
                                <div className="w-11/12">
                                    <p className="text-sm">
                                        Message received from <a href="#" className="text-blue-600 font-bold">Jane Stillman</a>.</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            {/* <!-- end::Timeline item --> */}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col w-full 2xl:w-2/3 items-center">
                    <div className="flex-1 bg-white rounded-lg shadow-xl p-8 w-[90%]">
                        <h4 className="text-xl text-gray-900 font-bold">About</h4>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptates obcaecati numquam error et ut fugiat asperiores. Sunt nulla ad incidunt laboriosam, laudantium est unde natus cum numquam, neque facere. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, magni odio magnam commodi sunt ipsum eum! Voluptas eveniet aperiam at maxime, iste id dicta autem odio laudantium eligendi commodi distinctio!</p>
                    </div>
                    <div className="flex-1 bg-white rounded-lg shadow-xl mt-4 p-8 w-[90%]">
                        <h4 className="text-xl text-gray-900 font-bold">Statistics</h4>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-4">
                            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-sm text-indigo-600">Total Revenue</span>
                                    <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <svg className="w-12 h-12 p-2.5 bg-indigo-400 bg-opacity-20 rounded-full text-indigo-600 border border-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-end">
                                            <span className="text-2xl 2xl:text-3xl font-bold">$8,141</span>
                                            <div className="flex items-center ml-2 mb-1">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                <span className="font-bold text-sm text-gray-500 ml-0.5">3%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-sm text-green-600">New Orders</span>
                                    <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <svg className="w-12 h-12 p-2.5 bg-green-400 bg-opacity-20 rounded-full text-green-600 border border-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-end">
                                            <span className="text-2xl 2xl:text-3xl font-bold">217</span>
                                            <div className="flex items-center ml-2 mb-1">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                <span className="font-bold text-sm text-gray-500 ml-0.5">5%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 py-6 bg-gray-100 border border-gray-300 rounded-lg shadow-xl">
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-sm text-blue-600">New Connections</span>
                                    <span className="text-xs bg-gray-200 hover:bg-gray-500 text-gray-500 hover:text-gray-200 px-2 py-1 rounded-lg transition duration-200 cursor-default">7 days</span>
                                </div>
                                <div className="flex items-center justify-between mt-6">
                                    <div>
                                        <svg className="w-12 h-12 p-2.5 bg-blue-400 bg-opacity-20 rounded-full text-blue-600 border border-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </div>
                                    <div className="flex flex-col">
                                        <div className="flex items-end">
                                            <span className="text-2xl 2xl:text-3xl font-bold">54</span>
                                            <div className="flex items-center ml-2 mb-1">
                                                <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                                                <span className="font-bold text-sm text-gray-500 ml-0.5">7%</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className="payment flex items-center justify-center w-full mb-20">
                <div className="bg-white rounded-lg shadow-2xl p-9 w-[90%] ">
                    <h2 className="text-2xl font-bold mb-4">Make a Payment</h2>

                    <div className="mb-4">
                        <input type="text" className='border border-gray-400 rounded-lg py-1 px-2 w-full text-gray-800' id="name" placeholder="Enter your name" />
                        <input type="text" className='border border-gray-400 rounded-lg py-1 px-2 w-full my-3 text-gray-800' id="name" placeholder="Enter Message" />
                        <label for="price-range" className="block text-gray-700 font-bold mb-2">Amount</label>
                        <input type="range" id="price-range" className="w-full accent-indigo-600" min="0" max="1000" defaultValue={500} onChange={(event) => setRangeval(event.target.value)} />
                    </div>
                    <div className="flex justify-between text-gray-500">
                        <span id="minPrice">₹0</span>
                        <span id="maxPrice">₹1000</span>
                    </div>
                    <div className="payButton mt-4">
                        <a href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-700 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-700 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Pay ₹{rangeval}</span>
                        </a>
                    </div>
                </div>
            </div>


        </div >
    )
}

export default Username