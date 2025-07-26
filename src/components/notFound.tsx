import Link from 'next/link';
import React from 'react';

const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
`;

export default function NotFound() {
  return (
    <>
      <style>{floatAnimation}</style>
      

      <main className="flex items-center justify-center h-screen bg-black text-white px-4">
        <div className="text-center">
          

          <h1 
            className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-red-500 to-white"
            style={{ animation: 'float 6s ease-in-out infinite' }}
          >
            404
          </h1>
          
        
          <h2 className="mt-4 text-2xl md:text-4xl font-bold text-gray-200">
            Page Not Found
          </h2>
          
         
          <p className="mt-4 text-base md:text-lg text-gray-400">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
          
          <div className="mt-8">
           
            <Link 
              href="/" 
              className="inline-block px-6 py-3 text-base font-semibold text-red-500 bg-white rounded-lg shadow-md hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2  transition-transform transform hover:scale-105 active:scale-95"
            >
              Go Back Home
            </Link>
          </div>

        </div>
      </main>
    </>
  );
}
