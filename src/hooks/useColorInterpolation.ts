"use client";

// hooks/useColorInterpolation.ts
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3-interpolate";

const useColorInterpolation = (
  color1: string,
  color2: string,
  duration: number
) => {
  const [color, setColor] = useState(color1);
  const timestep = useRef(0);
  const direction = useRef(1); // 1 for forward, -1 for backward
  const prevTimestamp = useRef<number | null>(null);

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(animate);

    function animate(timestamp: number) {
      if (prevTimestamp.current !== null) {
        const deltaTime = (timestamp - prevTimestamp.current) / 1000; // Time in seconds
        const speed = 2 / duration; // Speed of the transition
        timestep.current += direction.current * deltaTime * speed;

        if (direction.current > 0 && timestep.current >= 1) {
          direction.current = -1;
          timestep.current = 1;
        } else if (direction.current < 0 && timestep.current <= 0) {
          direction.current = 1;
          timestep.current = 0;
        }

        const interpolator = d3.interpolateCubehelix(color1, color2);
        setColor(interpolator(timestep.current));
      }

      prevTimestamp.current = timestamp;
      requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [color1, color2, duration]);
  return color;
};

export default useColorInterpolation;
