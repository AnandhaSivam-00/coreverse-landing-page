import { useRef, useEffect } from 'react';
import {
    motion,
    AnimatePresence,
    useMotionValue,
    useSpring,
    useTransform
} from 'framer-motion';

import '../App.css';

const Sphere3D = () => {
    const containerRef = useRef(null);
    const sphereRef = useRef(null);

    const mouseX = useMotionValue(0.5);
    const mouseY = useMotionValue(0.5);

    const springX = useSpring(mouseX, {
        stiffness: 70,
        damping: 15,
        mass: 0.5
    });

    const springY = useSpring(mouseY, {
        stiffness: 70,
        damping: 15,
        mass: 0.5
    });

    // Transform mouse position to rotation angles
    // Base rotation + mouse-influenced rotation
    const rotateX = useTransform(springY, [0, 1], [70, 50]);  // Base 60° ± 10°
    const rotateY = useTransform(springX, [0, 1], [15, 35]);  // Base 25° ± 10°

    // Fixed Z rotation calculation
    const rotateZ = useTransform(
        [springX, springY],
        ([x, y]) => -10 + (x - 0.5) * (y - 0.5) * 5  // Subtle Z rotation based on combined X & Y
    );

    const handleMouseMove = (e) => {
        if (!containerRef.current) return;

        const { left, top, width, height } = containerRef.current.getBoundingClientRect();

        // Calculate normalized mouse position (0 to 1)
        const currentX = Math.min(Math.max((e.clientX - left) / width, 0), 1);
        const currentY = Math.min(Math.max((e.clientY - top) / height, 0), 1);

        // Update motion values
        mouseX.set(currentX);
        mouseY.set(currentY);
    };

    const handleMouseLeave = () => {
        // Return to center position when mouse leaves
        mouseX.set(0.5);
        mouseY.set(0.5);
    };

    // Log rotation values for debugging
    useEffect(() => {
        const unsubscribeX = rotateX.onChange(value => console.log('rotateX:', value));
        const unsubscribeY = rotateY.onChange(value => console.log('rotateY:', value));
        const unsubscribeZ = rotateZ.onChange(value => console.log('rotateZ:', value));

        return () => {
            unsubscribeX();
            unsubscribeY();
            unsubscribeZ();
        };
    }, [rotateX, rotateY, rotateZ]);

    const animationVariants = {
        initial: {
            scale: 0.8,
            transition: {
                duration: 0.5
            }
        },
        animate: {
            scale: 1,
            transition: {
                duration: 1,
                type: 'spring',
                stiffness: 50,
                damping: 3
            }
        },
        hovering: {
            scale: 0.9,
            transition: {
                duration: 0.5,
                type: 'spring',
                bounce: 0.5,
            },
        }
    };

    return (
        <div
            ref={containerRef}
            className='relative h-full w-full mt-50 me-50'
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className='absolute w-90 h-90 flex flex-col justify-center items-center inset-0 perspective-[2000px]'
            >
                <motion.div
                    ref={sphereRef}
                    className='relative left-20 bottom-20 flex flex-col justify-center items-center'
                    style={{
                        rotateX: rotateX,
                        rotateY: rotateY,
                        rotateZ: rotateZ,
                        transformStyle: "preserve-3d"
                    }}
                >
                    <motion.div
                        className='absolute w-[38%] h-[38%] rounded-full blur-[20px] transform-3d translate-z-60'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[64%] h-[64%] rounded-full blur-[15px] transform-3d translate-z-47'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[82%] h-[82%] rounded-full blur-[10px] transform-3d translate-z-36'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[93%] h-[93%] rounded-full blur-[2px] transform-3d translate-z-24'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-full h-full rounded-full transform-3d translate-z-12'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='relative w-[30rem] h-[30rem] rounded-full'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color bg-circle-color-line'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[93%] h-[93%] rounded-full transform-3d -translate-z-12'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[82%] h-[82%] rounded-full blur-[10px] transform-3d -translate-z-24'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[64%] h-[64%] rounded-full blur-[15px] transform-3d -translate-z-36'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                    <motion.div
                        className='absolute w-[38%] h-[38%] rounded-full blur-[20px] transform-3d -translate-z-47'
                        variants={animationVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hovering"
                    >
                        <div className='bg-circle-color'></div>
                    </motion.div>
                </motion.div>
            </div>
        </div>
    );
};

export default Sphere3D;