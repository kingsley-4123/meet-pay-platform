import React from 'react'
import { Link } from 'react-router-dom';
import GetStarted from './GetStarted';

const HeroPage = () => {
  return (
    <section id="hero" className="pt-2 bg-gradient-to-tr h-fit from-primary-blue to-dark-blue ">
    {/* <!-- Flex Container--> */}
      <div class="container flex flex-col-reverse items-center px-3 mx-auto mt-1 space-y-0 md:flex-row md:space-y-0 md:space-x-2">
        {/* <!-- Left Item --> */}
         <div class="relative flex flex-col mb-32 space-y-12 md:max-w-md">
          <h1 class="max-w-md text-4xl font-bold text-white text-center md:text-5xl md:text-left">
            Welcome to Meet Pay Platform
          </h1>
          <p class="max-w-sm text-center text-gray-200 md:text-start">
            A platform that enables seamless group payments and financial management. 
            A group admin can seamlessly view members who have made susccessful payments to the groups' virtual account number. 
            When a user creates a group in-order to start receiving payments, he or she have to specify whether it should have a reserved account or a wallet.
            Reserved accounts will make payments to be directly deposited in your provided commercial bank account. While Wallet will accumulate money for you and you can withdraw anytime.
            Not to forget a wonderful Notification system that will notify the group admin when a payment is made into its account.
            <br />
            <span className='text-4xl text-white px-8'>COMING SOON...</span>
          </p>
          <div class="flex justify-center self-center mt-10 md:justify-start md:self-start">
           <GetStarted display={"flex"}/>
  
          </div>
         </div>
         
         {/* <!-- Image --> */}
          <div className='flex flex-col items-center relative'>
            <div className=' max-w-md md:max-w-lg'>
              <img src='/images/climate.png' alt="Climate" />
            </div>
            <div class=" max-w-md md:max-w-lg ">
              <Link to={"/wallet"}>
              <img src='/images/wallet.png' alt="Do That Later" className='drop-shadow-2xl hover:scale-[1.1]' /> 
              </Link>
            </div>
            <div className="hidden absolute bottom-0 right-[-55px] max-w-14 md:block">
              <img src='/images/vase.png' alt="" className='drop-shadow-2xl'/>
            </div>
            <div className="hidden absolute bottom-25 right-[-64px] max-w-20 md:block">
              <img src='/images/yellow-flower.png' alt="" className='drop-shadow-2xl' />
            </div>
          </div>
      </div>
   </section>
  )
}

export default HeroPage