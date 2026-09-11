import React, { useState, useEffect, useRef } from 'react';
import '../../App.css';

const defaultTilt = { x: 55, y: 20, z: 0 }; // Default X, Y, and Z tilt

const Sphere3DMain = () => {
  // Define the new default tilt for the sphere including Z

  const [interactiveRotation, setInteractiveRotation] = useState(defaultTilt);
  const [isMouseInside, setIsMouseInside] = useState(false);
  const [hoveredDisk, setHoveredDisk] = useState(null); 
  const spherePosition = useRef(0); // Changed to useRef to avoid re-renders
  const sphereWrapperRef = useRef(null);
  const lastScrollY = useRef(0);
  const rafRef = useRef(null); // For request animation frame

  // Modified diskData with increased z-value spacing
  const diskData = [
    { id: 'disk-p5', z: 240, sizeW: 'w-[38%]', sizeH: 'h-[38%]', blur: 'blur-[20px]', initialScale: 1 },
    { id: 'disk-p4', z: 180, sizeW: 'w-[64%]', sizeH: 'h-[64%]', blur: 'blur-[15px]', initialScale: 1 },
    { id: 'disk-p3', z: 130, sizeW: 'w-[82%]', sizeH: 'h-[82%]', blur: 'blur-[10px]', initialScale: 1 },
    { id: 'disk-p2', z: 80, sizeW: 'w-[93%]', sizeH: 'h-[93%]', blur: 'blur-[2px]', initialScale: 1 },
    { id: 'disk-p1', z: 40, sizeW: 'w-full', sizeH: 'h-full', blur: '', initialScale: 1 },
    
    { id: 'disk-n1', z: -40, sizeW: 'w-[93%]', sizeH: 'h-[93%]', blur: '', initialScale: 1 },
    { id: 'disk-n2', z: -80, sizeW: 'w-[82%]', sizeH: 'h-[82%]', blur: 'blur-[10px]', initialScale: 1 },
    { id: 'disk-n3', z: -130, sizeW: 'w-[64%]', sizeH: 'h-[64%]', blur: 'blur-[15px]', initialScale: 1 },
    { id: 'disk-n4', z: -180, sizeW: 'w-[38%]', sizeH: 'h-[38%]', blur: 'blur-[20px]', initialScale: 1 },
    // { id: 'disk-n5', z: -240, sizeW: 'w-[28%]', sizeH: 'h-[28%]', blur: 'blur-[25px]', initialScale: 1 },
  ];

  // Handle mouse movement for rotation
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (!sphereWrapperRef.current) return;

      const { clientX, clientY } = event;
      const { left, top, width, height } = sphereWrapperRef.current.getBoundingClientRect();
      
      const mouseX = clientX - left - width / 2;
      const mouseY = clientY - top - height / 2;

      // Sensitivity factors
      const rotateXSensitivity = -0.07; 
      const rotateYSensitivity = 0.07;  
      const rotateZSensitivity = 0.05;

      // Max rotation deviation from the defaultTilt during mouse interaction.
      const maxDeviationX = 30; 
      const maxDeviationY = 35; 
      const maxDeviationZ = 25;

      // Calculate new rotations based on mouse movement around the default tilt.
      let newRotateX = defaultTilt.x + Math.max(-maxDeviationX, Math.min(maxDeviationX, mouseY * rotateXSensitivity));
      let newRotateY = defaultTilt.y + Math.max(-maxDeviationY, Math.min(maxDeviationY, mouseX * rotateYSensitivity));
      let newRotateZ = defaultTilt.z + Math.max(-maxDeviationZ, Math.min(maxDeviationZ, mouseX * rotateZSensitivity));
      
      setInteractiveRotation({ x: newRotateX, y: newRotateY, z: newRotateZ });
    };

    if (isMouseInside) {
      window.addEventListener('mousemove', handleMouseMove);
    } else {
      // When mouse leaves, smoothly return to the default tilt
      setInteractiveRotation(defaultTilt);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMouseInside]);

  // Handle scroll for vertical movement - using RAF for performance
  useEffect(() => {
    const handleScroll = () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      
      rafRef.current = requestAnimationFrame(() => {
        // Get current scroll position
        const currentScrollY = window.scrollY;

        // Calculate scroll direction and distance
        const scrollDelta = currentScrollY - lastScrollY.current;
        
        // Update scroll reference for next calculation
        lastScrollY.current = currentScrollY;
        
        // Calculate sphere vertical movement
        // When scrolling down (positive delta), sphere moves up (negative position)
        // When scrolling up (negative delta), sphere moves down (positive position)
        const moveFactor = 0.15;
        const immediateDirectionalBoost = Math.sign(scrollDelta) * 2;
        const smoothMovement = scrollDelta * moveFactor;
        const movement = smoothMovement + immediateDirectionalBoost;
        
        // Add damping to prevent extreme movement
        const maxMovement = 25; // Maximum pixel movement per scroll event
        const dampedMovement = Math.max(-maxMovement, Math.min(maxMovement, movement));
        
        // Update sphere position with damping (using ref instead of state)
        const newPosition = spherePosition.current - dampedMovement;
        spherePosition.current = Math.max(-100, Math.min(100, newPosition));
        
        // Apply the movement directly to the DOM element for better performance
        if (sphereWrapperRef.current) {
          sphereWrapperRef.current.style.transform = `translateY(${spherePosition.current}px)`;
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []); // Empty dependency array

  const transitionStyle = isMouseInside
    ? 'transform 4s linear' 
    : 'transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

  return (
    <div
      ref={sphereWrapperRef}
      className='absolute flex justify-center items-center inset-0 perspective-[2000px] transform-3d z-0'
      onMouseEnter={() => setIsMouseInside(true)}
      onMouseLeave={() => setIsMouseInside(false)}
      style={{ 
        willChange: 'transform',
        transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
      }} 
    >
      <div
        className='relative flex justify-center items-center text-[1.1em] md:text-[1.15em] lg:text-[1.2em] transform-3d 
            min-w-[26em] min-h-[26em] md:min-w-[23em] md:min-h-[23em] lg:min-w-[23em] lg:min-h-[23em]'
        style={{
          transform: `rotateX(${interactiveRotation.x}deg) rotateY(${interactiveRotation.y}deg) rotateZ(${interactiveRotation.z}deg)`,
          transition: transitionStyle, 
          willChange: 'transform',
          transformStyle: 'preserve-3d', 
        }}
      >
        {diskData.map((disk, index) => (
          <div
            key={disk.id}
            className={`absolute rounded-full ${disk.blur || ''} ${disk.sizeW} ${disk.sizeH}`}
            style={{
              transform: `translateZ(${disk.z}px) scale(${hoveredDisk === index ? 0.8 : disk.initialScale})`,
              transition: 'transform 1s ease-out', 
              willChange: 'transform',
            }}
            onMouseEnter={() => setHoveredDisk(index)}
            onMouseLeave={() => setHoveredDisk(null)}
          >
            <div className='bg-circle-color w-full h-full rounded-full'></div>
          </div>
        ))}

        <div
          className='absolute w-full h-full rounded-full'
          style={{
            transform: 'translateZ(0px)', 
            willChange: 'transform', 
          }}
        >
          <div className='bg-circle-color bg-circle-color-line w-full h-full rounded-full'></div>
        </div>
      </div>
    </div>
  );
};

export default Sphere3DMain;