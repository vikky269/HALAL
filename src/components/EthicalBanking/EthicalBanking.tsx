import React from 'react'
import FeaturesSection from './Features'

const EthicalBanking:React.FC = () => {
  return (
    <section className='mt-12 flex flex-col justify-center items-center font-title'>

          <div className="text-center flex flex-wrap p-4">
              <span className="text-[#003780] text-3xl md:text-5xl font-semibold mt-8">
                  Ethical Banking for you&nbsp;
                  <br className="hidden md:block" />
                  and your Business
              </span>
          </div>


          <div className='mt-12'>
              <FeaturesSection />
          </div>

          {/* <div className='relative'>
              <img src="/features/Component 7.png" alt="" />
              <div className='absolute top-6'>
                  <img src="/features/Component 10.png" alt="" />
              </div>
          </div> */}

          <div className="hidden md:block relative overflow-hidden h-[150px] md:h-[200px]">
              {/* First Image */}
              <img
                  src="/features/Component 7.png"
                  alt=""
                  className="animate-move-left-loop"
              />

              {/* Second Image */}
              <div className="absolute top-6 right-0 w-full h-auto">
                  <img
                      src="/features/Component 10.png"
                      alt=""
                      className="animate-move-right-loop"
                  />
              </div>
          </div>

    </section>
  )
}

export default EthicalBanking


