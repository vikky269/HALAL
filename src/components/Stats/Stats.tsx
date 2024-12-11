import React from 'react'

const Stats:React.FC = () => {
  return (
    <section className='mt-12 bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] flex flex-col items-center justify-center gap-4 font-title p-4 lg:p-6 overflow-x-hidden'>
        {/**first item */}
       <div className='lg:flex-row flex flex-col items-start lg:justify-between space-x-14 lg:items-center'>
         <div className='flex flex-col gap-4 items-start'>
           <span className='text-[#003780] text-3xl lg:text-6xl font-bold'>500K + </span>
           <span className='text-white bg-[#0066F4] text-center font-semibold px-12 py-4 rounded-full'>Agents</span>
           <span className='text-[#003780] cursor-pointer mt-8 border-b-[#0066F4] border-b-2 pb-2'>Become an Agent &rarr;</span>
         </div>

         <div className='pt-6'>
            <img src="/impact.png" alt="" className='cursor-pointer lg:h-[30%]' />
         </div>
       </div>


       {/**second item */}

          <div className='flex mt-6 items-center justify-center'>
              <img src="/Frame 24.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 22.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 23.png" alt=""  className=' md:w-[370px]' />
          </div>


          {/**Third Item */}

      <div className='mt-28 flex flex-col items-center justify-center'>
        <span className='text-5xl font-normal text-[#394455]'>Join these people who trust us</span>

        
          <div className='flex space-x-12 items-center mt-12 px-8 cursor-pointer hover:scale-[1.02]'>
            <img src="/google.png" alt="" className='w-92' />
            <img src="/amazon.png" alt="" className='w-92' />
            <img src="/google.png" alt="" className='w-92' />
            <img src="/amazon.png" alt="" className='w-92' />
          </div>

        </div>
      

      {/**4th item */}

      <div className='mt-24 flex flex-col items-center justify-center' >
        <span className="text-[#003780] max-w-xl leading-loose text-center  text-xl md:text-5xl font-semibold mt-8">
          We are Building for you <br></br>
          and your Business
        </span>

        <span className='leading-loose text-[#394455] font-normal max-w-xl mt-16'>
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
