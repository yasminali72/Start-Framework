import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer text-center">
        <div className="first bg-[#2C3E50] p-20">
          <div className="grid  md:grid-cols-3 ">
            <div className="    p-4">
              <h1 className="font-medium text-2xl">LOCATION</h1>
              <p className="mt-1"> 2215 John Daniel Drive</p>
              <p className="mt-2">Clark, MO 65243</p>
            </div>
            <div
              className="   
      p-4"
            >
              <h1 className="font-medium text-2xl">AROUND THE WEB</h1>
              <div className="social flex justify-center mt-1">
                <Link
                  
                  className="border border-white rounded-[50%] p-2 flex justify-center items-center me-2"
                >
                  <i className="fa-brands fa-facebook "></i>
                </Link>
                <Link
                  
                  className="border border-white rounded-[50%] p-2 flex justify-center items-center me-2"
                >
                  <i className="fa-brands fa-twitter"></i>
                </Link>
                <Link
                  
                  className="border border-white rounded-[50%] p-2 flex justify-center items-center me-2"
                >
                  <i className="fa-brands fa-linkedin-in"></i>
                </Link>
                <Link
                  
                  className="border border-white rounded-[50%] p-2 flex justify-center items-center"
                >
                  <i className="fa-solid fa-globe"></i>
                </Link>
                
              </div>
            </div>
            <div
              className="   
      p-4"
            >
              <h1 className="font-medium text-2xl">ABOUT FREELANCER</h1>
              <p className="mt-1">
                Freelance is a free to use, licensed Bootstrap theme created by
                Route
              </p>
            </div>
          </div>
        </div>
        <div className="last bg-[#1A252F]  p-[10px]">
          <p className="pt-[10px] mb-4">Copyright © Your Website 2021</p>
        </div>
      </div>
    </>
  );
}
