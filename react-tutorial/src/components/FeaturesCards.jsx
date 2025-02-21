import React from 'react'

function FeaturesCards({children}) {
  return (
    <div class="flex flex-col space-y-3 md:space-x-6 md:flex-row">
        {children}
    </div>
  )
}

export default FeaturesCards