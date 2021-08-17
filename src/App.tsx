import { motion, useCycle } from 'framer-motion';
import { useRef } from 'react';

import { MenuToggle, Navigation, useDimensions } from './components';

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

export const App = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <>
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        custom={height}
        ref={containerRef}
      >
        <motion.div className="background" variants={sidebar} />
        <Navigation />
        <MenuToggle toggle={() => toggleOpen()} />
      </motion.nav>
      <motion.div
        className="frame"
        whileTap={{
          boxSizing: 'border-box',
          width: 99,
          height: 442,
          backgroundColor: '#ff99ce',
          overflow: 'visible',
          opacity: 0.31,
          transform: 'rotate(-49deg)',
          border: '7px dotted #ff2e2e',
        }}
        transition={{
          type: 'spring',
          delay: 0,
          stiffness: 500,
          damping: 60,
          mass: 1,
        }}
      >
        Abc
      </motion.div>
    </>
  );
};

export default App;
