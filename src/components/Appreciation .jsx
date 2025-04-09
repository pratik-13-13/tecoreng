import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Juan S Ortiz Salazar",
    position: "Acme Corp",
    feedback:
      "They were honest about their abilities from the beginning, have fantastic communication skills, and are overall a dream to work with! Myself and my team felt beyond confident of their abilities and that they were doing the work on a week to week basis just as they stated they would. I will definitely be looking to hiring Tecoreng first before considering anyone else on Upwork!!",
  },
  {
    name: "Tim Loenders",
    position: "BPOS LOENDERS GCV",
    feedback:
      "Paresh worked out the infrastructure topology and did a fine job on that. He gave me insights about how to tackle setup that I didn't have which saved the project time and money.",
  },
  {
    name: "Denis Cartin",
    position: "CTO, SoSFba",
    feedback:
      "They have good timing and quality in task solving. Their project management was outstanding. Always delivered on time and quickly replied to our needs and demands. The Communication was effective and running smoothly, with constant updates on the project's progress. They also shared significant insights and suggestions for developing the project.",
  },
  {
    name: "Kean Graham",
    position: "CEO, MonetizeMore",
    feedback:
      "What most impressed us about Technical Core Engineers was their wide range of knowledge and commitment to the completion of our project. They exceeded our expectations rather than meeting them. Their ability to quickly understand the difficulties of our bu siness and personalize their solutions to our specific need was absolutely impressive.",
  },
  {
    name: "Chetan Patwardhan",
    position: "CEO, HiQuest Group of IT Companies",
    feedback:
      "What most impressed us about Technical Core Engineers was their commitment to delivering a service that exceeded our expectations. Their commitment to the project, dedication to excellence, and willingness to go the extra mile truly distinguish them. They demonstrated a thorough understanding of the business and adjusted their solutions to meet our specific needs.",
  },
];

const Appreciation = () => {
  return (
    <div className="  " >
      <div className="w-full bg-[#01132E] py-2">
      <h2 
  className="ml-22 pb-10 text-white text-3xl font-bold mb-6"
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
Appreciation from Clients
</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          modules={[Autoplay,Pagination]}
          className="max-w-6xl mx-auto"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div style={{ linespace: "24px" }}
                className="bg-gradient-to-b from-white/10 to-transparent text-white p-6 rounded-2xl 
                     shadow-[inset_0px_39px_56px_-36px_rgba(255,255,255,0.5),inset_0px_7px_11px_-4px_rgba(255,255,255,1),inset_0px_-82px_68px_-64px_rgba(14,78,114,0.3),inset_0px_98px_100px_-48px_rgba(0,161,253,0.3),inset_0px_4px_18px_rgba(8,59,88,0.3),inset_0px_1px_40px_rgba(13,137,207,0.2)] 
                     h-[430px] flex flex-col gap-4"
              >
                <div>
                  <h3 className="text-lg font-bold">{testimonial.name}</h3>
                  <p className="text-sm">{testimonial.position}</p>
                </div>
                <p className="text-sm">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>


    </div >
  );
};

export default Appreciation;
