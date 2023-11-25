"use client";

// components/InterpolatingComponent.tsx
import React, { useState, useEffect } from "react";
import { interpolateTransformCss } from "d3-interpolate";

const InterpolatingComponent = () => {
  const [interpolationFactor, setInterpolationFactor] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      // Update the interpolation factor
      setInterpolationFactor((prev) => (prev + 0.01) % 1);

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const interpolator = interpolateTransformCss(
    "translateY(12px) scale(2)",
    "translateX(30px) rotate(5deg)"
  );

  const style = {
    transform: interpolator(interpolationFactor),
  };

  return (
    <div className="fixed top-1/3 left-1/3" style={style}>
      Animated Element
    </div>
  );
};

export default InterpolatingComponent;
