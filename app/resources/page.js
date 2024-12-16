import React from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const ResourcesPage = () => {
  return (
    <>
    {/* Navbar */}
    <div className="nav w-full px-[4.4rem] py-4 text-white bg-[#1d181f] ">
    <Navbar />
</div>
    <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Startup Resources</h1>
        <p className="text-gray-600 text-lg">
          Get all the essential resources, tools, and knowledge you need to launch and grow your startup.  
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mt-10 w-[92%]">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Table of Contents</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><Link href="#learning-materials" className="text-blue-600 hover:underline">📘 Learning Materials</Link></li>
          <li><Link href="#tools" className="text-blue-600 hover:underline">🛠️ Startup Tools</Link></li>
          <li><Link href="#community" className="text-blue-600 hover:underline">🤝 Community & Mentorship</Link></li>
        </ul>
      </div>

      {/* Learning Materials Section */}
      <section id="learning-materials" className="mt-10 bg-white p-8 rounded-lg shadow-md w-[90%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">📘 Learning Materials</h2>
        <p className="text-gray-700 mb-6">
          Dive into these valuable learning resources to master the basics of launching and growing your startup.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li>
            <strong>Books:</strong> 
            <ul className="list-disc list-inside ml-6">
              <li><Link href="https://www.amazon.com/Lean-Startup" target="_blank" className="text-blue-600 hover:underline">📕 The Lean Startup by Eric Ries</Link></li>
              <li><Link href="https://www.amazon.com/Zero-to-One" target="_blank" className="text-blue-600 hover:underline">📕 Zero to One by Peter Thiel</Link></li>
              <li><Link href="https://www.amazon.com/Startup-Owner's-Manual" target="_blank" className="text-blue-600 hover:underline">📕 The Startup Owner's Manual by Steve Blank</Link></li>
            </ul>
          </li>
          <li>
            <strong>Online Courses:</strong> 
            <ul className="list-disc list-inside ml-6">
              <li><Link href="https://www.coursera.org/learn/startup" target="_blank" className="text-blue-600 hover:underline">📚 How to Start a Startup (Coursera)</Link></li>
              <li><Link href="https://www.udemy.com/course/startup-success/" target="_blank" className="text-blue-600 hover:underline">📚 Startup Success (Udemy)</Link></li>
            </ul>
          </li>
          <li>
            <strong>Blogs & Articles:</strong> 
            <ul className="list-disc list-inside ml-6">
              <li><Link href="https://ycombinator.com/library" target="_blank" className="text-blue-600 hover:underline">📖 Y Combinator Startup Library</Link></li>
              <li><Link href="https://www.forbes.com/startups" target="_blank" className="text-blue-600 hover:underline">📖 Forbes Startups</Link></li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Tools Section */}
      <section id="tools" className="mt-10 bg-white p-8 rounded-lg shadow-md w-[90%]">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🛠️ Essential Tools for Startups</h2>
        <p className="text-gray-700 mb-6">
          Launch faster and smarter with these powerful tools that make starting a startup easier.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><strong>Business Planning:</strong> <Link href="https://www.liveplan.com/" target="_blank" className="text-blue-600 hover:underline">LivePlan</Link></li>
          <li><strong>Marketing & Growth:</strong> <Link href="https://www.mailchimp.com/" target="_blank" className="text-blue-600 hover:underline">Mailchimp</Link></li>
          <li><strong>Project Management:</strong> <Link href="https://www.trello.com/" target="_blank" className="text-blue-600 hover:underline">Trello</Link></li>
          <li><strong>Accounting & Finance:</strong> <Link href="https://www.waveapps.com/" target="_blank" className="text-blue-600 hover:underline">Wave</Link></li>
        </ul>
      </section>

      {/* Community Section */}
      <section id="community" className="mt-10 bg-white p-8 rounded-lg shadow-md w-[90%] ">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🤝 Community & Mentorship</h2>
        <p className="text-gray-700 mb-6">
          Connect with experienced founders, join communities, and learn from mentors.
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-4">
          <li><Link href="https://www.ycombinator.com/" target="_blank" className="text-blue-600 hover:underline">💬 Y Combinator</Link></li>
          <li><Link href="https://startupgrind.com/" target="_blank" className="text-blue-600 hover:underline">💬 Startup Grind</Link></li>
          <li><Link href="https://www.reddit.com/r/startups/" target="_blank" className="text-blue-600 hover:underline">💬 Reddit Startups Community</Link></li>
        </ul>
      </section>

      {/* Call-to-Action */}
      <div className="mt-10 bg-blue-600 p-8 rounded-lg text-center w-[90%]">
        <h2 className="text-2xl font-bold text-white mb-4">Ready to Launch Your Startup?</h2>
        <p className="text-white text-lg mb-4">
          Use these resources to get started on your entrepreneurial journey. Ready to bring your idea to life?  
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

export default ResourcesPage;

export async function generateMetadata({ params }) {
  return {
      title: "Resources - PitchMeACoin",
  }
}
