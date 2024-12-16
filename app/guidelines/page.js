import React from 'react';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

const GuidelinesPage = () => {
  return (
    <>
      {/* Navbar */}
      <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
        <Navbar />
      </div>

      <div className="w-full min-h-screen bg-gray-50 py-10 px-10">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Platform Guidelines</h1>
          <p className="text-gray-600 text-lg">
            Follow these guidelines to make the most out of Pitch Me A Coin. Whether you're a creator or a backer, these rules ensure a smooth and secure experience.
          </p>
        </div>

        {/* Table of Contents */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li><Link href="#creators" className="text-blue-600 hover:underline">For Creators</Link></li>
            <li><Link href="#backers" className="text-blue-600 hover:underline">For Backers</Link></li>
            <li><Link href="#general-guidelines" className="text-blue-600 hover:underline">General Guidelines</Link></li>
          </ul>
        </div>

        {/* For Creators Section */}
        <section id="creators" className="mt-10 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">📢 For Creators</h2>
          <p className="text-gray-700 mb-6">
            As a creator, you have the opportunity to share your ideas with the world and receive support. Here’s how you can make your campaign successful.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong>Be Transparent:</strong> Clearly describe your project, deliverables, and goals.</li>
            <li><strong>Set Realistic Goals:</strong> Ensure your funding goal is achievable based on your needs.</li>
            <li><strong>Use High-Quality Media:</strong> Add images, videos, and compelling descriptions to attract backers.</li>
            <li><strong>Update Backers:</strong> Keep backers informed about progress and changes.</li>
            <li><strong>Fulfill Your Promises:</strong> Deliver on your commitments to build trust with your backers.</li>
          </ul>
        </section>

        {/* For Backers Section */}
        <section id="backers" className="mt-10 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">🤝 For Backers</h2>
          <p className="text-gray-700 mb-6">
            Backers are the heart of crowdfunding. Here are some key guidelines for supporting projects.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong>Do Your Research:</strong> Check the creator's background and project details before backing.</li>
            <li><strong>Understand the Risks:</strong> Crowdfunding is not a guarantee of success or delivery.</li>
            <li><strong>Ask Questions:</strong> Contact creators if you need clarification before supporting their project.</li>
            <li><strong>Support Creators:</strong> Your contributions empower creators to turn ideas into reality.</li>
          </ul>
        </section>

        {/* General Guidelines Section */}
        <section id="general-guidelines" className="mt-10 bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">📜 General Guidelines</h2>
          <p className="text-gray-700 mb-6">
            These general guidelines apply to everyone using Pitch Me A Coin to ensure a safe, fair, and enjoyable experience.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li><strong>Respect the Community:</strong> Avoid hate speech, abusive content, or harmful projects.</li>
            <li><strong>Follow Our Policies:</strong> Adhere to the platform's <Link href="#" className="text-blue-600 hover:underline">Terms of Use</Link> and <Link href="#" className="text-blue-600 hover:underline">Privacy Policy</Link>.</li>
            <li><strong>Report Misuse:</strong> Report suspicious projects or users for investigation.</li>
            <li><strong>Be Kind and Patient:</strong> Delays can happen, so patience is appreciated.</li>
          </ul>
        </section>

        {/* Call-to-Action */}
        <div className="mt-10 bg-blue-600 p-8 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Make a Difference?</h2>
          <p className="text-white text-lg mb-4">
            Start your project or support a creator today. Your support can bring incredible ideas to life.
          </p>
          <Link href="/signin" className="bg-white text-blue-600 font-bold py-3 px-6 rounded-md hover:bg-gray-100">
            Start a Project
          </Link>
        </div>

        {/* Footer */}
        <footer className="text-center mt-10">
          <p className="text-gray-600 text-sm">
            Need help? Visit our <Link href="/faq" className="text-blue-600 hover:underline">FAQ</Link> or <Link href="/contact" className="text-blue-600 hover:underline">Contact Us</Link> page.
          </p>
        </footer>
      </div>
    </>
  );
};

export default GuidelinesPage;

export async function generateMetadata({ params }) {
  return {
      title: "Guidelines - PitchMeACoin",
  }
}