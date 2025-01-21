import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
   <div>
     <div className="h-16 md:h-18"></div>
     <div className="bg-main text-white py-4 fixed bottom-0 right-0 left-0">
      {/* Container to wrap the content */}
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6" dir="rtl">
        {/* Right side: Social media icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" passHref className='ml-4'>
            <i className="fab fa-facebook-f text-white hover:text-blue-600 transition-all" style={{ fontSize: '20px' }}></i>
          </Link>
          <Link href="https://twitter.com" passHref>
            <i className="fab fa-twitter text-white hover:text-blue-400 transition-all" style={{ fontSize: '20px' }}></i>
          </Link>
          <Link href="https://instagram.com" passHref>
            <i className="fab fa-instagram text-white hover:text-pink-500 transition-all" style={{ fontSize: '20px' }}></i>
          </Link>
        </div>

        {/* Left side: Copyright */}
        <div className="text-sm">
          &copy; 2024 Safer. All rights reserved to Deltawy.
        </div>
      </div>
    </div>
   </div>
  );
}
