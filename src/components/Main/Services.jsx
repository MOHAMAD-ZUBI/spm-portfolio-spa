import React from "react";
import ServiceCard from "./reusable/ServiceCard";

const cleaningServices = [
  {
    title: "Interior and Exterior House Cleaning",
    desc: "Comprehensive cleaning for both the inside and outside of homes, ensuring a spotless environment.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIsPjYA19uOLpr5LrtBd_gb3K9AkL9RoZh5w&s",
  },
  {
    title: "Apartment Cleaning",
    desc: "Thorough cleaning services specifically tailored for apartments, maintaining cleanliness and hygiene.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuIck0QQjkjWCNk56SU1nPw__nLQxMKEUz5w&s",
  },
  {
    title: "Office Cleaning",
    desc: "Professional cleaning services for offices to ensure a clean and productive workspace.",
    image:
      "https://alpinemaintenance.com/wp-content/uploads/2020/08/office-cleaning-checklist.jpeg",
  },
  {
    title: "Mall Cleaning",
    desc: "Extensive cleaning services for malls, maintaining a high standard of cleanliness in public areas.",
    image:
      "https://avidbots.com/assets/Uploads/Retail-Floor-Cleaning-Robot-Scrubber-Small.png",
  },
  {
    title: "Hotel Cleaning",
    desc: "High-quality cleaning services for hotels, ensuring guest rooms and common areas are spotless.",
    image:
      "https://www.hospitalitycourses.co.za/gallery_gen/b308ea8a8720ceac44293c3b47caea15_fit.webp",
  },
  {
    title: "Company Cleaning",
    desc: "Detailed cleaning for office spaces, focusing on maintaining a clean and organized work environment.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR27ed3ZI4EzEfllkWrdCIborHHCMLSx_CtGg&s",
  },
  {
    title: "Solar Panel Cleaning",
    desc: "Specialized cleaning services for solar panels to ensure maximum efficiency and performance.",
    image:
      "https://coldwellsolar.com/wp-content/uploads/2023/01/three-workers-cleaning-solar-panels.jpg",
  },
  {
    title: "Glass Cleaning",
    desc: "Professional cleaning services for glass surfaces, ensuring streak-free and clear results.",
    image:
      "https://www.theglassguru.com/wp-content/uploads/2022/02/cleaning-glass-1--1400x934.jpeg",
  },
  {
    title: "Winter Garden Cleaning",
    desc: "Cleaning services for winter gardens, removing debris and maintaining a clean and inviting space.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaynddrtpYXprTADj9NIU4FhQi7kfnn4RUMQ&s",
  },
  {
    title: "Window Cleaning",
    desc: "Efficient cleaning of windows to provide a clear view and enhance the appearance of buildings.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZn_Tuz5ycgBazRn_YBb8YPMSOe5bvlRC8Q&s",
  },
  {
    title: "Wall Writing Cleaning",
    desc: "Specialized cleaning to remove unwanted writings and graffiti from walls.",
    image:
      "https://www.southernliving.com/thmb/bs9jY8NkRWRbaDf_3zwtZvlDbMw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1447888365-d77c4a8172ac44c3b81d31e3b279aa2e.jpg",
  },
  {
    title: "Carpet Cleaning",
    desc: "Deep cleaning services for carpets, removing stains and ensuring a fresh and clean look.",
    image:
      "https://img.choice.com.au/-/media/74fe12e385064f56baa7164473f2ca20.ashx",
  },
  {
    title: "Furniture Cleaning",
    desc: "Comprehensive cleaning services for furniture to remove dust, stains, and maintain its condition.",
    image:
      "https://www.regionalservices.co.uk/wp-content/uploads/elementor/thumbs/upholstered-funiture-cleaning-scaled-pw3psthgk6x3is5ty8eg6tjxzcmeqr7bhnabp5zi9c.jpeg",
  },
];

const Services = () => {
  return (
    <div className="max-w-[1600px] mx-auto w-full" id="services">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h2 className="text-start font-semibold text-3xl border-b-4 border-blue-700 pb-2 w-[175px] hover:border-blue-600 hover:cursor-pointer text-center">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-4 mt-8 justify-center">
          {cleaningServices?.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              desc={service.desc}
              image={service.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
