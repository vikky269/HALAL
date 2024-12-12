import React from 'react'

const Stats:React.FC = () => {
  return (
    <section className='mt-12 bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] flex flex-col items-center justify-center gap-4 font-title p-4 lg:p-6 overflow-x-hidden'>
        {/**first item */}
       <div className='lg:flex-row flex flex-col items-start justify-start lg:justify-between lg:space-x-14 p-3 lg:items-center'>
        
         <div className='flex flex-col space-y-2 lg:gap-4 items-start px-4'>
           <span className='text-[#003780] text-3xl lg:text-6xl font-bold pl-4 lg:pl-0'>500K + </span>
           <span className='text-white bg-[#0066F4] text-center font-semibold px-12 py-4  rounded-full'>Agents</span>
           <span className='text-[#003780] cursor-pointer mt-8 border-b-[#0066F4] border-b-2 pb-1'>Become an Agent &rarr;</span>
         </div>

         <div className='mt-5'>
            <img src="/impact.png" alt="" className='cursor-pointer lg:h-[30%]' />
         </div>
       </div>


       {/**second item */}

          <div className='scroll-container flex mt-6 justify-start lg:justify-center overflow-x-scroll lg:overflow-hidden'>
              <img src="/Frame 24.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 22.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 23.png" alt=""  className=' md:w-[370px]' />
          </div>


          {/**Third Item */}

      <div className='mt-28 flex flex-col items-center justify-center'>
        <span className='lg:text-5xl text-center text-3xl font-normal text-[#394455]'>Join these people who trust us</span>

        
          <div className='scroll-container overflow-x-scroll lg:overflow-hidden flex space-x-12 items-center mt-12 px-8 cursor-pointer hover:scale-[1.02]'>
            <img src="/google.png" alt="" className='lg:w-92' />
            <img src="/amazon.png" alt="" className='lg:w-92' />
            <img src="/google.png" alt="" className='lg:w-92' />
            <img src="/amazon.png" alt="" className='lg:w-92' />
          </div>

        </div>
      

      {/**4th item */}

      <div className='mt-24 flex flex-col items-center justify-center' >
        <span className="text-[#003780] max-w-xl leading-loose text-center  text-xl md:text-5xl font-semibold mt-8">
          We are Building for you <br></br>
          and your Business
        </span>

        <span className='leading-loose text-[#394455] text-center font-normal max-w-xl mt-16'>
          Maybe you want a trusted Banking partners for collecting payments,
          or you need an affordable Takafaful yearly dividends that would pay
          with no claims, or wanting to earn good returns on your savings?

        </span>


        <span className='leading-loose text-[#394455] font-semibold max-w-xl mt-16'>
          Do it Halal way

        </span>
      </div>
    </section>
  )
}

export default Stats
