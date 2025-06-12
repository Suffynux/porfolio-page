import React from 'react'

const Portfolio = () => {
  return (
    <main className='w-full  bg-gray-200 text-white'>
    <section className='flex flex-col gap-10 md:flex-row md:text-center font-mono md:mx-[100px] justify-center items-center p-10'>
        {/* Card 1 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4'>
            <img src="/Images/app-dev.png" alt="" />
            <h2 className='p-5  font-medium'>Web developement</h2>
            <p className='w-[292px] h-[129px] font-sans text-sm p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit iusto perferendis cumque, minima officiis tempore asperiores enim corporis at?</p>
        </div>
        {/* Card 2 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4'>
            <img src="/Images/ui-ux.png" alt="" />
            <h2 className='p-5 font-bold'>UI UX</h2>
            <p className='w-[292px] h-[129px] font-sans text-sm p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit iusto perferendis cumque, minima officiis tempore asperiores enim corporis at?</p>
        </div>
        {/* Card 3 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4'>
            <img src="/Images/digital-marketing.jpg"   className='h-[190px] w-full rounded-2xl' />
            <h2 className='p-5 font-bold'>Digital Marketing</h2>
            <p className='w-[292px] h-[129px] font-sans text-sm p-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos odit iusto perferendis cumque, minima officiis tempore asperiores enim corporis at?</p>
        </div>

    </section>
    </main>
  )
}

export default Portfolio