import React from "react";

const FeatureCard = ({ title, icon, desc }) => {
  return (
    <div className="relative max-w-[400px] w-full h-[500px] bg-white rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
      <div className="flex flex-col gap-4 items-center h-full justify-center p-8">
        <div className="h-[100px] w-[100px] flex items-center justify-center bg-blue-100 rounded-full shadow-md mb-4">
          {icon}
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600 text-center">{desc}</p>
      </div>
      <div className="absolute bottom-0 left-0 w-full">
        <svg
          id="wave"
          style={{ transform: "rotate(0deg)", transition: "0.3s" }}
          viewBox="0 0 1440 270"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stopColor="rgba(62, 126.506, 243, 1)" offset="0%"></stop>
              <stop stopColor="rgba(11, 106.224, 255, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            style={{ transform: "translate(0, 0px)", opacity: 1 }}
            fill="url(#sw-gradient-0)"
            d="M0,135L40,144C80,153,160,171,240,166.5C320,162,400,135,480,139.5C560,144,640,180,720,184.5C800,189,880,162,960,130.5C1040,99,1120,63,1200,58.5C1280,54,1360,81,1440,94.5C1520,108,1600,108,1680,108C1760,108,1840,108,1920,103.5C2000,99,2080,90,2160,99C2240,108,2320,135,2400,121.5C2480,108,2560,54,2640,54C2720,54,2800,108,2880,126C2960,144,3040,126,3120,139.5C3200,153,3280,198,3360,180C3440,162,3520,81,3600,45C3680,9,3760,18,3840,18C3920,18,4000,9,4080,9C4160,9,4240,18,4320,27C4400,36,4480,45,4560,72C4640,99,4720,144,4800,148.5C4880,153,4960,117,5040,121.5C5120,126,5200,171,5280,180C5360,189,5440,162,5520,126C5600,90,5680,45,5720,22.5L5760,0L5760,270L5720,270C5680,270,5600,270,5520,270C5440,270,5360,270,5280,270C5200,270,5120,270,5040,270C4960,270,4880,270,4800,270C4720,270,4640,270,4560,270C4480,270,4400,270,4320,270C4240,270,4160,270,4080,270C4000,270,3920,270,3840,270C3760,270,3680,270,3600,270C3520,270,3440,270,3360,270C3280,270,3200,270,3120,270C3040,270,2960,270,2880,270C2800,270,2720,270,2640,270C2560,270,2480,270,2400,270C2320,270,2240,270,2160,270C2080,270,2000,270,1920,270C1840,270,1760,270,1680,270C1600,270,1520,270,1440,270C1360,270,1280,270,1200,270C1120,270,1040,270,960,270C880,270,800,270,720,270C640,270,560,270,480,270C400,270,320,270,240,270C160,270,80,270,40,270L0,270Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FeatureCard;
