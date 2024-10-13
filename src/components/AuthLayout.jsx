import React from 'react'

function AuthLayout({children}) {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <div className="flex-grow ">
        <main className="flex-grow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8 lg:py-12">

            {children}


          </div>
        </main>
      </div>
    </div>
  )
}

export default AuthLayout