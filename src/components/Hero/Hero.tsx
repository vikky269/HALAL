import React from "react";
//import { motion } from "motion/react";
import AnimatedNames from "../Animatename/AnimateName";
import Animatedesc from "../Animatename/Animatedesc";
import AnimatedImage from "../Animatename/AnimateImage";
const Hero: React.FC = () => {

  const stats = ['1M Trusted Customers', '1Billion Transactions', '10Billion USD Revenues', '2M SMEs supported', '50k Corporate']

  const heroimg = [
   {
     id: 1,
    url: "/hero/img1.png"
   },
   {
     id: 2,
     url: "/hero/img2.png"
   },
   {
     id: 3,
    url: "/hero/img3.png"
   },
   {
     id: 4,
    url: "/hero/img4.png"
   }
  ]
  return (
    <section className="bg-[#ECF3FD] font-title relative py-12 md:pb-16">

      <div className="hidden lg:block">

        {/** Desktop layout */}

        <div className="flex justify-between items-center mx-auto px-6 py-3">

          <div className="text-center flex flex-col items-start mb-8 px-6 py-6 lg:max-h-[800px]">
            <h1 className="text-6xl font-bold text-[#0066f4] whitespace-nowrap text-center w-full rounded-sm py-3 px-12 mb-6 bg-gradient-to-b from-[#ffffff] to-[#dfe8f6]">
              A BANK FOR
            </h1>

            
            <AnimatedNames />

            {/* <p className="text-[#444449] mt-4 text-sm font-normal px-3 py-4 border-[0.2px] max-w-sm italic leading-4 border-black border-opacity-5">
              Akintayo, a 28-year-old Software Engineer, makes payments through
              HALAL.
            </p> */}

             <Animatedesc />

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#">
                <img src="/hero/applestore.png" alt="" />
              </a>
              <a href="#">
                <img src="/hero/playstore.png" alt="" />
              </a>
            </div>

            <span className="italic text-sm text-[#444449] mt-3">Licensed by CBN and Secured by NDIC</span>
          </div>

          {/* User and App Buttons */}

          {/* <div className="">
            <img
              src="/hero/akin.png"
              alt="User"
              className="h-[63%] md:h-[63%] lg:max-h-[850px] object-contain"
            />
          </div>
          */}

         <AnimatedImage  />

        </div>

        {/** divider stats */}  
        

        <div className="bg-[#0066f4] w-full h-[75px]">
          <div className="flex items-center h-full">
            <div className="flex whitespace-nowrap animate-marquee text-white space-x-4 lg:space-x-12">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="lg:text-lg text-[14px] font-normal">{stat}</span>
                  {index !== stats.length - 1 && (
                    <span className="font-bold md:text-lg lg:text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
              {/* Repeat the stats array to ensure continuous scrolling */}
              {stats.map((stat, index) => (
                <React.Fragment key={`repeat-${index}`}>
                  <span className="lg:text-lg text-[14px] font-normal">{stat}</span>
                  {index !== stats.length - 1 && (
                    <span className="font-bold md:text-lg lg:text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/** hero subtext content */}

        <div className="text-center flex flex-col items-center justify-center md:mt-12 mt-5">
          <span className="text-[#003780] text-6xl font-bold">For Everyone And You</span>

          <span className="leading-5 text-sm text-[#394455] max-w-lg font-normal mt-6">“No matter who you are, your personality or status, your profession,
            we want you to enjoy the ethical way of Banking and Finance”</span>

          <img src="/hero/Ibrahim Lukman.png" alt="" className="mt-5 h-[80%]" />

        </div>

        {/** picture grid */}

        <div className="flex items-center justify-center overflow-x-scroll space-x-4 mt-5 cursor-pointer lg:px-6">
          {heroimg.map((heroimg, index) => (
            <div className="flex flex-row justify-center items-center">
              <img src={heroimg.url} alt="" key={index} className="w-[100%] h-[400px]" />
            </div>
          ))}
        </div>

     </div>



       {/**mobile layout */}
       
      <div className="block lg:hidden">

        <div className="flex flex-col-reverse justify-center items-center mx-auto px-6 py-3">

          <div className="text-center flex flex-col items-center mb-8 px-4 py-6  w-[80%]">
            <h1 className="text-xl md:text-3xl font-bold whitespace-nowrap text-[#0066f4] text-center  w-full rounded-sm py-3 md:px-12 mb-6 bg-gradient-to-b from-[#ffffff] to-[#dfe8f6]">
              A BANK FOR
            </h1>


            <AnimatedNames />

            
            <Animatedesc />

            {/* CTA Buttons */}
            <div className="flex justify-center space-x-4 mt-8">
              <a href="#">
                <img src="/hero/applestore.png" alt="" />
              </a>
              <a href="#">
                <img src="/hero/playstore.png" alt="" />
              </a>
            </div>

            <span className="italic text-sm text-[#444449] mt-3">Licensed by CBN and Secured by NDIC</span>
          </div>

          {/* User and App Buttons */}

          

          <AnimatedImage />

        </div>

      
        <div className="bg-[#0066f4] w-full h-[65px] overflow-hidden">
          <div className="flex items-center h-full">
            <div className="flex whitespace-nowrap animate-marquee text-white space-x-4 lg:space-x-12">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="lg:text-lg text-[14px] font-normal">{stat}</span>
                  {index !== stats.length - 1 && (
                    <span className="font-bold md:text-lg lg:text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
              
              {stats.map((stat, index) => (
                <React.Fragment key={`repeat-${index}`}>
                  <span className="lg:text-lg text-[14px] font-normal">{stat}</span>
                  {index !== stats.length - 1 && (
                    <span className="font-bold md:text-lg lg:text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>


        {/** hero subtext content */}

        <div className="text-center flex flex-col items-center justify-center mt-12">
          <span className="text-[#003780] text-3xl font-bold">For Everyone And You</span>

          <span className="leading-5 px-4 text-sm text-[#394455] max-w-lg font-normal mt-6">“No matter who you are, your personality or status, your profession,
            we want you to enjoy the ethical way of Banking and Finance”</span>

          <img src="/hero/Ibrahim Lukman.png" alt="" className="mt-5 h-[80%]" />

        </div>


        {/**picture grid */}

        

        <div className='scroll-container overflow-x-scroll w-full flex justify-start px-8 gap-10 items-center  mt-12 cursor-pointer'>
            <img src="/hero/img1.png" alt="" className='lg:w-92' />
            <img src="/hero/img2.png" alt="" className='lg:w-92' />
            <img src="/hero/img3.png" alt="" className='lg:w-92' />
            <img src="/hero/img4.png" alt="" className='lg:w-92' />
          </div>

      </div>

    </section>



  )
}

export default Hero;
