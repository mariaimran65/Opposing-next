import React from 'react';
import { motion } from 'framer-motion';
import useInViewAnimate from '@/hooks/useInView';

function MyComponent() {
  const { ref: ref1, controls: controls1 } = useInViewAnimate({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5 }
  });

  const { ref: ref2, controls: controls2 } = useInViewAnimate({
    scale: 1.2,
    y: 0,
    transition: { duration: 0.5, delay: 0.3 }
  });

  return (
    <div>
      <motion.div
        ref={ref1}
        initial={{ opacity: 0, x: -100 }}
        animate={controls1}
      >
        {/* Your first animated component */}
        This component will animate when it comes into view
      </motion.div>

      <motion.div
        ref={ref2}
        initial={{ scale: 0.8, y: 100 }}
        animate={controls2}
      >
        {/* Your second animated component */}
        This component will animate differently when it comes into view
      </motion.div>
    </div>
  );
}

export default MyComponent;
