import React from "react";

const footer = () => {
  return (
    <section className="bg-[#303841] text-white w-full font-semibold">
      <div className="content-center h-80 text-center mb-20">
        <div>
          <div className="py-10">
            <h1 className="text-6xl py-10">My social links</h1>
            <p>Smile :) its good for you</p>
          </div>
          <div className="space-x-6">
            <a href="#">FaceBook</a>
            <a href="#">GitHub</a>
            <a href="#">LinkedIn</a>
            <a href="#">My@email</a>
            <a href="#">My Phone</a>
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
