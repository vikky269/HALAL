import React from 'react'

const Community:React.FC = () => {
    const community = ['Student Community', 'Small Businesses', 'Ambassadors']
  return (
    <section className='bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] font-title flex flex-col flex-wrap justify-center items-center pt-6'>
      
       <div className="text-center mt-5 flex-wrap mb-6">
          <span className="text-[#003780] text-5xl leading-normal max-w-lg font-bold">With a growing community of <br></br>
          people just like you </span>  
       </div>

       <div className='text-center'>
         <span className="leading-7 text-md text-[#394455] max-w-lg font-normal mt-6">Join a vast network of individuals who are making force for ethical 
         <br></br> banking and enjoying the benefits of Halal community.</span>
       </div>


       <div className='border border-black border-opacity-5 space-x-6 mt-6  flex justify-center items-center py-10 px-6 rounded-xl cursor-pointer'>
         <span className='text-white bg-[#0066F4] font-semi-bold px-8 py-4 rounded-full'>Agents</span>
         
          {community.map((community,index)=> (
            <span className='text-[#808A9A] hover:text-white hover:bg-[#0066F4] hover:font-semibold font-normal border border-black border-opacity-5 px-8 py-4 rounded-full' key={index}>{community}</span>
          ))}
       </div>
    </section>
  )
}

export default Community
