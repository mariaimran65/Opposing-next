import { useEffect, useState, useRef } from 'react';

const useInViewAnimate = () => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.5 // Trigger when 50% of the component is in view
      }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, isInView];
};

export default useInViewAnimate;
