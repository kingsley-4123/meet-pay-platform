import React from 'react'

const Footer = () => {
  return (
    <footer class="bg-blue-900">
      {/* <!-- Flex Container --> */}
      <div class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0">
        {/* <!-- logo and social links container --> */}
        <div class="flex flex-col-reverse items-center justify-between 
        space-y-12 md:flex-col md:space-y-0 md:items-start">

        <div class="mx-auto my-6 text-center text-white md:hidden">
          Copyright &copy; 2022, All Rights Reserved
        </div>
          {/* <!-- logo --> */}
          <div>
            <img src="" alt="LOGO" class="h-8" />
          </div>
          {/* <!-- Social Links container --> */}
          <div class="flex justify-center space-x-4">
            {/* <!-- Link 1 --> */}
            <a href="#">
              {/* <img src="" alt="facebook" h-8 > */}
            </a>
            {/* <!-- Link 2 --> */}
            <a href="#">
              <img src="" alt="whatsapp" h-8 />
            </a>
            {/* <!-- Link 3 --> */}
            <a href="#">
              <img src="" alt="instagram" h-8 />
            </a>
            {/* <!-- Link 4 --> */}
            <a href="#">
              <img src="" alt="Twitter" h-8 />
            </a>
            {/* <!-- Link 5 --> */}
            <a href="#">
              <img src="" alt="pintrest" h-8 />
            </a>
          </div>
        </div>

        {/* <!-- List Container --> */}
        <div class="flex justify-around space-x-5">
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-red-300">Home</a>
            <a href="#" class="hover:text-red-300">Pricing</a>
            <a href="#" class="hover:text-red-300">Products</a>
            <a href="#" class="hover:text-red-300">About</a>
          </div>
          <div class="flex flex-col space-y-3 text-white">
            <a href="#" class="hover:text-red-300">Carrers</a>
            <a href="#" class="hover:text-red-300">Community</a>
            <a href="#" class="hover:text-red-300">Privacy policy</a>
          </div>
        </div>

        {/* <!-- Input Container --> */}
        <div class="flex flex-col justify-between">
          <form >
            <div class="flex space-x-3">
              <input type="text" class="flex-1 px-4 bg-amber-50 rounded-full focus:outline-none"
              placeholder="Update in your inbox" />
              <button class="px-6 py-2 text-white rounded-full bg-red-400 hover:bg-red-200 focus:outline-none cursor-pointer">Go</button>
            </div>
          </form>
          <div class="hidden text-wite md:block">
            Copyright &copy; 2022 All rights reserved.
          </div>
        </div>
      </div>
    </footer>

  )
}

export default Footer