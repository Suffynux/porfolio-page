import React from 'react'

const Portfolio = () => {
  return (
    <main className='w-full  bg-gray-200 text-white '>
    <section className='flex flex-col gap-10 md:flex-row md:text-center font-mono md:mx-[100px] justify-center items-center p-10'>
        {/* Card 1 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4 text-left'>
            <img src="/Images/app-dev.png" alt="" />
            <h2 className='p-6  font-medium'>Web developement</h2>
            <p className='w-[292px] h-[129px] font-sans text-sm p-5  text-left'>I craft fast, responsive, and user-friendly websites using modern technologies. From simple landing pages to full-stack web apps — I turn ideas into smooth digital experiences.</p>
        </div>
        {/* Card 2 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4  text-left'>
            <img src="/Images/ui-ux.png" alt="" />
<h2 className='p-5 font-bold'>UI UX & Graphic Designing</h2>
<p className='w-[292px] h-[129px] font-sans text-sm p-5'>
I design clean and intuitive interfaces that enhance user experience. From wireframes to final graphics, every detail is crafted for visual impact and usability.
</p>

        </div>
        {/* Card 3 */}
        <div className='w-[320px] h-[450px] rounded-2xl  bg-gray-900 transform shadow-xl transition duration-300 hover:translate-x-4  text-left'>
            <img src="/Images/digital-marketing.jpg"   className='h-[190px] w-full rounded-2xl' />
<h2 className='p-5 font-bold'>Digital Marketing</h2>
<p className='w-[292px] h-[129px] font-sans text-sm p-5'>
I help businesses grow online through targeted strategies in SEO, social media, and paid ads—turning traffic into real results and loyal customers.
</p>

        </div>

    </section>
    </main>
  )
}

export default Portfolio