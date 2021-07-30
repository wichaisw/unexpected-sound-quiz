import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 z-50 absolute w-full p-2">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-10">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            {/* <div className="hidden sm:block sm:ml-6"> */}
            <div className="sm:block sm:ml-6">
              <div className="flex space-x-4 items-center">
                <Link to="/home" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link to="/questions" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Play Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
