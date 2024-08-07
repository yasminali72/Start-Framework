import React from "react";
import avataaars from "/src/assets/images/avataaars.svg"
import { Helmet } from "react-helmet";
export default function Home() {
  return (
    <>
    <Helmet>
      <title>Home</title>
    </Helmet>

    <div className="home mt-14  bg-main ">
        <div className="container  flex flex-col justify-center items-center    m-auto min-h-screen">
          <div className="">
            <img src={avataaars} alt="" className="w-full" />
          </div>
          <div className="title flex flex-col justify-center items-center mt-3 mb-2 ">
            <h1 className=" font-bold text-[40px] uppercase mb-4">
              start Framework
            </h1>
            <i className="star fa-solid fa-star "></i>
          </div>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
    </>
  );
}
