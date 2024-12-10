import React from 'react'

const Stats:React.FC = () => {
  return (
    <section className='mt-12 bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] flex flex-col items-center justify-center gap-4 font-title p-6 overflow-x-hidden'>
        {/**first item */}
       <div className='flex justify-between space-x-14 items-center'>
         <div className='flex flex-col gap-4 items-start'>
           <span className='text-[#003780] text-6xl font-bold'>500K + </span>
           <span className='text-white bg-[#0066F4] text-center font-semibold px-12 py-4 rounded-full'>Agents</span>
           <span className='text-[#003780] cursor-pointer mt-8 border-b-[#0066F4] border-b-2 pb-2'>Become an Agent &rarr;</span>
         </div>

         <div className='pt-6'>
            <img src="/impact.png" alt="" className='cursor-pointer h-[30%]' />
         </div>
       </div>


       {/**second item */}

          <div className='flex mt-6 items-center justify-center'>
              <img src="/Frame 24.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 22.png" alt=""  className=' md:w-[370px]' />
              <img src="/Frame 23.png" alt=""  className=' md:w-[370px]' />
          </div>
    </section>
  )
}

export default Stats
