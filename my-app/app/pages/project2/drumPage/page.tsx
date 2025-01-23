"use client";
import { useEffect, useState } from "react";

const DrumKitPage: React.FC = () => {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  // Function to play sound based on key
  const makeSound = (key: string) => {
    let sound: HTMLAudioElement | null = null;

    switch (key) {
      case "w":
        sound = new Audio("/project2/sounds/tom-1.mp3");
        break;
      case "a":
        sound = new Audio("/project2/sounds/tom-2.mp3");
        break;
      case "s":
        sound = new Audio("/project2/sounds/tom-3.mp3");
        break;
      case "d":
        sound = new Audio("/project2/sounds/tom-4.mp3");
        break;
      case "j":
        sound = new Audio("/project2/sounds/snare.mp3");
        break;
      case "k":
        sound = new Audio("/project2/sounds/crash.mp3");
        break;
      case "l":
        sound = new Audio("/project2/sounds/kick-bass.mp3");
        break;
      default:
        console.log(`No sound found for ${key}`);
        return;
    }

    sound.play();
  };

  // Function for button animation
  const buttonAnimation = (currentKey: string) => {
    setActiveKey(currentKey);

    setTimeout(() => {
      setActiveKey(null);
    }, 100);
  };

  // Event listener for keyboard press
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      makeSound(key);
      buttonAnimation(key);
    };

    window.addEventListener("keydown", handleKeydown);

    // Clean up event listener
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  // Event listener for button click
  const handleClick = (key: string) => {
    makeSound(key);
    buttonAnimation(key);
  };

  return (
    <div className="bg-[#283149] text-center min-h-screen">
      <h1 className="text-5xl text-[#DBEDF3] font-[Arvo] text-shadow pt-10">
        Drum 🥁 Kit
      </h1>
      <div className="set">
        <button
          className={`w drum ${
            activeKey === "w" ? "pressed" : ""
          } p-10 w-10 sm:w-1/4 lg:w-1/5`}
          onClick={() => handleClick("w")}
        >
          w
        </button>
        <button
          className={`a drum ${
            activeKey === "a" ? "pressed" : ""
          }p-10 w-10 sm:w-1/4 lg:w-1/5`}
          onClick={() => handleClick("a")}
        >
          a
        </button>
        <button
          className={`s drum ${
            activeKey === "s" ? "pressed" : ""
          } p-10 w-10 sm:w-1/4 lg:w-1/5`}
          onClick={() => handleClick("s")}
        >
          s
        </button>
        <button
          className={`d drum ${
            activeKey === "d" ? "pressed" : ""
          }p-10 w-10 sm:w-1/4 lg:w-1/5`}
          onClick={() => handleClick("d")}
        >
          d
        </button>
        <button
          className={`j drum ${
            activeKey === "j" ? "pressed" : ""
          } p-10 w-10 sm:w-1/4`}
          onClick={() => handleClick("j")}
        >
          j
        </button>
        <button
          className={`k drum ${
            activeKey === "k" ? "pressed" : ""
          }p-10 w-10 sm:w-1/4`}
          onClick={() => handleClick("k")}
        >
          k
        </button>
        <button
          className={`l drum ${
            activeKey === "l" ? "pressed" : ""
          }p-10 w-10 sm:w-1/4`}
          onClick={() => handleClick("l")}
        >
          l
        </button>
      </div>
      <footer className="text-[#DBEDF3] font-sans pt-10">
        <p className="relative top-10">Made with ❤️ in London.</p>
      </footer>
    </div>
  );
};

export default DrumKitPage;
