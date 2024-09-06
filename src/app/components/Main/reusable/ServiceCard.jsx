import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";

const ServiceCard = ({ title, image, desc }) => {
  return (
    <div className="max-w-[300px] w-full h-[450px] bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
      <div className="relative w-full h-[200px]">
        <img src={image} alt="Service" className="w-full h-full object-cover" />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-700">{desc}</p>
      </div>
      <div className="p-4">
        <Link
          href="https://web.whatsapp.com/send?phone=49176%2084234070"
          target="_blank"
          type="button"
          className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-[#12418A] text-white hover:bg-[#1b335e] focus:outline-none focus:bg-gray-700 disabled:opacity-50 disabled:pointer-events-none"
        >
          Book Now <CiCalendarDate size={24} />
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
