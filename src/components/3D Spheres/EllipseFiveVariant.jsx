import React, { useRef, useEffect } from 'react'
import { 
    motion, 
    useMotionValue, 
    useTransform 
} from 'framer-motion'

import { ellipseFiveVariant } from '../../utils/Animations';

const EllipseFiveVariant = () => {
    const ref = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const spherePosition = useRef(0);
    const lastScrollY = useRef(0);
    const rafRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!ref.current) return;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        // Normalized position relative to element center (-0.5 to 0.5)
        const x = (event.clientX - left) / width - 0.5;
        const y = (event.clientY - top) / height - 0.5;
        mouseX.set(x);
        mouseY.set(y);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    // Map normalized mouse position to rotation angles
    const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15], { clamp: false });
    const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15], { clamp: false });

    // Add Z interaction - mouse distance from center affects Z rotation
    const rotateZ = useTransform(
        [mouseX, mouseY], 
        ([latestX, latestY]) => {
            return Math.sqrt(latestX * latestX + latestY * latestY) * 5; // Calculate distance from center
        }
    );

    // Disk data with animation properties and z-axis values
    const diskData = [
        { 
            id: 'disk-5', 
            className: 'absolute w-[50%] h-[50%] rounded-full transform-3d blur-[20px] translate-x-[10.7em] translate-y-[9.8em] translate-z-[7em] z-7',
            baseZ: 7,
            hoverZOffset: 2.5
        },
        { 
            id: 'disk-4', 
            className: 'absolute w-[80%] h-[80%] rounded-full transform-3d blur-[7px] translate-x-[3.5em] translate-y-[5em] translate-z-[3.5em] z-6',
            baseZ: 3.5,
            hoverZOffset: 2
        },
        { 
            id: 'disk-3', 
            className: 'relative w-[30em] h-[30em] rounded-full transform-3d translate-x-11 translate-y-10 translate-z-7 z-5',
            baseZ: 7,
            hoverZOffset: 3,
            isRing: true
        },
        { 
            id: 'disk-2', 
            className: 'absolute w-[93%] h-[93%] rounded-full transform-3d blur-[7px] translate-x-[1.4em] translate-y-[6.5em] -translate-z-[4.4em] z-4',
            baseZ: -4.4,
            hoverZOffset: -2
        },
        { 
            id: 'disk-1', 
            className: 'absolute w-[60%] h-[60%] rounded-full transform-3d blur-[20px] -translate-x-[4.7em] translate-y-[6.2em] -translate-z-[11em] z-3',
            baseZ: -11,
            hoverZOffset: -3
        },
    ];

    // Handle scroll for vertical movement - using RAF for performance
    useEffect(() => {
        const handleScroll = () => {
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
            
            rafRef.current = requestAnimationFrame(() => {
                const currentScrollY = window.scrollY;
                const scrollDelta = currentScrollY - lastScrollY.current;
                lastScrollY.current = currentScrollY;
                
                const moveFactor = 0.2;
                const immediateDirectionalBoost = Math.sign(scrollDelta) * 2;
                const smoothMovement = scrollDelta * moveFactor;
                const movement = smoothMovement + immediateDirectionalBoost;
                
                const maxMovement = 30;
                const dampedMovement = Math.max(-maxMovement, Math.min(maxMovement, movement));
                
                const newPosition = spherePosition.current - dampedMovement;
                spherePosition.current = Math.max(-120, Math.min(120, newPosition));
                
                if (ref.current) {
                    ref.current.style.transform = `translateY(${spherePosition.current}px) matrix3d(0.963308, 0.163005, -0.213228, 0, -0.169796, 0.985382, -0.0138062, 0, 0.20786, 0.049505, 0.976905, 0, 0, 0, 0, 1)`;
                }
            });
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <motion.div
            ref={ref}
            className='absolute flex justify-center items-center inset-0 perspective-[2000px] transform-3d text-[0.7em] md:text-[0.8em] lg:text-[0.9em]'
            style={{
                rotateX,
                rotateY,
                rotateZ,
                willChange: 'transform',
                transition: 'transform 3.5s cubic-bezier(0.33, 1, 0.68, 1)'
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
            <div
                className='relative -top-[3em] flex justify-center items-center transform-3d'
                style={{
                    willChange: 'transform',
                    transform: 'matrix3d(0.613547, 0.354121, -0.705804, 0, 0.0776852, 0.862405, 0.500223, 0, 0.785828, -0.361741, 0.501616, 0, 0, 2.027, 0, 1)'
                }}
            >
                {diskData.map((disk) => (
                    <motion.div
                        key={disk.id}
                        className={disk.className}
                        variants={ellipseFiveVariant}
                        initial='initial'
                        whileHover='whileHover'
                        // z: disk.baseZ + disk.hoverZOffset,
                        style={{
                            z: disk.baseZ,
                        }}
                    >
                        <div className={`${disk.isRing ? 'bg-circle-color bg-circle-color-line' : 'bg-circle-color'} w-full h-full rounded-full`}></div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    )
}

export default EllipseFiveVariant