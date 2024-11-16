import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = ({
  image = "/images/PlaceHolder.png",
  title = "Default Title",
  description = "Default description for the card goes here",
  link = "#",
  buttonText = "Visit Project",
  showButton = true,
}) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:border-black hover:border-2">
      <Link href={link}>
        <Image
          className="w-full h-48 rounded-t-lg object-cover"
          src={image}
          alt={title}
          width={400}
          height={200}
        />
      </Link>
      <div className="p-5">
        <Link href={link}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </Link>
        {description && (
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {description}
          </p>
        )}
        {showButton && (
          <Link href={link}>
            <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
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
