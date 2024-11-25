"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function DashboardPage() {
  const [showImage, setShowImage] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const gameRefs = useRef<(HTMLDivElement | null)[]>([]);

  const games = ["Game 1", "Game 2", "Game 3"];

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === "right" && activeIndex < games.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    if (gameRefs.current[activeIndex]) {
      gameRefs.current[activeIndex]?.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [activeIndex]);

  return (
    <div className="min-h-screen bg-[#FCFAEE] flex flex-col items-center">
      <main className="w-full max-w-7xl my-8 px-4 flex flex-col space-y-8">
        <section className="bg-[#507687] text-[#FCFAEE] p-6 rounded-lg text-center relative">
          <h2 className="text-2xl font-bold">Welcome, John Doe!</h2>
          <p className="text-lg mt-2">
            Welcome! We&#39;ve tidied up the dashboard—just don&#39;t look under
            the rug.
          </p>
          {showImage && (
            <Image
              className="rounded-full h-32 w-32 border-[#507687] border-solid border-2 absolute left-1/2 transform -translate-x-1/2"
              src="/images/PlaceHolder.png"
              alt="User Profile Picture"
              width={100}
              height={100}
            />
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#FCFAEE] border border-[#507687] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">User Stats</h3>
            <ul className="space-y-2 text-[#384B70]">
              <li>
                Total Logins: <strong>15</strong>
              </li>
              <li>
                Last Login: <strong>2024-11-17</strong>
              </li>
            </ul>
          </div>

          <div className="bg-[#FCFAEE] border border-[#507687] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">
              Updating? Don&#39;t worry, we&#39;ve packed snacks!
            </h3>
            <div className="flex flex-col space-y-4">
              <button
                className="bg-[#507687] text-[#FCFAEE] px-4 py-2 rounded-md hover:bg-[#384B70]"
                onClick={() => setShowImage(!showImage)}
              >
                View Profile
              </button>
              <button className="bg-[#507687] text-[#FCFAEE] px-4 py-2 rounded-md hover:bg-[#384B70]">
                Edit Settings
              </button>
              <button className="bg-[#507687] text-[#FCFAEE] px-4 py-2 rounded-md hover:bg-[#384B70]">
                Go to Projects
              </button>
            </div>
          </div>
        </section>

        <section className="bg-[#FCFAEE] border border-[#507687] p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Activities</h3>
          <div className="relative">
            <div className="flex overflow-x-scroll no-scrollbar space-x-4 p-4">
              {games.map((game, index) => (
                <div
                  key={index}
                  ref={(el) => {
                    gameRefs.current[index] = el; // Assign ref
                  }}
                  className={`flex-shrink-0 w-60 h-40 rounded-lg flex items-center justify-center text-[#FCFAEE] transition-colors duration-300 ${
                    activeIndex === index ? "bg-[#384B70]" : "bg-[#507687]"
                  }`}
                >
                  {game}
                </div>
              ))}
            </div>
            <button
              className="absolute top-1/2 left-2 -translate-y-1/2 bg-[#507687] text-[#FCFAEE] p-2 rounded-full hover:bg-[#384B70] focus:outline-none"
              onClick={() => scroll("left")}
            >
              ◀
            </button>
            <button
              className="absolute top-1/2 right-2 -translate-y-1/2 bg-[#507687] text-[#FCFAEE] p-2 rounded-full hover:bg-[#384B70] focus:outline-none"
              onClick={() => scroll("right")}
            >
              ▶
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
