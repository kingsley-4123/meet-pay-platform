import React from 'react'
import GetStarted from './GetStarted';

const Testimonial = ({jobs}) => {

  return (

      <div class="flex flex-col items-center p-6 space-y-3 rounded-lg bg-gray-200 md:w-1/3">
      <img src="" class="w-16 mt-14" alt="Upcoming"/>
      <h5 class="text-lg font-bold">{jobs.title}</h5>
      <p class="text-sm text-gray-700">
      {jobs.location}
      <button className="text-blue-500 m-y-5 p-3 cursor-pointer hover:text-blue-900">
        {/* {fullText ?'Less' : 'More'} */}
      </button>
      </p>
      </div>
  )
}

export default Testimonial