'use client'

import React from 'react'
import Navbar from '@/components/Navbar'
import Link from 'next/link'

const TermsOfService = () => {
    return (
        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
                <Navbar />
            </div>
            <div className="bg-gray-50 min-h-screen py-10 px-6 md:px-20 lg:px-40">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">Terms of Service</h1>

                    <p className="text-gray-700 mb-6">
                        Welcome to <strong>Pitch Me a Coin</strong> . By using our platform, you agree to these Terms of Service. Please read them carefully before using the platform.
                    </p>

                    {/* 1. Acceptance of Terms */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
                    <p className="text-gray-700 mb-6">
                        By accessing or using the Pitch Me a Coin website, you agree to comply with and be bound by these Terms of Service. If you do not agree, you may not use our platform.
                    </p>

                    {/* 2. Changes to Terms */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Changes to Terms</h2>
                    <p className="text-gray-700 mb-6">
                        We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of the platform indicates your acceptance of the new terms.
                    </p>

                    {/* 3. User Accounts */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Accounts</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Users must provide accurate and up-to-date information during registration.</li>
                        <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
                        <li>We may suspend or terminate your account if you violate these Terms.</li>
                    </ul>

                    {/* 4. Use of Platform */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Use of Platform</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>You may not use the platform for illegal or unauthorized purposes.</li>
                        <li>Users are prohibited from attempting to harm, disrupt, or misuse the platform.</li>
                        <li>Content you upload must comply with our content guidelines and not violate the rights of others.</li>
                    </ul>

                    {/* 5. Payment Terms */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Payment Terms</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Payments are processed securely through our payment partners.</li>
                        <li>Pitch Me a Coin does not store your payment details.</li>
                        <li>Refunds are subject to the terms of the specific project you support.</li>
                    </ul>

                    {/* 6. Content Ownership */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Content Ownership</h2>
                    <p className="text-gray-700 mb-6">
                        Content uploaded by users remains the property of the user. However, by posting content, you grant Pitch Me a Coin a license to display, distribute, and promote it as part of our platform.
                    </p>

                    {/* 7. Intellectual Property */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Intellectual Property</h2>
                    <p className="text-gray-700 mb-6">
                        All platform content, logos, designs, and technology are the intellectual property of Pitch Me a Coin. You may not copy, modify, or distribute any part of our platform without our written consent.
                    </p>

                    {/* 8. Limitation of Liability */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Limitation of Liability</h2>
                    <p className="text-gray-700 mb-6">
                        Pitch Me a Coin is not responsible for any damages, loss of revenue, or data loss resulting from your use of the platform. We provide the platform "as is" without warranties of any kind.
                    </p>

                    {/* 9. Termination */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Termination</h2>
                    <p className="text-gray-700 mb-6">
                        We reserve the right to suspend or terminate your access to the platform if you violate these Terms of Service. Termination may occur without notice.
                    </p>

                    {/* 10. Governing Law */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Governing Law</h2>
                    <p className="text-gray-700 mb-6">
                        These Terms of Service are governed by the laws of [Insert Your Country/State]. Any disputes will be resolved in the jurisdiction of [Insert Country/State].
                    </p>

                    {/* 11. Dispute Resolution */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Dispute Resolution</h2>
                    <p className="text-gray-700 mb-6">
                        If you have any issues or disputes with Pitch Me a Coin, please contact us first to resolve the matter informally. Formal disputes will be subject to arbitration in accordance with [Insert Arbitration Details].
                    </p>

                    {/* 12. Contact Us */}
                    <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        If you have questions about these Terms of Service, you can contact us at:
                    </p>
                    <ul className="list-none text-gray-700 mb-6">
                        <li><strong>Email:</strong> <Link href="mailto:support@pitchmeacoin.com" className="text-indigo-600 underline">support@pitchmeacoin.com</Link></li>
                        <li><strong>Phone:</strong> [Insert Phone Number]</li>
                    </ul>

                    <p className="text-gray-700 text-center mt-8">
                        These Terms of Service were last updated on <strong>[12-02-2023]</strong>.
                    </p>
                </div>
            </div>
        </>
    )
}

export default TermsOfService

export async function generateMetadata({ params }) {
    return {
        title: "Terms of services - PitchMeACoin",
    }
}

