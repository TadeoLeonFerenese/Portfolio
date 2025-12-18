import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ArcaneBackground = () => {
  const particlesInit = useCallback(async engine => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "#000000", // Will be transparent if handled by CSS, but good fallback
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#9b59b6", "#3498db", "#f1c40f"], // Mana Purple, Arcane Blue, Gold
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2, // Subtle magical web
            width: 1,
          },
          move: {
            direction: "top", // Rising energy
            enable: true,
            outModes: {
              default: "out",
            },
            random: true,
            speed: 1, // Slow float
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 60,
          },
          opacity: {
            value: 0.5,
            animation: {
                enable: true,
                speed: 0.5,
                minimumValue: 0.1,
                sync: false
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
        fullScreen: {
            enable: true,
            zIndex: -1 // Behind everything
        }
      }}
    />
  );
};

export default ArcaneBackground;
