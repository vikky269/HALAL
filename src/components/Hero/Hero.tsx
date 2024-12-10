import React from "react";

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
    <section className="bg-[#ECF3FD] font-title relative md:pb-16 ">

      <div className="hidden md:block">

        {/** Desktop layout */}

        <div className="flex justify-between items-center mx-auto px-6 py-3">

          <div className="text-center flex flex-col items-start mb-8 p-4">
            <h1 className="md:text-6xl font-bold text-[#0066f4] rounded-sm py-3 px-4 mb-6 bg-gradient-to-b from-[#ffffff] to-[#dfe8f6]">
              A BANK FOR
            </h1>
            <h1 className="text-6xl font-bold text-center rounded-sm text-white py-3 px-12 mb-6 bg-gradient-to-b from-[#0357ee] to-[#023288]">
              AKINTAYO
            </h1>
            <p className="text-[#444449] mt-4 text-sm font-normal px-3 py-4 border-[0.2px] max-w-sm italic leading-4 border-black border-opacity-5">
              Akintayo, a 28-year-old Software Engineer, makes payments through
              HALAL.
            </p>


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
          <div className="">
            <img
              src="/hero/akin.png"
              alt="User"
              className="h-[63%]"
            />
          </div>


        </div>

        {/** divider stats */}

        <div className="bg-[#0066f4] w-full h-[75px] absolute top-[45%] hidden md:block">
          <div className="flex justify-center items-center h-full">
            <div className="flex text-white space-x-4 lg:space-x-12">
              {stats.map((stat, index) => (
                <React.Fragment key={index}>
                  <span className="text-md sm:text-lg font-normal">{stat}</span>
                  {index !== stats.length - 1 && (
                    <span className="font-bold md:text-lg lg:text-xl">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/** hero subtext content */}

        <div className="text-center flex flex-col items-center justify-center mt-5">
          <span className="text-[#003780] text-6xl font-bold">For Everyone And You</span>

          <span className="leading-5 text-sm text-[#394455] max-w-lg font-normal mt-6">“No matter who you are, your personality or status, your profession,
            we want you to enjoy the ethical way of Banking and Finance”</span>

          <img src="/hero/Ibrahim Lukman.png" alt="" className="mt-5 h-[80%]" />

        </div>

        {/** picture grid */}

        <div className="flex items-center justify-center space-x-4 mt-5 cursor-pointer">
          {heroimg.map((heroimg, index) => (
            <div className="flex flex-row justify-center items-center ">
              <img src={heroimg.url} alt="" key={index} className="w-[100%] h-[400px]" />
            </div>
          ))}
        </div>
     </div>



       {/**mobile layout */}
       
       <div className="block md:hidden">
        mobile layout
       </div>

    </section>



  )
}

export default Hero;
