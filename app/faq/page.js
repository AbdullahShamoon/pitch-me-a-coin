import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const FAQPage = () => {
    return (
        <>
            {/* Navbar */}
            <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
                <Navbar />
            </div>

            <div className="w-full min-h-screen bg-gray-50 py-10 px-20 mb-3">
                {/* Header Section */}
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">Frequently Asked Questions</h1>
                    <p className="text-gray-600 text-lg">
                        Got questions? We have answers. Explore the most common questions about Pitch Me A Coin.
                    </p>
                </div>

                {/* FAQ Sections */}
                <div className="mt-10">

                    {/* General Questions */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">➡️ General Questions</h2>
                        <FAQItem
                            question="What is Pitch Me A Coin?"
                            answer="Pitch Me A Coin is a crowdfunding platform where creators pitch their ideas, and backers contribute to bring those ideas to life. It allows creators to connect with a supportive community and raise funds for their innovative projects."
                        />
                        <FAQItem
                            question="How does Pitch Me A Coin work?"
                            answer="Creators submit their project ideas, set funding goals, and launch their campaigns. Backers can browse through the projects, contribute funds, and track the project's progress as it reaches its goals."
                        />
                        <FAQItem
                            question="Who can use Pitch Me A Coin?"
                            answer="Anyone with an idea for a creative project can use Pitch Me A Coin as a creator. Anyone interested in supporting a project can join as a backer."
                        />
                    </section>

                    {/* For Backers */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">➡️ For Backers</h2>
                        <FAQItem
                            question="How can I support a project?"
                            answer="To support a project, simply browse the available projects, select one you love, and contribute the amount you'd like to support it with."
                        />
                        <FAQItem
                            question="What do I get in return for supporting a project?"
                            answer="Depending on the creator’s campaign, you might receive exclusive rewards, updates, or early access to the final product. Check each campaign’s details for specific rewards."
                        />
                        <FAQItem
                            question="Can I cancel my support or request a refund?"
                            answer="Once a contribution is made, it is typically non-refundable. However, if the project is canceled, you may be eligible for a refund. Contact support if you have concerns."
                        />
                    </section>

                    {/* For Creators */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">➡️ For Creators</h2>
                        <FAQItem
                            question="How do I create a project on Pitch Me A Coin?"
                            answer="To create a project, sign up as a creator, fill out the project details (like title, description, funding goal, and cover image), and submit it for review. Once approved, your campaign goes live."
                        />
                        <FAQItem
                            question="Are there any fees for creators?"
                            answer="Yes, Pitch Me A Coin charges a small service fee on successfully funded campaigns to cover operational costs. Specific fee details can be found in our terms of service."
                        />
                        <FAQItem
                            question="What happens if I don’t reach my funding goal?"
                            answer="If the campaign does not reach its funding goal, funds may be returned to the backers depending on the funding type (all-or-nothing or flexible funding)."
                        />
                    </section>

                    {/* Payments & Refunds */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">➡️ Payments & Refunds</h2>
                        <FAQItem
                            question="How are payments processed on Pitch Me A Coin?"
                            answer="We use secure third-party payment gateways to process payments from backers. Your payment details are encrypted and never stored on our servers."
                        />
                        <FAQItem
                            question="Can I get a refund?"
                            answer="Refunds depend on the creator's campaign policy and the platform's guidelines. If a campaign is canceled or doesn’t meet its goal, you may be eligible for a refund."
                        />
                    </section>

                    {/* Security & Privacy */}
                    <section className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-800 mb-6">➡️ Security & Privacy</h2>
                        <FAQItem
                            question="Is my payment information safe?"
                            answer="Yes, your payment details are processed using industry-standard encryption and secure payment gateways. We do not store your payment details on our servers."
                        />
                        <FAQItem
                            question="How is my personal information handled?"
                            answer="Your personal information is stored securely and only used to facilitate your experience on Pitch Me A Coin. We follow best practices to protect your data."
                        />
                    </section>

                </div>

                {/* Contact Us Section */}
                <footer className="text-center mt-10">
                    <p className="text-gray-600 text-sm">
                        Still have questions? <Link href="/contact" className="text-blue-600 font-bold">Contact Us</Link> and we'll be happy to help.
                    </p>
                </footer>
            </div>
        </>
    );
};

// FAQ Item Component
const FAQItem = ({ question, answer }) => {
    return (
        <div className="bg-white p-6 mb-6 rounded-lg shadow-md">
            <h3 className="text-lg font-bold text-gray-800 mb-2">{question}</h3>
            <p className="text-gray-700">{answer}</p>
        </div>
    );
};

export default FAQPage;
