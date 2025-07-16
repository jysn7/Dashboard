import React from 'react'
import { FiCalendar } from 'react-icons/fi'

const TopBar = () => {
  return (
    <div className='border-b px-4 mb-4 mt-2 pb-4 border-stone-200'>
        <div className='flex items-center justify-between p-0.5'>
            <div>
                <span className='text-sm font-bold block'>
                    Good Morning, Jayson!
                </span>
                <span className='text-xs text-stone-500 block'>
                    Monday, July 14th 2025
                </span>
            </div>

            <button className='flex text-sm items-center gap-2 bg-stone-100
            transition-colors hover:bg-pink-100 hover:text-pink-700 cursor-pointer px-3 py-1.5 rounded'>
                <FiCalendar />
                <span>Prev 6 months</span>
            </button>
        </div>
    </div>
  )
}

export default TopBar