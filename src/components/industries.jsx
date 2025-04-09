import React from "react";



function Industries() {
  const industries = [
    { title: "Supply chain & Logistics", image: "/images/g-1.webp", span: "md:col-span-2" },
    { title: "Healthcare", image: "/images/g-2.webp", span: "md:col-span-1" },
    { title: "Education", image: "/images/g-3.webp", span: "md:col-span-1" },
    { title: "Banking", image: "/images/g-4.webp", span: "md:col-span-1" },
    { title: "E-commerce", image: "/images/g-5.webp", span: "md:col-span-1" },
    { title: "Travel", image: "/images/g-6.webp", span: "md:col-span-2" }
  ];

  return (
    <section className="w-full  bg-[#01132e] text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-15">
        <h1  style={{ fontFamily:"Poppins,sans-serif" }}
          className="text-5xl font-semibold mb-6 text-left text-[rgb(239,237,227)]
             drop-shadow-[1px_1px_0px_rgb(1,19,46)],
             drop-shadow-[2px_2px_0px_rgb(1,19,46)],
             drop-shadow-[3px_3px_0px_rgb(1,19,46)],
             drop-shadow-[4px_4px_0px_rgb(77,89,108)]"
        >
          Industries We Are Experts In
        </h1>
        <br />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mx-auto">
          {industries.map((indus, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg h-52 flex items-center justify-center ${indus.span} group`}
            >
              <img
                src={indus.image}
                alt={indus.title}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                onError={(e) => {
                  console.error(`Failed to load image: ${indus.image}`);
                  //e.target.src = "https://via.placeholder.com/400x200?text=Image+Not+Found";
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center  transition-opacity">
                <h3 className="text-xl font-medium text-white text-center px-2">
                  {indus.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Industries;
