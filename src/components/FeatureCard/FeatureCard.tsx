import React from 'react';

interface CardProps {
  title: string;
  description: string;
  link: string;
  imageSrc?: string;
  bgColor: string;
  bgOpacity: string;
  textColor: string;
}

const FeatureCard: React.FC<CardProps> = ({ title, description, link, imageSrc, bgColor, bgOpacity, textColor }) => {
  return (
    <div
      className={`font-title ${imageSrc ? "md:h-[390px]" : "md:h-[300px]"} lg:h-[500px] relative  p-4 lg:p-8 rounded-lg shadow-md flex flex-col justify-between items-center md:items-start gap-3`}
      style={{
        backgroundColor: bgColor,
        opacity: bgOpacity, 
      }}
    >
      <div className="space-y-4 lg:max-w-[72%]">
        <h3 className={`text-2xl md:text-3xl font-bold ${textColor}`}>{title}</h3>
        <p className="text-sm md:text-base text-gray-700">{description}</p>
        <a href={link} className="text-blue-600 max-w-lg flex items-center space-x-2 font-medium">
          <span className='border-b-[#0066f4] py-2 px-2 border-2 border-t-0 border-l-0 border-r-0'>Learn more &rarr; </span>
        </a>
      </div>
      <div className="absolute bottom-0 right-4 hidden md:block lg:block">
        <img src={imageSrc} className='md:h-40 lg:h-full'  />
      </div>
    </div>
  )
}

const FeaturesGrid: React.FC = () => {
  const features = [
    {
      title: 'Banking',
      description:
        'We believe everyone should have access to money at the time they want it without exorbitant interest rates that makes it hard to return',
      link: '#',
      imageSrc: '/banking.png',
      bgColor: '#DEECFF94',
      bgOpacity: "60",
      textColor: 'text-blue-600',
    },
    {
      title: 'Savings',
      description:
        'We believe everyone should have access to money at the time they want it without exorbitant interest rates that makes it hard to return',
      link: '#',
      imageSrc: '/savings.png',
      bgColor: '#F2FCFEAB',
      bgOpacity: "65",
      textColor: 'text-green-600',
    },
    {
      title: 'Takaful',
      description:
        'We believe everyone should have access to money at the time they want it without exorbitant interest rates that makes it hard to return',
      link: '#',
      bgColor: '#F2FCFEAB',
      bgOpacity:"65",
      textColor: 'text-green-600',
    },
    {
      title: 'Bills',
      description:
        'We believe everyone should have access to money at the time they want it without exorbitant interest rates that makes it hard to return',
      link: '#',
      bgColor: '#DEECFF94',
      bgOpacity: "60",
      textColor: 'text-blue-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 md:p-10 lg:p-16">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
