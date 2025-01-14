import React from "react";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <section className="bg-[#303841] text-white w-full font-semibold py-10">
      <div className="container mx-auto text-center p-8 border border-[#303841] bg-[#1d2228] rounded-lg shadow-lg">
        <h1 className="text-6xl py-10">
          I&#39;m Ismaeel — Your Next Web Developer
        </h1>
        <div className="flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-6">
          <div className="flex-1 text-left px-4 py-6">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="mb-6">
              I am a web developer with experience in building dynamic and
              responsive web applications. My goal is to create user-friendly
              and efficient web solutions that help businesses succeed.
            </p>

            <h2 className="text-3xl font-bold mb-4">Skills</h2>
            <p className="mb-6">
              React, Next.js, TypeScript, JavaScript, Node.js, MongoDB, Tailwind
              CSS, and more.
            </p>

            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="mb-6">
              I have worked on various projects ranging from building
              interactive web applications to creating scalable backend
              services.
            </p>
          </div>
          <div className="flex-1 mt-6 sm:mt-0 relative w-full max-w-xs h-80 overflow-hidden rounded-lg shadow-md border-4 border-red-500">
            <Image
              src="/images/profile-photo.jpg"
              alt="Profile Image"
              fill /* Replaces layout="fill", ensures the image fills the container */
              className="rounded-lg object-cover" /* Replaces objectFit="cover" */
              style={{
                objectPosition:
                  "70% 20%" /* Adjusts cropping to show specific parts of the image */,
              }}
            />
          </div>
        </div>
        <div className="border-b-4 border-red-500 mt-6"></div>
      </div>
    </section>
  );
};

export default ProfilePage;
