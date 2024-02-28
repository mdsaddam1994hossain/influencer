import React from 'react'

const Loading = () => {

  return (
    <div id="loading" className="fixed inset-0 bg-white z-50 flex justify-center items-center">
      <div id="loading-center" className="relative w-full h-full flex justify-center items-center">
        <div id="loading-center-absolute" className="absolute flex items-center justify-between w-24 h-5">
          <div className="object" id="object_one"></div>
          <div className="object" id="object_two"></div>
          <div className="object" id="object_three"></div>
          <div className="object" id="object_four"></div>
          <div className="object" id="object_five"></div>
        </div>
      </div>
    </div>
  )
}

export default Loading
