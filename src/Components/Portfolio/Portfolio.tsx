import { useState } from "react";
import image1 from "../../assets/pic1.jpeg";

import image9 from "../../assets/pic10.jpeg";
import image2 from "../../assets/pic2.jpeg";
import image3 from "../../assets/pic3.jpeg";
import image4 from "../../assets/pic4.jpeg";
import image5 from "../../assets/pic5.jpeg";
import image6 from "../../assets/pic6.jpeg";
import image7 from "../../assets/pic7.jpeg";
import image8 from "../../assets/pic8.jpeg";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex: number) => {
    setActiveTab(tabIndex);

    const container = document.querySelector(".image-container") as HTMLElement;

    if (container) {
      container.style.transform = "scale(0)";
      setTimeout(() => {
        container.style.transform = "scale(1)";
      }, 300);
    }
  };

  const allImages = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
  ];
  const mobileAppImages = [image2, image5, image6, image9];
  const webDevImages = [image1, image3, image4, image9];
  const uiUxImages = [image3, image4, image6, image2];
  const graphicImages = [image1, image5, image5, image7];

  let imagesToDisplay = [];

  switch (activeTab) {
    case 0:
      imagesToDisplay = allImages;
      break;
    case 1:
      imagesToDisplay = mobileAppImages;
      break;
    case 2:
      imagesToDisplay = webDevImages;
      break;
    case 3:
      imagesToDisplay = uiUxImages;
      break;
    case 4:
      imagesToDisplay = graphicImages;
      break;
    default:
      imagesToDisplay = allImages;
      break;
  }
  return (
    <div className="relative px-8 lg:px-16 xl:px-32 2xl:px-64 " id="portfolio">
      <div className="absolute left-0 -z-10 h-80 w-full bg-[#784cfb]"></div>
      <div className="py-8">
        <div className="flex flex-col items-center gap-2">
          <span className="text-center font-bold">MY WORK</span>
          <span className="text-center text-4xl font-bold text-white">
            Portfolio
          </span>
          <span className="h-1 w-20 bg-white"></span>
        </div>
        <div className="mt-6 flex flex-wrap justify-center text-center font-bold text-white md:gap-8">
          <span
            className={`cursor-pointer ${
              activeTab === 0
                ? "rounded-full bg-white px-3 py-1 text-[#784cfb] duration-300 ease-in-out"
                : "px-3 py-1"
            }`}
            onClick={() => handleTabClick(0)}
          >
            ALL
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === 1
                ? "rounded-full bg-white px-3 py-1 text-[#784cfb] duration-300 ease-in-out"
                : "px-3 py-1"
            }`}
            onClick={() => handleTabClick(1)}
          >
            MOBILE APPS
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === 2
                ? "rounded-full bg-white px-3 py-1 text-[#784cfb] duration-300 ease-in-out"
                : "px-3 py-1"
            }`}
            onClick={() => handleTabClick(2)}
          >
            WEB DEV
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === 3
                ? "rounded-full bg-white px-3 py-1 text-[#784cfb] duration-300 ease-in-out"
                : "px-3 py-1"
            }`}
            onClick={() => handleTabClick(3)}
          >
            UI/UX
          </span>
          <span
            className={`cursor-pointer ${
              activeTab === 4
                ? "rounded-full bg-white px-3 py-1 text-[#784cfb] duration-300 ease-in-out"
                : "px-3 py-1"
            }`}
            onClick={() => handleTabClick(4)}
          >
            GRAPHIC
          </span>
        </div>
      </div>
      <div className="image-container my-12 flex items-center justify-center duration-300 ease-in-out ">
        <div className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 md:grid-cols-3 ">
          {imagesToDisplay.map((image, index) => (
            <img
              key={index}
              src={image}
              className="h-60 w-full rounded-2xl object-cover opacity-100 shadow-2xl shadow-slate-700 transition-all duration-500 ease-in-out hover:scale-105"
              alt=""
            />
          ))}
        </div>
      </div>
    </div>
  );
}
