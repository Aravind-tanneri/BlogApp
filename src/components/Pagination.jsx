import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Pagination = () => {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  return (

    <div className='w-full flex justify-center items-center border-t-2 fixed bottom-0 select-none bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700 py-2 transition-all duration-300'>
      
      <div className='flex justify-between w-11/12 max-w-[670px]'>
        <div className='flex gap-x-2'> 
          
          { page > 1 && 
            (<button 
              className='rounded-md border-2 px-4 py-1 transition-all duration-200
              /* Light Mode Styles */
              border-gray-500 bg-yellow-200 text-black hover:bg-yellow-300
              /* Dark Mode Styles */
              dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:bg-gray-800'
              onClick={() => handlePageChange(page-1)}>
                Previous
            </button>)
          }

          { page < totalPages && 
            (<button 
              className='rounded-md border-2 px-4 py-1 transition-all duration-200
              /* Light Mode Styles */
              border-gray-500 text-black bg-blue-300 hover:bg-blue-400
              /* Dark Mode Styles */
              dark:border-gray-600 dark:text-white dark:hover:bg-gray-700 dark:bg-gray-800'
              onClick={() => handlePageChange(page+1)}>
              Next
            </button>)
          }

        </div>

        {/* Page Text */}
        <p className='font-bold text-sm flex items-center
          /* Light Mode */
          text-gray-700
          /* Dark Mode */
          dark:text-gray-300'>
          Page {page} of {totalPages}
        </p>
      </div>
    </div>
  )
}

export default Pagination