import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const { darkMode, toggleTheme } = useContext(AppContext);

  return (
    <div className='w-full border-b border-blue-200 shadow-blue-100 shadow-md py-4 fixed top-0 z-10 transition-colors duration-300
                    bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-sm'>
      
      <header className='flex justify-between items-center max-w-[720px] mx-auto px-5'>
        
        {/* Title */}
        <h1 className='md:text-3xl max-md:text-2xl font-bold uppercase tracking-tight
                       text-gray-900 dark:text-white'>
          CodeHelp Blogs
        </h1>

        {/* Toggle Switch */}
        <div className="flex items-center rounded-full p-1 gap-2 cursor-pointer transition-colors duration-300
                        bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-transparent">
            
            {/* Light Button (Sun) */}
            <button
                onClick={() => darkMode && toggleTheme()}
                className={`flex items-center justify-center px-2 py-1.5 rounded-full transition-all duration-300 ${
                    !darkMode 
                    ? "bg-white text-orange-500 shadow-sm transform scale-105 ring-1 ring-gray-200" // Active (Light Mode)
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-100" // Inactive (Fix: Added dark:hover:text-gray-100)
                }`}
            >
                <MdLightMode className='text-xl'/>
            </button>

            {/* Dark Button (Moon) */}
            <button
                onClick={() => !darkMode && toggleTheme()}
                className={`flex items-center justify-center px-2 py-1.5 rounded-full transition-all duration-300 ${
                    darkMode 
                    ? "bg-gray-600 text-blue-300 shadow-md transform scale-105" // Active (Dark Mode)
                    : "text-gray-400 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-100" // Inactive (Fix: Added dark:hover:text-gray-100)
                }`}
            >
                <MdDarkMode className='text-xl'/>
            </button>

        </div>

      </header>
    </div>
  )
}

export default Header