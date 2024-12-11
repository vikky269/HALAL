import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className=" relative text-[#003780] lg:pl-28 py-6 lg:px-6 font-title mt-32">
    
     <img src="/Ellipse 14.png" alt="" className="absolute left-0 bottom-0 h-15 hidden lg:block" />
     <img src="/Ellipse 13.png" alt="" className="absolute right-0 top-0 h-15 z-[-1] hidden lg:block" />
      {/* Container */}
      <div className="max-w-[1440px] mx-auto grid  gap-y-8 md:grid-cols-3 lg:grid-cols-4 px-10">
        {/* Logo and App Links */}
        <div className="space-y-4">
          <img src="/logo.png" alt="Halal Logo" className="w-32" />
          <div className="flex flex-col gap-3 items-start justify-start">
            <a href="#">
              <img src="/hero/playstore.png" alt="Google Play" className="w-32" />
            </a>
            <a href="#">
              <img src="/hero/applestore.png" alt="App Store" className="w-28" />
            </a>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-2">
          <h3 className="font-bold text-[#003780]">Company</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[#0066f4]">About Us</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">Press</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">Careers</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">Terms</a></li>
          </ul>
        </div>

        {/* Resources Links */}
        <div className="space-y-2">
          <h3 className="font-bold text-[#003780]">Resources</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:text-[#0066f4]">Customer Stories</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">Media</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">FAQs</a></li>
            <li><a href="#" className="hover:text-[#0066f4]">Security</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="space-y-4">
          <h3 className="font-bold text-[#003780]">Contact</h3>
          <ul className="space-y-1">
            <li className="flex items-center space-x-2">
              <img src="/Phone.png" alt="" className="w-5" />
              <span>123 456 789</span>
            </li>
            <li className="flex items-center space-x-2">
               <img src="/mail.png" alt="" className="w-5" />
              <a href="mailto:support@behalal.com" className="hover:text-[#0066f4]">
                support@behalal.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-8 pt-4 text-center space-y-2 text-sm text-[#0A142F]">

        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-[#0066f4]">
            <img src="/twitter.png" alt="Twitter" className="w-4 h-4 " />
          </a>
          <a href="#" className="hover:text-[#0066f4]">
            <img src="/linkedin.png" alt="LinkedIn" className="w-4 h-4 " />
          </a>
          <a href="#" className="hover:text-[#0066f4]">
            <img src="/facebook.png" alt="Facebook" className="w-3 h-4 " />
          </a>
        </div>
      </div>


      <div className="flex flex-col mt-8 mx-8">
         <span> ©  2021 Behalal.com</span>

         <span>2nd floor, Albarakah Plaza, Awolowo Junction, Bodija Ibadan</span>

              <div className="mt-8 text-sm flex flex-col ">
                  <span className="italic">Halal is a fintech, not a bank. All banking services such as savings, deposits and bank account creation are provided by our partnered Bank.
                  </span>


                  <span className="mt-4">Halal is a non-interest financial company and privacy is key to us. We protect visitor data against loss and unauthorised access.<br></br> We employ information security techniques to appropriately guard confidential client information from unauthorised access by <br></br> internal and external users. Access to client information is limited to those employees who have a legitimate business need for that information.</span>

                  <span className="mt-4">You may not, except with our express written permission, distribute or commercially exploit the content. Nor may
                    you transmit it <br></br> or store it in any other website or other form of electronic retrieval system.
                  </span>
              </div>
      </div>


      <div className="text-center mt-12"><span className="font-normal">© 2021 withhalal.com. All rights reserved. </span></div>
    </footer>
  )
}

export default Footer;
