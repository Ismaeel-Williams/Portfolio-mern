"use client";

import { useState, useEffect, useCallback } from "react";
import { Howl } from "howler";
import clsx from "clsx";

const buttonColors = ["red", "blue", "green", "yellow"];

const colorClasses: { [key in "red" | "blue" | "green" | "yellow"]: string } = {
  red: "bg-red-500",
  blue: "bg-blue-500",
  green: "bg-green-500",
  yellow: "bg-yellow-500",
};

export default function Page() {
  const [gamePattern, setGamePattern] = useState<string[]>([]);
  const [userPattern, setUserPattern] = useState<string[]>([]);
  const [gameStarted, setGameStarted] = useState(false);
  const [level, setLevel] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);

  const playSound = (color: string) => {
    const sound = new Howl({ src: [`/game2/sounds/${color}.mp3`] });
    sound.play();
  };

  const animateButton = (color: string) => {
    const button = document.getElementById(color);
    if (button) {
      button.classList.add("pressed");
      setTimeout(() => {
        button.classList.remove("pressed");
      }, 100);
    }
  };

  const startOver = useCallback(() => {
    setGameStarted(false);
    setGamePattern([]);
    setUserPattern([]);
    setLevel(0);
    setIsGameOver(false);
  }, []);

  const nextSequence = useCallback(() => {
    setUserPattern([]);
    const randomColor = buttonColors[Math.floor(Math.random() * 4)];
    setGamePattern((prev) => [...prev, randomColor]);
    setLevel((prev) => prev + 1);
    playSound(randomColor);
    animateButton(randomColor);
  }, []);

  const checkAnswer = useCallback(
    (currentLevel: number) => {
      if (userPattern[currentLevel] === gamePattern[currentLevel]) {
        if (userPattern.length === gamePattern.length) {
          setTimeout(nextSequence, 1000);
        }
      } else {
        playSound("wrong");
        setIsGameOver(true);
        setTimeout(() => {
          setIsGameOver(false);
          startOver(); // Ensure this doesn't cause missing dependency issues
        }, 200);
      }
    },
    [userPattern, gamePattern, nextSequence, startOver] // ✅ Added `startOver`
  );

  const handleUserClick = (color: string) => {
    setUserPattern((prev) => [...prev, color]);
    playSound(color);
    animateButton(color);
  };

  const startGame = useCallback(() => {
    setGameStarted(true);
    setLevel(0);
    setGamePattern([]);
    setUserPattern([]);
    nextSequence();
  }, [nextSequence]);

  useEffect(() => {
    if (userPattern.length > 0) {
      checkAnswer(userPattern.length - 1);
    }
  }, [userPattern, checkAnswer]);

  useEffect(() => {
    const handleStart = () => {
      if (!gameStarted && !isGameOver) {
        startGame();
      }
    };

    window.addEventListener("keydown", handleStart);
    window.addEventListener("click", handleStart);
    window.addEventListener("touchstart", handleStart);

    return () => {
      window.removeEventListener("keydown", handleStart);
      window.removeEventListener("click", handleStart);
      window.removeEventListener("touchstart", handleStart);
    };
  }, [gameStarted, isGameOver, startGame]);

  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center h-screen bg-[#384B70]",
        isGameOver && "bg-red-600"
      )}
    >
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">
        {gameStarted ? `Level ${level}` : "Press Any Key to Start"}
      </h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-4">
        {buttonColors.map((color) => (
          <button
            key={color}
            id={color}
            className={clsx(
              "w-40 h-40 rounded-lg border-4 border-black",
              colorClasses[color as "red" | "blue" | "green" | "yellow"]
            )}
            onClick={() => handleUserClick(color)}
          />
        ))}
      </div>
      {isGameOver && (
        <div className="text-center mt-6">
          <p className="text-lg font-bold text-white">
            Game Over, Tap Screen, Keydown, or Click to Restart
          </p>
        </div>
      )}
    </div>
  );
}
