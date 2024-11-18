"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";

interface HeadingProps {
  text: string | string[]; // Accepts a single string or an array of strings for dynamic typing
  typeSpeed?: number; // Speed of typing
  backSpeed?: number; // Speed of backspacing (if using multiple strings)
  startDelay?: number; // Delay before typing starts
  loop?: boolean; // Should it loop the text
}

const Heading: React.FC<HeadingProps> = ({
  text,
  typeSpeed = 50,
  backSpeed = 30,
  startDelay = 1000,
  loop = false,
}) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const options = {
      strings: Array.isArray(text) ? text : [text],
      typeSpeed,
      backSpeed,
      startDelay,
      loop,
    };

    const typed = new Typed(typedRef.current, options);

    return () => typed.destroy(); // Cleanup on unmount
  }, [text, typeSpeed, backSpeed, startDelay, loop]);

  return (
    <h1 className="text-8xl w-3/5 font-outline-2 hover:font-outline-4">
      <span ref={typedRef}></span>
    </h1>
  );
};

export default Heading;
