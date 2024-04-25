import React from 'react'

const Campaign = () => {
  return (
    <div className="min-h-[450px] ">
        <div className='flex gap-4 items-center h-10'>
          <div className='h-10 bg-yellow-500 w-2'></div>
          <p className="text-2xl font-medium"> Campaign Reports</p>
        </div>
        <div className="mt-12">
            <p className="text-4xl font-bold text-gray-200 opacity-50">No Campaign Reports </p>
        </div>
      
    </div>
  )
}

export default Campaign
