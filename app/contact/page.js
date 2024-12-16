'use client'
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';

const ContactPage = () => {
    // Form state to handle inputs
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (can be connected to an API or backend)
        console.log('Form Data:', formData);
        alert('Thank you for reaching out! We will get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
    };

    return (
        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
                <Navbar />
            </div>

            <div className="w-full min-h-screen bg-gray-50 py-10 px-10 mb-3">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
                    <p className="text-gray-600 text-lg">
                        Have questions, feedback, or need support? Fill out the form below, and we'll get back to you shortly.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row mt-10 gap-10">

                    {/* Contact Form */}
                    <div className="w-full md:w-2/3 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-bold text-gray-600">Your Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-bold text-gray-600">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter your email address"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-bold text-gray-600">Subject</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Enter subject"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-bold text-gray-600">Message</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Write your message here"
                                    rows="5"
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="w-full md:w-1/3 bg-white p-8 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                        <p className="text-gray-700 mb-4">Reach out to us directly using the details below:</p>

                        <div className="space-y-4">
                            <div className="flex items-center">
                                <span className="text-blue-600 text-xl mr-4">📍</span>
                                <p>Bokaro Steel City, Jharkhand , 827010</p>
                            </div>

                            <div className="flex items-center">
                                <span className="text-blue-600 text-xl mr-4">📧</span>
                                <a href="mailto:shamoonmallick12@gmail.com" className='text-blue-600'>shamoonmallick12@gmail</a>
                            </div>

                            <div className="flex items-center">
                                <span className="text-blue-600 text-xl mr-4">📞</span>
                                <p>+91 6204189310</p>
                            </div>
                        </div>

                        
                    </div>

                </div>

                {/* Footer Section */}
                <footer className="text-center mt-10">
                    <p className="text-gray-600 text-sm">
                        We value your feedback and aim to respond within 48 hours.
                    </p>
                </footer>
            </div>
        </>
    );
};

export default ContactPage;
