import React from 'react'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

const PrivacyPolicy = () => {
    return (

        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
                <Navbar />
            </div>
            <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Privacy Policy</h1>

                    <p className="text-gray-700 mb-4">
                        <strong>Effective Date:</strong> [12-02-2023]
                    </p>

                    <p className="text-gray-700 mb-6">
                        <strong>Pitch Me a Coin</strong> We are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
                    </p>

                    {/* 1. Information We Collect */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Information We Collect</h2>

                    <h3 className="text-xl font-medium text-gray-800 mt-4">1.1 Personal Information</h3>
                    <p className="text-gray-700 mb-4">
                        We collect personal information when you register, create a project, or support a project. This may include your name, email address, phone number, and payment details.
                    </p>

                    <h3 className="text-xl font-medium text-gray-800 mt-4">1.2 Non-Personal Information</h3>
                    <p className="text-gray-700 mb-4">
                        We may collect non-personal information such as IP address, browser type, operating system, and other technical details to optimize site performance and analytics.
                    </p>

                    <h3 className="text-xl font-medium text-gray-800 mt-4">1.3 Cookies</h3>
                    <p className="text-gray-700 mb-6">
                        We use cookies to enhance your experience and analyze site usage. You can manage your cookie preferences through your browser settings.
                    </p>

                    {/* 2. How We Use Your Information */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Your Information</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>To provide and improve our services.</li>
                        <li>To process transactions securely.</li>
                        <li>To communicate with you about projects and updates.</li>
                        <li>To personalize your experience on our platform.</li>
                        <li>To comply with legal obligations.</li>
                    </ul>

                    {/* 3. How We Share Your Information */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. How We Share Your Information</h2>
                    <p className="text-gray-700 mb-4">
                        We do not sell or rent your information to third parties. However, we may share your information in the following cases:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>With service providers that help us operate the platform.</li>
                        <li>With legal authorities if required by law.</li>
                        <li>To protect our rights, safety, and platform integrity.</li>
                    </ul>

                    {/* 4. Your Rights */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Your Rights</h2>
                    <p className="text-gray-700 mb-6">
                        You have the right to:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Access and review your personal data.</li>
                        <li>Request correction or deletion of your data.</li>
                        <li>Opt-out of non-essential communications and cookies.</li>
                    </ul>

                    <p className="text-gray-700 mb-4">
                        To exercise your rights, contact us at: <Link href="mailto:support@pitchmeacoin.com" className="text-indigo-600 underline">support@pitchmeacoin.com</Link>.
                    </p>

                    {/* 5. Data Security */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Data Security</h2>
                    <p className="text-gray-700 mb-6">
                        We implement industry-standard security measures to protect your data. However, no method of transmission or storage is 100% secure. Please safeguard your account credentials.
                    </p>

                    {/* 6. Third-Party Links */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Third-Party Links</h2>
                    <p className="text-gray-700 mb-6">
                        Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites.
                    </p>

                    {/* 7. Updates to the Privacy Policy */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Updates to This Privacy Policy</h2>
                    <p className="text-gray-700 mb-6">
                        We may update this Privacy Policy from time to time. Changes will be posted on this page, and the "Effective Date" will be revised accordingly.
                    </p>

                    {/* 8. Contact Us */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at:
                    </p>
                    <ul className="list-none text-gray-700 mb-6">
                        <li><strong>Email:</strong> <Link href="mailto:support@pitchmeacoin.com" className="text-indigo-600 underline">support@pitchmeacoin.com</Link></li>
                        <li><strong>Phone:</strong> [Insert Phone Number]</li>
                    </ul>

                    <p className="text-gray-700 text-center mt-8">
                        This Privacy Policy was last updated on <strong>[1-11-2024]</strong>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy

export async function generateMetadata({ params }) {
    return {
        title: "Privacy Policy - PitchMeACoin",
    }
}
