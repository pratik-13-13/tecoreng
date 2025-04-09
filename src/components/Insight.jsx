import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import img1 from "/images/ti-1.jpg";
import img2 from "/images/ti-2.webp";
import img3 from "/images/ti-3.jpg";
import img4 from "/images/ti-4.webp";
import img5 from "/images/ti-5.webp";
import img6 from "/images/ti-6.webp";

const cards = [
  {
    id: 1,
    title: "Why Custom Software Development is the Key to Staying Ahead in the Digital Age",
    date: "21-8-2023 - Paresh Solanki",
    description: "Custom software development refers to the process of creating software operations specifically acclimatized to meet the unique requirements and conditions of a particular association or business.custom software is erected from scrape and designed to address specific challenges, streamline processes, and enhance productivity.  The development process involves gathering conditions, designing, rendering, testing, […]?...",
    image: img1
  },
  {
    id: 2,
    title: "What’s the Big Difference between B2B and B2C Mobile Apps?",
    date: "18-07-2022 - Paresh Solanki",
    description: "The single most crucial thing you can do before releasing anything into the world, be it a company, a dish, or a mobile app, is to understand your target audience. especially a mobile app, which is occasionally even more significant and frequently a business. Who you are building an app for when you make the […]",
    image: img2
  },
  {
    id: 3,
    title: "What If Your Website Could Feel Like an App? Discover the Magic of PWAs with JavaScript!",
    date: "21-02-2025 - Paresh Solanki",
    description: "The Big Question What if your website doesn’t just look good, it actually feels like a mobile app? Imagine a smooth animation that was instantly invited, or even a page that works offline like your favorite app. It sounds like a dream. But what if you tell you that it’s not just that it’s actually […]",
    image: img3
  },
  {
    id: 4,
    title: "Artificial Intelligence: How AI is Transforming  Every Industries",
    date: "20-07-2023 - Paresh Solanki",
    description: "Artificial intelligence (AI) refers to the emulation of human intellect in devices that have been design to behave and think like humans. The phrase may also use to refer to any computer that demonstrates characteristics of the human intellect, such as learning and problem-solving. Furthermore, there are many ways to use artificial intelligence (AI) every […]",
    image: img4
  },
  {
    id: 5,
    title: "How to Find the Best UI/UX Design Company for Your Business",
    date: "25-08-2023 - Michael Brown",
    description: "Best UI/UX Design Company with all the answers we have to explore the given below. In today’s rapidly evolving digital landscape, a captivating and user-centric online presence is no longer a luxury but a necessity for businesses aiming to thrive. Enter the realm of user interface (UI) and User Experience (UX) design- the cornerstone of creating […]",
    image: img5
  },
  {
    id: 6,
    title: "Project vs Product Mindset: Maximize Revenue with the Right Selection",
    date: "12-06-2023 - Sarah Lee",
    description: "Project vs Product Mindset: Maximize Revenue with the Right Selection. This topic is trying to understand by Technical Core Engineers. So Don’t miss read this article. In today’s highly competitive business environment, organizations face the perpetual challenge of maximizing revenue and achieving sustainable growth. The key to this success lies in adopting the right mindset […]",
    image: img6
  },
];

const Insight = () => {
  return (
    <div className="bg-[#01132E] px-4 py-10">
      <h2 
  className="ml-18 pb-10 text-white text-3xl font-bold mb-6"
  style={{
    fontFamily: "Poppins, sans-serif",
    textShadow: `
      rgb(239, 237, 227) -1px -1px 1px,
      rgb(1, 19, 46) 0px 1px 0px,
      rgb(1, 19, 46) 0px 2px 0px,
      rgb(1, 19, 46) 0px 3px 0px,
      rgb(1, 19, 46) 0px 4px 0px,
      rgb(1, 19, 46) 0px 5px 0px,
      rgb(77, 89, 108) 0px 6px 0px,
      rgba(0, 0, 0, 0.9) 0px 0px 0px,
      rgba(0, 0, 0, 0.3) 0px 0px 0px,
      rgba(0, 0, 0, 0.5) 0px 0px 0px,
      rgba(0, 0, 0, 0.9) 0px 0px 0px
    `
  }}
>
  Tecoreng Insights
</h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        autoplay={{ delay: 3000 }}
        loop={true}
        breakpoints={{
          320: { slidesPerView: 1 }, // Mobile: 1 slide
          768: { slidesPerView: 2 }, // Tablet: 2 slides
          1024: { slidesPerView: 3 }, // Desktop: 3 slides
        }}
        className="max-w-6xl mx-auto"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className="w-full h-[600px] bg-[#1d3146] text-white rounded-lg shadow-lg overflow-hidden flex flex-col">
              {/* Image Section */}
              <img src={card.image} alt={card.title} className="w-full h-[350px] object-cover" />

              {/* Text Content Section */}
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold text-white mb-2">{card.title}</h3>
                <p className="text-center py-2 text-sm text-gray-400 mb-2">{card.date}</p>
                <p className="text-sm flex-grow text-white">{card.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Insight;
