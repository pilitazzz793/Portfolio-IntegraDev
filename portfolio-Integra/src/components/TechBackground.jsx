import { useEffect, useState } from "react";
import Particles, { initParticles} from "@tsparticles/react";
import { loadSlim} from "@tsparticles/slim";

export default function TechBackground(){
    const [init, setInit] = useState(false);

    useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []); }

  if(init) return null;
  return (
    <Particles
    id="tsparticles"
    className="absolute inset-0 pointer-events-none -z-10"
    options={{
        background: { color: { value: "transparent"}},
        fpsLimit: 60,
        interactivity: {
            events: {
                onHover: { enable: true, mode: "grab"}
            },
             },
        particles: {
          color: { value: ["#22d3ee", "#a855f7"] }, // Cian y Violeta
          links: {
            color: "#67e8f9",
            distance: 140,
            enable: true,
            opacity: 0.15,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.8, // Movimiento suave para no marear
            direction: "none",
            outModes: { default: "out" },
          },
          number: {
            density: { enable: true, area: 900 },
            value: 65,
          },
          opacity: { value: { min: 0.2, max: 0.6 } },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 2.5 } },
        },
        detectRetina: true,
      }}
    />
  );
