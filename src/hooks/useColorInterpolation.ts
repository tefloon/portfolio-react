// hooks/useColorInterpolation.ts
import { useState, useEffect, useRef } from "react";
import * as d3 from "d3-interpolate";

const useColorInterpolation = (
  color1: string,
  color2: string,
  duration: number
) => {
  const [color, setColor] = useState(color1);
  const prevTimestamp = useRef<number | null>(null);
  let t = 0;
  let direction = 1; // 1 for forward, -1 for backward

  useEffect(() => {
    const animationFrameId = requestAnimationFrame(animate);

    function animate(timestamp: number) {
      if (prevTimestamp.current !== null) {
        const deltaTime = (timestamp - prevTimestamp.current) / 1000; // Time in seconds
        const speed = 2 / duration; // Speed of the transition
        t += direction * deltaTime * speed;

        if (direction > 0 && t >= 1) {
          direction = -1;
          t = 1;
        } else if (direction < 0 && t <= 0) {
          direction = 1;
          t = 0;
        }

        const interpolator = d3.interpolateCubehelix(color1, color2);
        setColor(interpolator(t));
      }

      prevTimestamp.current = timestamp;
      requestAnimationFrame(animate);
    }

    return () => cancelAnimationFrame(animationFrameId);
  }, [color1, color2, duration]);
  return color;
};

export default useColorInterpolation;
