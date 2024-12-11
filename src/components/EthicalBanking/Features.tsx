import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    { icon: "/features/Flash.png", title: "Ethical Banking Standards" },
    { icon: "/features/emoji.png", title: "Shariah Compliant Fairness, Justice & Equity" },
    { icon: "/features/money.png", title: "24/7 Money Access" }
  ];

  const features2 = [
     { icon: "/features/interest.png", title: "Interest Free" },
    { icon: "/features/speed.png", title: "Great Customer Experience" },
  ];

  return (
    <div className="bg-white py-10 px-4 font-title ">
      <div className="max-w-7xl mx-auto flex flex-col gap-6 cursor-pointer">

        <div className="grid items-center justify-center grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] py-6 px-6 flex flex-col items-center text-center border border-opacity-10 border-[#0066f4] md:h-[15rem]"
            >
            <img src={feature.icon} alt="" />
                  <div className="max-w-[12rem]">
                      <h3 className="text-lg font-normal text-black">
                          {feature.title}
                      </h3>
                  </div>
            </div>
          ))}
        </div>

        <div className="flex gap-6 items-center justify-center mt-3">
        {features2.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-b from-[#EFF4FF] to-[#FFFFFF] py-6 px-6 flex flex-col items-center justify-center gap-5 text-center border border-opacity-10 border-[#0066f4] md:h-[20rem] md:w-[30rem] lg:w-[40rem]"
            >
            <img src={feature.icon} alt="" />
                  <div className="max-w-[12rem]">
                      <h3 className="text-lg font-normal text-black">
                          {feature.title}
                      </h3>
                  </div>
            </div>
          ))}  
        </div>

      </div>
    </div>
  )
}

export default FeaturesSection;
