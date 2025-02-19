"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const games = [
  {
    id: 1,
    title: "Drum Kit",
    image: "/game1/images/drum-kit-stock-photo.png",
    link: "/pages/gameHomePage/game1/drumPage",
  },
  {
    id: 2,
    title: "Simon Game",
    image: "/images/PlaceHolder.png",
    link: "/pages/gameHomePage/game2/SimonPage",
  },
  {
    id: 3,
    title: "Game",
    image: "/images/PlaceHolder.png",
    link: "/game3",
  },
  {
    id: 4,
    title: "Game Four",
    image: "/images/PlaceHolder.png",
    link: "/game4",
  },
];

export default function Page() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % games.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + games.length) % games.length);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <div className="relative w-full max-w-3xl overflow-hidden">
        <motion.div
          className="flex"
          animate={{ x: `-${index * 100}%` }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          {games.map((game) => (
            <div
              key={game.id}
              className="min-w-full flex flex-col items-center p-4"
            >
              <Link href={game.link} className="block">
                <div className="w-[500px] h-[300px] relative">
                  <Image
                    src={game.image}
                    alt={game.title}
                    layout="fill"
                    className="rounded-xl cursor-pointer object-cover"
                  />
                </div>
              </Link>

              <h2 className="mt-4 text-xl font-semibold">{game.title}</h2>
            </div>
          ))}
        </motion.div>
      </div>
      <div className="flex gap-4 mt-6">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          ◀
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600"
        >
          ▶
        </button>
      </div>
    </div>
  );
}
