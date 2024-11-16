import React from "react";

const footer = () => {
  return (
    <section
      id="footer"
      className="bg-[#303841] text-white w-full font-semibold"
    >
      <div className="content-center h-80 text-center mb-20">
        <div>
          <div className="py-10">
            <h1 className="text-6xl py-10">My contact links</h1>
            <p>Smile :) its good for you</p>
          </div>
          <div className="space-x-6">
            <a href="https://profile.indeed.com/?hl=en_ZA&co=ZA&from=gnav-menu-viewjob">
              Indeed
            </a>
            <a href="https://github.com/Ismaeel-Williams">GitHub</a>
            <a href="https://www.linkedin.com/in/isma-eel-williams-93872b263/">
              LinkedIn
            </a>
            <a href="mailto:IsmaeelWilliams26@gmail.com">My@email</a>
            <a href="tel:0813647766">My Phone</a>
          </div>
        </div>
      </div>
      <div className="flex h-40 text-center border-red-500 border-t-4">
        <p className="m-auto">
          This portfolio is property of IsmaeelWilliams created as credit of
          accoplishments
        </p>
        <p className="m-auto">©Created by IsmaeelWilliams</p>
      </div>
    </section>
  );
};

export default footer;
