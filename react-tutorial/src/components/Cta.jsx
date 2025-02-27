import React from 'react'

const Cta = () => {
  return (
    <section id="cta" class="bg-red-400">
      {/* <!-- flex container --> */}
      <div class="container flex flex-col items-center justify-between px-6 py-24
        mx-auto space-y-12 md:py-12 md:flex-row md:space-y-0">
        {/* <!-- Heading --> */}
        <h2 class="text-5xl font-bold leading-tight text-center md:text-4xl md:max-w-xl md:text-left">
            Simplify how your team works today
        </h2>
        {/* <!-- Button --> */}
        <a href="" class="p-2 px-6 pt-2 text-red-300
          bg-amber-100 rounded-full shadow-2xl baseline hover:bg-gray-700">Get Started</a>
      </div>
    </section>

  )
}

export default Cta