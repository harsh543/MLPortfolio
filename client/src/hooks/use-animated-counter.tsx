import { useEffect, useState } from "react";

export function useAnimatedCounter(
  target: number,
  duration: number = 2000,
  trigger: boolean = true
): number {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!trigger) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);
      
      // Easing function for smooth animation
      const easeOutCubic = 1 - Math.pow(1 - percentage, 3);
      const currentValue = startValue + (target - startValue) * easeOutCubic;
      
      setCurrent(currentValue);

      if (percentage < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration, trigger]);

  return Math.round(current * 100) / 100; // Round to 2 decimal places
}
