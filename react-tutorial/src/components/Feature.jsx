import React from 'react'
import FeaturesCards from './FeaturesCards'

const Feature = () => {
  return (
    <section id="features">
      <div class="container flex flex-col px-4 mx-auto mt-10 space-y-12 md:space-y-0 md:flex-row">
        {/* <!-- What's different --> */}
        <div class="flex flex-col space-y-12 justify-center md:w-1/2">
          <h2 class="max-w-md text-4xl font-bold text-center md:text-left">
            What's different about Manage
          </h2>
          <p class="max-w-sm text-center text-gray-700 md:text-left">
            Manage provides all the functionality your team needs, without the complexity. 
            Our software is tailor-made for modern digital product teams.
          </p>
        </div>

        {/* <!-- Unordered List --> */}
        <div class="flex flex-col space-y-8 md:w-1/2">
          {/* <!-- List item 1 --> */}
          <FeaturesCards>
            <div class="rounded-l-full bg-red-200 md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">02</div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track commpany-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track commpany-wide progress
              </h3>
              <p class="text-gray-700">
                Manage has supercharged our team's workflow. The ability to maintain visibility on larger 
                milestones at all times keeps everyone motivated
              </p>
            </div>
          </FeaturesCards>
          <FeaturesCards>
            <div class="rounded-l-full bg-red-200 md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">02</div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track commpany-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track commpany-wide progress
              </h3>
              <p class="text-gray-700">
                Manage has supercharged our team's workflow. The ability to maintain visibility on larger 
                milestones at all times keeps everyone motivated
              </p>
            </div>
          </FeaturesCards>
          <FeaturesCards>
            <div class="rounded-l-full bg-red-200 md:bg-transparent">
              <div class="flex items-center space-x-2">
                <div class="px-4 py-2 text-white rounded-full md:py-1 bg-red-400">02</div>
                <h3 class="text-base font-bold md:mb-4 md:hidden">
                  Track commpany-wide progress
                </h3>
              </div>
            </div>
            <div>
              <h3 class="hidden mb-4 text-lg font-bold md:block">
                Track commpany-wide progress
              </h3>
              <p class="text-gray-700">
                Manage has supercharged our team's workflow. The ability to maintain visibility on larger 
                milestones at all times keeps everyone motivated
              </p>
            </div>
          </FeaturesCards>
        </div>
        </div>
    </section>

)
}

export default Feature