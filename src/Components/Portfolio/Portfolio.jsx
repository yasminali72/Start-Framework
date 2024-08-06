import React, { useState } from "react";
import port1 from '/src/assets/images/poert1.png'
import port2 from '/src/assets/images/port2.png'
import port3 from '/src/assets/images/port3.png'


export default function Portfolio() {
  const [selectedImg, setSeletedImg] = useState(null);

  const displayImg = (srcImg) => setSeletedImg(srcImg);
  const closeDisplay = () => setSeletedImg(null);

  return (
    <>
      <div className="portfolio mt-10 text-center">
        <div className=" container flex flex-col justify-center items-center pt-20 pb-4   m-auto">
          <div className="title flex flex-col justify-center items-center mt-3 mb-8 text-[#2C3E50] ">
            <h1 className=" font-bold text-[30px] md:text-[40px] uppercase mb-4">
              portfolio component
            </h1>
            <i className="star fa-solid fa-star "></i>
          </div>

          <div className="  grid md:grid-cols-2 lg:grid-cols-3  gap-5 2xl:ms-24 2xl:me-24 ">
            <div
              className="image  bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl"></i>
              <img
                src={port1}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>

            <div
              className="image bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl  "></i>
              <img
                src={port2}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>

            <div
              className="image bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl"></i>
              <img
                src={port3}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>

            <div
              className="image bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl"></i>
              <img
                src={port1}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>

            <div
              className="image bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl  "></i>
              <img
                src={port2}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>

            <div
              className="image bg-main relative rounded-lg m-3"
              role="button"
            >
              <i className="plus fa-solid fa-plus absolute top-0 start-0 end-0 bottom-0 hidden text-8xl"></i>
              <img
                src={port3}
                alt=""
                className="w-full   hover:opacity-5 rounded-lg"
                onClick={(e) => displayImg(e.currentTarget.getAttribute("src"))}
              />
            </div>
          </div>
        </div>
      </div>

      {selectedImg && (
        <div
          className="fixed inset-0 bg-[#0d6efd40] bg-opacity-25 flex justify-center items-center z-[999]  sm:p-10 md:p-0 "
          onClick={closeDisplay}
        >
          <div className="relative flex justify-center items-center  ">
            <img
              src={selectedImg}
              alt="Selected"
              className="scale-125 sm:scale-100  md:w-[70%] "
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
