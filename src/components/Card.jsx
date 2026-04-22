import { motion } from 'framer-motion';

const Card = ({ children, style, variants }) => {
  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  };

  return (
    <motion.div 
      className="card" 
      style={style}
      variants={variants}
      onMouseMove={handleMouseMove}
    >
      {children}
    </motion.div>
  );
};

export default Card;
