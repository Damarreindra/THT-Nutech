import React from 'react';
import Navbar from './Navbar';

function Layout({ children }) {

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex-grow">
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl py-6 px-2 sm:px-2 sm:py-6 lg:px-4 lg:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
