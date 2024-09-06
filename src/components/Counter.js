import React, { useState, useEffect, useRef } from 'react';

function Counter({ from, to, preFix, duration }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      {
        threshold: 0.5 // Trigger when 50% of the component is in view
      }
    );

    observer.observe(countRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isInView) {
      const animationDuration = duration; // in milliseconds
      const fps = 60;
      const increment = (to - from) / ((animationDuration / 1000) * fps);
      let currentValue = from;

      const interval = setInterval(() => {
        if (currentValue >= to) {
          clearInterval(interval);
          currentValue = to;
        } else {
          currentValue += increment;
        }
        setCount(currentValue);
      }, 1000 / fps);

      return () => clearInterval(interval);
    }
  }, [isInView, from, to]);

  return (
    <div
      className="text-[52px] font-bold text-primaryColor mt-1"
      ref={countRef}
    >
      {`${Math.floor(count)}  ${preFix}`}
    </div>
  );
}
export default Counter;
