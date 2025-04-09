import { useRef } from 'react';
import React from 'react';
import devimg1 from "/images/p-1.webp";
import devimg2 from "/images/p-2.webp";
import devimg3 from "/images/p-3.webp";
import devimg4 from "/images/p-4.webp";
import devimg5 from "/images/p-5.webp";
import devimg6 from "/images/p-6.webp";
import devimg7 from "/images/p-7.webp";

const DevelopmentProcess = () => {
  const containerRef = useRef(null);
  const steps = [
    { title: "Research and Analysis", description: "Idea, Consultation, Research, Goal Definition, & Requirements Gathering", imageSrc: devimg1, position: "left" },
    { title: "Design", description: "System Architecture Design, Wireframing, UI/UX Designing, & Prototyping", imageSrc: devimg2, position: "right" },
    { title: "Development", description: "Functional Implementation, Software Coding & Optimization", imageSrc: devimg3, position: "left" },
    { title: "Testing", description: "Quality Assurance, Troubleshooting, & Testing", imageSrc: devimg4, position: "right" },
    { title: "Deployment", description: "Launch, Beta Live, & Live", imageSrc: devimg5, position: "left" },
    { title: "Evaluation", description: "Performance Evaluation, & Analytics Implementation", imageSrc: devimg6, position: "right" },
    { title: "Maintenance", description: "Monitoring, Feedback, Analysis, & Complete Support", imageSrc: devimg7, position: "left" },
  ];

  return (
    <div ref={containerRef} className="flex flex-col w-full max-w-7xl mx-auto py-16 min-h-screen overflow-hidden bg-[#01132E] px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-center md:text-left mb-12 text-gray-100 tracking-wide drop-shadow-lg">
        Our Development Process
      </h1>

      {steps.map((step, index) => {
        const shouldFlip = [1, 3, 5].includes(index); // 2nd, 4th, and 6th cards

        return (
          <div 
            key={index} 
            className={`flex flex-col md:flex-row items-center mb-12 ${step.position === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            <div 
              className="relative flex flex-col md:flex-row items-center p-6 w-full md:w-[700px] h-auto md:h-[280px] bg-gradient-to-r from-[#26426B] to-[#0017386B] shadow-lg rounded-2xl text-white"
            >
              <div 
                className="flex-none flex justify-center items-center p-4 w-[150px]"
              >
                <img 
                  src={step.imageSrc} 
                  alt={step.title} 
                  className={`w-[100px] md:w-[120px] h-[100px] md:h-[120px] object-cover rounded-lg ${shouldFlip ? 'scale-x-[-1]' : ''}`} 
                />
              </div>
              <div className={`flex-1 flex flex-col justify-center text-center md:${step.position === 'left' ? 'text-left' : 'text-right'} mt-4 md:mt-0 px-4`}>  
                <h2 className="text-xl md:text-2xl font-bold mb-2">{step.title}</h2>
                <p className="text-md md:text-lg font-light leading-relaxed">{step.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DevelopmentProcess;
