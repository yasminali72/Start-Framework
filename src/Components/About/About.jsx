import React from "react";

export default function About() {
  return (
    <>
      <div className="about bg-main pt-28 pb-12 ps-10 pe-10 md:ps-28 md:pe-28 mt-14 text-center xl:p-48 ">
        <div className="container flex flex-col justify-center items-center  m-auto">
          <div className="title flex flex-col justify-center items-center mb-5 ">
            <h1 className=" font-bold  text-[35px] md:text-[40px] uppercase mb-4 text-nowrap ">
              about component
            </h1>
            <i className="star fa-solid fa-star "></i>
          </div>
          <div className="gird sm:grid-cols-1  md:gird-cols-2 flex flex-col  gap-4 md:flex-row p-6 text-left">
            <div className="md:gird-col-1 w-full">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
            <div className="md:gird-cols-1 w-full">
              <p>
                Freelancer is a free bootstrap theme created by Route. The
                download includes the complete source files including HTML, CSS,
                and JavaScript as well as optional SASS stylesheets for easy
                customization.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
