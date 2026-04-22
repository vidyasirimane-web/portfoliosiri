import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

const routes = ['/', '/about', '/skills', '/projects', '/experience', '/certificates', '/contact', '/resume'];
const routeLabels = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Certificates', 'Contact', 'Resume'];

const PageTransition = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [direction, setDirection] = useState(1); // 1 = going right, -1 = going left
  const [isDragging, setIsDragging] = useState(false);
  const [dragX, setDragX] = useState(0);

  const currentIndex = routes.indexOf(location.pathname);
  const canGoNext = currentIndex < routes.length - 1;
  const canGoPrev = currentIndex > 0;

  const pageVariants = {
    initial: (dir) => ({
      opacity: 0,
      x: dir > 0 ? '100vw' : '-100vw',
      scale: 0.92,
    }),
    in: {
      opacity: 1,
      x: 0,
      scale: 1,
    },
    out: (dir) => ({
      opacity: 0,
      x: dir > 0 ? '-100vw' : '100vw',
      scale: 0.92,
    }),
  };

  const pageTransition = {
    type: 'spring',
    stiffness: 220,
    damping: 26,
    mass: 0.6,
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDrag = (event, info) => {
    setDragX(info.offset.x);
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    setDragX(0);
    const swipeThreshold = 80;

    if (info.offset.x < -swipeThreshold && canGoNext) {
      setDirection(1);
      navigate(routes[currentIndex + 1]);
    } else if (info.offset.x > swipeThreshold && canGoPrev) {
      setDirection(-1);
      navigate(routes[currentIndex - 1]);
    }
  };

  // Swipe hint opacity based on drag amount
  const leftHintOpacity = Math.min(Math.max(-dragX / 150, 0), 1);
  const rightHintOpacity = Math.min(Math.max(dragX / 150, 0), 1);

  return (
    <div style={{ position: 'relative', overflow: 'hidden' }}>

      {/* Left swipe hint */}
      {canGoPrev && (
        <motion.div
          style={{
            position: 'fixed', left: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 999, pointerEvents: 'none',
            opacity: isDragging ? rightHintOpacity : 0,
            background: 'var(--accent-color)',
            borderRadius: '0 1rem 1rem 0',
            padding: '1rem 1.5rem',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: '0 0 30px var(--accent-glow)',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>←</span>
          <span>{routeLabels[currentIndex - 1]}</span>
        </motion.div>
      )}

      {/* Right swipe hint */}
      {canGoNext && (
        <motion.div
          style={{
            position: 'fixed', right: 0, top: '50%', transform: 'translateY(-50%)',
            zIndex: 999, pointerEvents: 'none',
            opacity: isDragging ? leftHintOpacity : 0,
            background: 'var(--accent-color)',
            borderRadius: '1rem 0 0 1rem',
            padding: '1rem 1.5rem',
            color: '#fff',
            fontSize: '0.85rem',
            fontWeight: '700',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            boxShadow: '0 0 30px var(--accent-glow)',
          }}
        >
          <span style={{ fontSize: '1.5rem' }}>→</span>
          <span>{routeLabels[currentIndex + 1]}</span>
        </motion.div>
      )}

      {/* Page dots indicator */}
      <div style={{
        position: 'fixed', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)',
        zIndex: 999, display: 'flex', gap: '0.5rem', pointerEvents: 'none',
      }}>
        {routes.map((_, i) => (
          <motion.div
            key={i}
            animate={{
              width: i === currentIndex ? '2rem' : '0.5rem',
              backgroundColor: i === currentIndex ? 'var(--accent-color)' : 'var(--border-color)',
            }}
            transition={{ type: 'spring', stiffness: 300 }}
            style={{ height: '0.5rem', borderRadius: '1rem', backgroundColor: 'var(--border-color)' }}
          />
        ))}
      </div>

      {/* Page content with drag-to-swipe */}
      <motion.div
        key={location.pathname}
        custom={direction}
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.15}
        onDragStart={handleDragStart}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        style={{ touchAction: 'pan-y', cursor: isDragging ? 'grabbing' : 'grab' }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default PageTransition;
