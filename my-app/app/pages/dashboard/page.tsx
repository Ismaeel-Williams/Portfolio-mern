"use client";
import { useState, useRef, useEffect } from "react";

export default function DashboardPage() {
  const [activeIndex, setActiveIndex] = useState(0); // Track the active game index
  const gameRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each game card

  const games = ["Game 1", "Game 2", "Game 3"]; // Replace with your game data

  const scroll = (direction: "left" | "right") => {
    if (direction === "left" && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (direction === "right" && activeIndex < games.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  useEffect(() => {
    // Automatically scroll to the highlighted game
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
      {/* Main Content */}
      <main className="w-full max-w-7xl my-8 px-4 flex flex-col space-y-8">
        {/* Welcome Section */}
        <section className="bg-[#507687] text-[#FCFAEE] p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold">Welcome, John Doe!</h2>
          <p className="text-lg mt-2">
            Here&#39;s an overview of your dashboard. Stay productive!
          </p>
        </section>

        {/* Statistics Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Stats Card */}
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

          {/* Quick Links */}
          <div className="bg-[#FCFAEE] border border-[#507687] p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-4">
              <button className="bg-[#507687] text-[#FCFAEE] px-4 py-2 rounded-md hover:bg-[#384B70]">
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
          {/* Horizontal Scrollable Section */}
          <div className="relative">
            {/* Scrollable Container */}
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
            {/* Arrow Buttons */}
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
