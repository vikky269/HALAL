import React from "react";

const CallToAction: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-b from-[#0066f4] to-[#003b8e] text-white py-10 px-4 font-title">

        <img src="/Upper Shape.png" alt="" className="absolute right-0 top-0 h-[100%] w-[40%] object-cover" />
      <div className="container mx-auto text-center">
        {/* "Start Now" Button */}
        <button className="bg-white text-[#0066f4] font-semibold py-2 px-6 rounded-lg shadow-lg mb-6 hover:bg-gray-100">
          Start Now
        </button>

        {/* Subtitle */}
        <p className="md:text-[40px] text-xl mt-4 font-medium mb-6">
          Pay, Receive, Spend, Send Money the Halal way
        </p>

        {/* App Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
          <a href="#" >
            <img
              src="/hero/playstore.png" 
              alt="Google Play"
              className=" mr-2"
            />
            
          </a>
          <a href="#">
            <img
              src="/hero/applestore.png" 
              alt="App Store"
              className=" mr-2"
            />
         </a>
        </div>

        {/* "Open a Business Account" Link */}
        <span className="text-white font-medium pb-2 border-b-2 border-white decoration-dotted hover:decoration-solid" >
          Open a Business account →
        </span>
      </div>
    </div>
  );
};

export default CallToAction;
