"use client";
import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

const App = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  if (init) {
    return (
      <Particles
        id="tsparticles"
        url="/config/particlesconfig/particles.json"
        particlesLoaded={particlesLoaded}
        className="absolute top-0 left-0 w-full h-100vh -z-10"
      />
    );
  }

  return <></>;
};

export default App;
