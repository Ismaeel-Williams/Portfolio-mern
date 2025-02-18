"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  image = "/images/PlaceHolder.png",
  title = "Default Title",
  description = "Default description for the card goes here",
  link = "#",
  buttonText = "Visit Project",
  showButton = true,
}: {
  image?: string;
  title?: string;
  description?: string;
  link?: string;
  buttonText?: string;
  showButton?: boolean;
}) => {
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const handleDescriptionToggle = () => {
    setIsDescriptionExpanded((prev) => !prev);
  };

  return (
    <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-black hover:border-2 flex flex-col">
      <Link href={link}>
        <Image
          className="w-full h-48 rounded-t-lg object-cover"
          src={image}
          alt={title}
          width={400}
          height={200}
        />
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        <p
          className={`mb-3 font-normal text-gray-700 dark:text-gray-400 ${
            isDescriptionExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        {description.length > 150 && !isDescriptionExpanded && (
          <button
            className="text-blue-500 mt-2"
            onClick={handleDescriptionToggle}
          >
            Read more
          </button>
        )}
        {showButton && (
          <Link href={link}>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-4">
              {buttonText}
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
