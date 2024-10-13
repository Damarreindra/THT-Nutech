import React from 'react'

function UserInfoSkeleton() {
  return (
    <div className="flex mb-5 animate-pulse">
      <div className="flex-1 space-y-2">
        <div className="w-16 h-16 bg-gray-300 rounded-full"></div>
        <div className="h-5 w-32 bg-gray-300 rounded-md"></div>
        <div className="h-6 w-48 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex-1 space-y-2 p-4 rounded-2xl bg-gradient-to-r from-gray-200 to-gray-300">
        <div className="h-5 w-24 bg-gray-300 rounded-md"></div>
        <div className="h-8 w-40 bg-gray-300 rounded-md"></div>
        <div className="flex flex-row gap-1 mt-3">
          <div className="h-5 w-20 bg-gray-300 rounded-md"></div>
          <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}

export default UserInfoSkeleton