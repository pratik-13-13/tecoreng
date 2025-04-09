import { useState } from "react";
import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaAngular, FaLaravel, FaNodeJs } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { SiFlutter, SiAndroid, SiApple } from "react-icons/si";
import { TbBrandKotlin } from "react-icons/tb";

const services = [
  {
    title: "Web Development",
    icon: "/web-icon.png",
    details:
      "Transform your business concepts with our web development services, crafting innovative and next-generation websites.",
    technologies: [
      { icon: FaReact, name: "React JS", color: "#61DAFB" },
      { icon: FaAngular, name: "Angular", color: "#DD0031" },
      { icon: FaLaravel, name: "Laravel", color: "#FF2D20" },
      { icon: FaNodeJs, name: "Node JS", color: "#339933" },
    ],
  },
  {
    title: "Mobile App Development",
    icon: "/mobile-icon.png",
    details: "Building robust and scalable mobile applications tailored to your business needs.",
    technologies: [
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: SiAndroid, name: "Android", color: "#3DDC84" },
      { icon: SiApple, name: "iOS", color: "#A2AAAD" },
      { icon: TbBrandKotlin, name: "Kotlin", color: "#7F52FF" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "/design-icon.png",
    details: "Creating intuitive and engaging user interfaces with a focus on user experience and visual appeal.",
    technologies: [
      { icon: FaReact, name: "Figma", color: "#F24E1E" },
      { icon: FaReact, name: "Adobe XD", color: "#FF61F6" },
      { icon: FaReact, name: "Sketch", color: "#F7B500" },
    ],
  },
  {
    title: "Digital Marketing",
    icon: "/marketing-icon.png",
    details: "Enhancing your online presence and driving targeted traffic to your digital platforms.",
    technologies: [
      { icon: FaReact, name: "SEO", color: "#47c1bf" },
      { icon: FaReact, name: "SEM", color: "#f06543" },
      { icon: FaReact, name: "SMM", color: "#5851db" },
    ],
  },
];

const ServicesSection = () => {
  return (
    <div className="w-full bg-[#01132E] py-16">
      <div className="max-w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-white text-left mb-10">Services We Offer</h1>
        
        <div className="space-y-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  return (
    <motion.div 
      className="group relative w-full p-6 rounded-xl bg-[#01132E] border border-gray-700 overflow-hidden transition-all duration-300 hover:bg-gradient-to-r from-[#01132E] to-[#01132E]"
      whileHover={{ 
        transition: { duration: 0.3 }
      }}
    >
      {/* Default (Before Hover) Content */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 flex items-center justify-center">
          <img 
            src={service.icon} 
            alt={service.title}
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-2xl font-semibold text-white">{service.title}</h2>
      </div>

      {/* Extended (After Hover) Content */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-8 mt-4 h-0 opacity-0 group-hover:h-auto group-hover:opacity-100 transition-all duration-300 overflow-hidden">
        {/* Description */}
        <div className="md:w-1/2">
          <p className="text-white text-lg max-w-md">
            {service.details}
          </p>
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-x-12 gap-y-8 items-center justify-center md:justify-end mt-4 md:mt-0">
          {service.technologies.map((tech, i) => (
            <div key={i} className="flex flex-col items-center">
              <tech.icon className="text-4xl" style={{ color: tech.color }} />
              <p className="text-white mt-2 text-sm">{tech.name}</p>
            </div>
          ))}
          
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="flex items-center justify-center ml-6"
          >
            <div className="w-12 h-12 rounded-full bg-[#FF5722] flex items-center justify-center cursor-pointer">
              <FiArrowRight className="text-white text-xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServicesSection;