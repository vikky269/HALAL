import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: "/features/Flash.png", title: "Ethical Banking Standards" },
    { icon: "/features/emoji.png", title: "Shariah Compliant Fairness, Justice & Equity" },
    { icon: "/features/money.png", title: "24/7 Money Access" },
    { icon: "/features/interest.png", title: "Interest Free" },
    { icon: "/features/speed.png", title: "Great Customer Experience" },
  ];

  const features1 = [
    { icon: "/features/Flash.png", title: "Ethical Banking Standards" },
    { icon: "/features/emoji.png", title: "Shariah Compliant Fairness, Justice & Equity" },
    { icon: "/features/money.png", title: "24/7 Money Access" }
   
  ];
  const features2 = [
     { icon: "/features/interest.png", title: "Interest Free" },
    { icon: "/features/speed.png", title: "Great Customer Experience" },
  ];
// className="max-w-7xl mx-auto flex flex-col gap-6 cursor-pointer p-8"
  return (
    <div className="bg-white py-10 lg:px-4 font-title ">
      {/** Mobile screen layout */}
      <div className="block md:hidden lg:hidden">
        
        <div className="grid sm:grid-cols-2 gap-6 py-4 w-[87%] mx-auto">
        {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF]  to-[#FFFFFF] py-6 px-6 flex flex-col items-center text-center border border-opacity-10 border-[#0066f4] md:h-[15rem]"
            >
            <img src={feature.icon} alt="" />
                  <div className="lg:max-w-[12rem] mt-4">
                      <h3 className="text-lg font-normal text-black">
                          {feature.title}
                      </h3>
                  </div>
            </div>
          ))}
        </div>

      </div>
     
     {/**Medium screen layout */}

      <div className="hidden md:block lg:hidden">
        <div className="grid grid-cols-2 gap-6 py-4 w-[95%] mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF]  to-[#FFFFFF] py-6 px-6 flex flex-col items-center text-center border border-opacity-10 border-[#0066f4] md:h-[15rem]"
            >
              <img src={feature.icon} alt="" />
              <div className="lg:max-w-[12rem] mt-4">
                <h3 className="text-lg font-normal text-black">
                  {feature.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
       
       {/** desktop layout */}

      <div className="hidden lg:block">
        
        <div className="w-screen mx-auto p-10 flex flex-col gap-4">

          <div className="grid gap-6 grid-cols-3">
            {features1.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-b from-[#EFF4FF]  to-[#FFFFFF] py-6 px-6 flex flex-col items-center text-center border border-opacity-10 border-[#0066f4]"
              >
                <img src={feature.icon} alt="" />
                <div className="lg:max-w-[12rem] mt-4">
                  <h3 className="text-lg font-normal text-black">
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          

          <div className="flex space-x-12">
            {features2.map((feature, index) => (
              <div
                key={index}
                className="bg-gradient-to-b w-[50%] from-[#EFF4FF] to-[#FFFFFF] py-6 px-6 flex flex-col items-center justify-center gap-5 text-center border border-opacity-10 border-[#0066f4]"
              >
                <img src={feature.icon} alt="" />
                <div className="lg:max-w-[12rem] mt-4">
                  <h3 className={`text-lg font-normal text-black lg:px-0 text-ellipsis`}>
                    {feature.title}
                  </h3>
                </div>
              </div>
            ))}

          </div>
         
            

        </div>

      </div>


    </div>
  )
}

export default FeaturesSection;



{/* <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 border-2 border-black">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF]  to-[#FFFFFF] py-6 px-6 flex flex-col items-center text-center border border-opacity-10 border-[#0066f4] md:h-[15rem]"
            >
            <img src={feature.icon} alt="" />
                  <div className="lg:max-w-[12rem] mt-4">
                      <h3 className="text-lg font-normal text-black">
                          {feature.title}
                      </h3>
                  </div>
            </div>
          ))}
        </div>

        <div className="flex md:flex-row flex-col gap-6 items-center justify-center mt-3 border-2 border-black">
        {features2.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] py-6 px-6 flex flex-col items-center justify-center gap-5 text-center border border-opacity-10 border-[#0066f4] w-[36rem]"
            >
            <img src={feature.icon} alt="" />
                  <div className="lg:max-w-[12rem] mt-4"> 
                      <h3 className={`text-lg font-normal ${feature.title === "Interest Free" ? "px-20" : "px-16"} text-black lg:px-0 text-ellipsis`}>
                          {feature.title}
                      </h3>
                  </div>
            </div>
          ))}  
        </div> */}