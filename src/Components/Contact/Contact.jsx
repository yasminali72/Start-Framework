import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

export default function Contact() {
  useEffect(() => {
    let label = document.querySelectorAll("label");
    let inputs = document.querySelectorAll("input");
    Array.from(inputs).forEach((input, index) => {
      input.addEventListener("input", function () {
        if(input.value){
          Array.from(label)[index].classList.remove("translate-y-[300%]");
        }
        else{
          Array.from(label)[index].classList.add("translate-y-[300%]");
        }
      });
    });
  },[]);

  return (
    <>
    <Helmet><title>Contact</title></Helmet>
      <div className="contact mt-28">
        <div className=" container flex justify-center flex-col items-center m-auto">
          <div className="title flex flex-col justify-center items-center mt-3 mb-10 text-[#2C3E50]">
            <h1 className=" font-bold text-[40px] uppercase mb-4">
              conatct section
            </h1>
            <i className="star fa-solid fa-star "></i>
          </div>

          <div className="w-[90%] md:w-[60%] grid grid-cols-1">
            <div className="input Name flex flex-col mb-5   overflow-hidden ">
              <label
                htmlFor="UserName"
                className="text-main  translate-y-[300%]  transition-all duration-1000"
              >
                UserName:
              </label>
              <input
                type="text"
                id="UserName"
                placeholder="UserName"
                className=" w-full text-black border-b-2 rounded p-2  focus:outline-none "
              />
            </div>

            <div className="input Age flex flex-col mb-5 overflow-hidden">
              <label
                htmlFor="UserAge"
                className="text-main translate-y-[300%]  transition-all duration-1000"
              >
                UserAge:
              </label>
              <input
                type="number"
                id="UserAge"
                placeholder="UserAge"
                className="w-full text-black border-b-2 rounded p-2 focus:outline-none"
              />
            </div>
            <div className="input Email flex flex-col mb-5 overflow-hidden ">
              <label
                htmlFor="UserEmail"
                className="text-main translate-y-[300%]  transition-all duration-1000"
              >
                UserEmail:
              </label>
              <input
                type="email"
                id="UserEmail"
                placeholder="UserEmail"
                className="w-full text-black border-b-2 rounded p-2 focus:outline-none"
              />
            </div>
            <div className="input Password flex flex-col mb-5 overflow-hidden">
              <label
                htmlFor="UserPassword"
                className="text-main translate-y-[300%]  transition-all duration-1000"
              >
                UserPassword:
              </label>
              <input
                type="password"
                id="UserPassword"
                placeholder="UserPassword"
                className="w-full border-b-2 rounded text-black p-2 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-main w-1/2 lg:w-1/6 capitalize p-2 rounded mb-8"
            >
              send message
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
