import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

import { cardVariants } from '../utils/Animations';
import '../App.css';

const Spotlight3DCardEffect = ({ children, event, className='rounded-lg p-3' }) => {
  const cardRef = useRef(null);
  
  useEffect(() => {
    if(!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    if(!event) return;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
  }, [event]);

  return (
    <motion.div 
      className={`relative box-border flex flex-col overflow-hidden ${className} hover:cursor-pointer 
        perspective-[1300px] will-change-transform transform-3d spotlight-card`}
      ref={cardRef} 
      variants={cardVariants}
      initial='initial'
      whileInView='whileInView'
      viewport='viewport'
    >
      { children }
      <div className="absolute inset-px z-[-2] spotlight-card-content"></div>
    </motion.div>
  );
};

export default Spotlight3DCardEffect;