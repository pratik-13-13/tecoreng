import React, { useState } from "react";

const features = [
  { text: "Reporting & Analysis", image: "/images/s-1.webp" },
  { text: "On-Time Delivery", image: "/images/s-2.webp" },
  { text: "Seamless Communication", image: "/images/s-3.webp" },
  { text: "Post Launch Support", image: "/images/s-4.webp" },
  { text: "Agile Methodology" },
  { text: "Certified Experts" },
  { text: "Budget Friendly" },
  { text: "100% Client Expectation" },
];

const TecorengClone = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <div className="bg-[#002147] text-white py-12 px-6 relative">
      <div className="max-w-5xl mx-auto mb-12">
        <h1
          className="pb-10 text-[90px] font-semibold uppercase tracking-[5px]"
          style={{
            fontFamily: "Arial",
            WebkitTextStroke: "1px white",
            color: "transparent",
          }}
        >
          WHY TECORENG FOR YOUR NEXT PROJECT
        </h1>
        <p className="mb-6 text-lg text-white">
          Introducing Technical Core Engineers (TCE), the intersection of
          technology and innovation. At TCE, we excel in delivering exceptional
          IT services customized to fulfill your development requirements.
          Harnessing our expertise and enthusiasm, we breathe life into your
          ideas. Backed by a team of seasoned developers with extensive
          knowledge in various programming technologies, our dedication is
          unwavering, ensuring the delivery of outstanding results. Our mission
          is straightforward: decode the language of binary and transform it
          into extraordinary digital solutions that empower your business.
        </p>
        {/* Updated Button */}
        <button style={{borderRadius:"10px"}}
          onClick={() => setIsClicked(true)}
          className="flex items-center justify-center px-6 py-2.5 rounded-[25px] bg-gradient-to-r from-[#f47b55] to-[#ff3d00] text-white font-bold text-[29px] leading-[30px] uppercase transform transition-transform duration-300 hover:-translate-y-1.5"
        >
          GET IN TOUCH
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto pt-16 text-center">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-[#0A2A4A] p-6 rounded-lg flex flex-col items-center shadow-md hover:shadow-lg transition-shadow relative overflow-hidden border-t-1 border-l-1 border-r-1 border-white w-full h-32"
          >
            {index < 4 && feature.image ? (
              <img
                src={feature.image}
                alt={feature.text}
                className="w-12 h-12 mb-4"
              />
            ) : (
              <div className="w-12 h-12 mb-4"></div>
            )}
            <p className="font-semibold mb-4">{feature.text}</p>
          </div>
        ))}
      </div>

      <div className="text-right italic mt-12 mr-8">Let's talk...</div>
    </div>
  );
};

export default TecorengClone;
