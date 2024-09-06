import React, { useRef, useState, useEffect } from 'react';
import { useInView } from 'framer-motion';

function FadeInWhenVisible({ children }) {
  const ref = useRef(null);
  const [hasPlayed, setHasPlayed] = useState(false);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView && !hasPlayed) {
      setHasPlayed(true);
    }
  }, [isInView, hasPlayed]);

  return (
    <div ref={ref} className="w-full">
      {children}
    </div>
  );
}

export default FadeInWhenVisible;
