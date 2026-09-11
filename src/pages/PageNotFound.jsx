import { useEffect, useRef, useState } from 'react';
import { motion, useTime, useTransform, AnimatePresence } from 'framer-motion';

import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation';

import PageNotFoundBgImage from '../assets/flow-09.jpg';

const pathData = [
    "M361.604 361.238c-24.407 24.408-51.119 37.27-59.662 28.727-8.542-8.543 4.319-35.255 28.726-59.663 24.408-24.407 51.12-37.269 59.663-28.726 8.542 8.543-4.319 35.255-28.727 59.662z",
    "M360.72 360.354c-35.879 35.88-75.254 54.677-87.946 41.985-12.692-12.692 6.105-52.067 41.985-87.947 35.879-35.879 75.254-54.676 87.946-41.984 12.692 12.692-6.105 52.067-41.984 87.946z",
    "M357.185 356.819c-44.91 44.91-94.376 68.258-110.485 52.149-16.11-16.11 7.238-65.575 52.149-110.485 44.91-44.91 94.376-68.259 110.485-52.15 16.11 16.11-7.239 65.576-52.149 110.486z",
    "M350.998 350.632c-53.21 53.209-111.579 81.107-130.373 62.313-18.794-18.793 9.105-77.163 62.314-130.372 53.209-53.21 111.579-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z",
    "M343.043 342.677c-59.8 59.799-125.292 91.26-146.283 70.268-20.99-20.99 10.47-86.483 70.269-146.282 59.799-59.8 125.292-91.26 146.283-70.269 20.99 20.99-10.47 86.484-70.27 146.283z",
    "M334.646 334.28c-65.169 65.169-136.697 99.3-159.762 76.235-23.065-23.066 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z",
    "M324.923 324.557c-69.806 69.806-146.38 106.411-171.031 81.76-24.652-24.652 11.953-101.226 81.759-171.032 69.806-69.806 146.38-106.411 171.031-81.76 24.652 24.653-11.953 101.226-81.759 171.032z",
    "M312.99 312.625c-73.222 73.223-153.555 111.609-179.428 85.736-25.872-25.872 12.514-106.205 85.737-179.428s153.556-111.609 179.429-85.737c25.872 25.873-12.514 106.205-85.737 179.429z",
    "M300.175 299.808c-75.909 75.909-159.11 115.778-185.837 89.052-26.726-26.727 13.143-109.929 89.051-185.837 75.908-75.908 159.11-115.778 185.837-89.051 26.726 26.726-13.143 109.928-89.051 185.836z",
    "M284.707 284.34c-77.617 77.617-162.303 118.773-189.152 91.924-26.848-26.848 14.308-111.534 91.924-189.15C265.096 109.496 349.782 68.34 376.63 95.188c26.849 26.849-14.307 111.535-91.923 189.151z",
    "M269.239 267.989c-78.105 78.104-163.187 119.656-190.035 92.807-26.849-26.848 14.703-111.93 92.807-190.035 78.105-78.104 163.187-119.656 190.035-92.807 26.849 26.848-14.703 111.93-92.807 190.035z",
    "M252.887 252.52C175.27 330.138 90.584 371.294 63.736 344.446 36.887 317.596 78.043 232.91 155.66 155.293 233.276 77.677 317.962 36.521 344.81 63.37c26.85 26.848-14.307 111.534-91.923 189.15z",
    "M236.977 236.61C161.069 312.52 77.867 352.389 51.14 325.663c-26.726-26.727 13.143-109.928 89.052-185.837 75.908-75.908 159.11-115.777 185.836-89.05 26.727 26.726-13.143 109.928-89.051 185.836z",
    "M221.067 220.7C147.844 293.925 67.51 332.31 41.639 306.439c-25.873-25.873 12.513-106.206 85.736-179.429C200.6 53.786 280.931 15.4 306.804 41.272c25.872 25.873-12.514 106.206-85.737 179.429z",
    "M205.157 204.79c-69.806 69.807-146.38 106.412-171.031 81.76-24.652-24.652 11.953-101.225 81.759-171.031 69.806-69.807 146.38-106.411 171.031-81.76 24.652 24.652-11.953 101.226-81.759 171.032z",
    "M189.247 188.881c-65.169 65.169-136.696 99.3-159.762 76.235-23.065-23.065 11.066-94.593 76.235-159.762s136.697-99.3 159.762-76.235c23.065 23.065-11.066 94.593-76.235 159.762z",
    "M173.337 172.971c-59.799 59.8-125.292 91.26-146.282 70.269-20.991-20.99 10.47-86.484 70.268-146.283 59.8-59.799 125.292-91.26 146.283-70.269 20.99 20.991-10.47 86.484-70.269 146.283z",
    "M157.427 157.061c-53.209 53.21-111.578 81.108-130.372 62.314-18.794-18.794 9.104-77.164 62.313-130.373 53.21-53.209 111.58-81.108 130.373-62.314 18.794 18.794-9.105 77.164-62.314 130.373z",
    "M141.517 141.151c-44.91 44.91-94.376 68.259-110.485 52.15-16.11-16.11 7.239-65.576 52.15-110.486 44.91-44.91 94.375-68.258 110.485-52.15 16.109 16.11-7.24 65.576-52.15 110.486z",
    "M125.608 125.241c-35.88 35.88-75.255 54.677-87.947 41.985-12.692-12.692 6.105-52.067 41.985-87.947C115.525 43.4 154.9 24.603 167.592 37.295c12.692 12.692-6.105 52.067-41.984 87.946z",
    "M109.698 109.332c-24.408 24.407-51.12 37.268-59.663 28.726-8.542-8.543 4.319-35.255 28.727-59.662 24.407-24.408 51.12-37.27 59.662-28.727 8.543 8.543-4.319 35.255-28.726 59.663z"
];

const BASE_STROKE_COLOR = "rgba(239, 68, 68, 0.19)";
const HIGHLIGHT_STROKE_COLOR = "rgba(255, 100, 100, 0.96)";
// const MID_HIGHLIGHT_STROKE_COLOR = "rgba(255, 85, 85, 0.6)";

const AnimatedPath = ({ d, index, time, introVariants, introComplete }) => {
    // Breath Animation Logic
    const breathValue = useTransform(
        time,
        t => (1 - Math.sin(index * 0.35 + 0.0022 * t)) / 2
    );
    const translateX = useTransform(breathValue, [0, 0.5, 1], [-2, 0, 2]);
    const translateY = useTransform(breathValue, [0, 0.5, 1], [-2, 0, 2]);

    const animatedStrokeColor = useTransform(
        breathValue,
        [0, 0.6, 1],
        [
            BASE_STROKE_COLOR,
            HIGHLIGHT_STROKE_COLOR,
            BASE_STROKE_COLOR
        ]
    );

    const commonPathStyle = {
        strokeWidth: 1, // Explicitly set strokeWidth
    };

    return (
        <motion.path
            d={d}
            fill="url(#sphereGradient)"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={introVariants}
            style={introComplete ? {
                ...commonPathStyle,
                translateX: translateX,
                translateY: translateY,
                stroke: animatedStrokeColor,
            } : {
                ...commonPathStyle,
                stroke: animatedStrokeColor
            }}
            transition={{
                duration: 0.5
            }}
        />
    );
};

const PageNotFound = () => {
    const animationWrapperRef = useRef(null);
    const sphereAnimationRef = useRef(null);
    const [introComplete, setIntroComplete] = useState(false);


    // Time for breath animation
    const time = useTime();

    // Intro animation: draw paths
    const introVariants = {
        hidden: { pathLength: 0, opacity: 0 }, // Start undrawn and invisible
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { duration: 2, ease: "easeInOut", delay: i * 0.06 },
                opacity: { duration: 0.1, delay: i * 0.06 } // Become visible as drawing starts
            }
        }),
    };

    // Gradient animation for the fill
    const gradientAnimation = {
        // Define initial attributes directly on the component if animate prop causes issues
        // animate prop will take precedence for animation
        animate: {
            x1: ["5%", "25%"],
            x2: ["5%", "25%"],
            y1: ["0%", "0%"],
            y2: ["15%", "75%"],
            transition: {
                duration: 30,
                ease: [0.23, 1, 0.32, 1], // cubic-bezier for easeOutQuint
                repeat: Infinity,
                repeatType: "mirror",
            }
        }
    };

    // Effect to mark intro animation as complete
    useEffect(() => {
        const timer = setTimeout(() => {
            setIntroComplete(true);
        }, pathData.length * 60 + 2000);
        return () => clearTimeout(timer);
    }, []);


    return (
        <div className="relative flex items-center justify-center w-screen min-h-screen overflow-hidden">
            {/* <div
                className="absolute inset-0 bg-[url('/src/assets/flow-09.jpg')] bg-cover bg-no-repeat bg-center opacity-25"
                aria-hidden="true"
            /> */}
            <img src={PageNotFoundBgImage}
                loading='eager'
                alt='Page Not Found Background Imaga with glass look'
                className='absolute inset-0 w-full h-full object-cover opacity-25'
                aria-hidden="true"
            />

            <div ref={animationWrapperRef} className="z-1 w-full md:w-1/2 relative">
                <motion.div
                    ref={sphereAnimationRef}
                    className="absolute top-1/2 left-1/2 max-w-5xl max-h-5xl"
                    style={{
                        x: '-50%',
                        y: '-50%',
                        // scale: scale,
                        transformOrigin: 'center center',
                    }}
                >
                    <motion.svg
                        viewBox="0 0 440 440"
                        className="w-full h-full"
                    >
                        <defs>
                            <motion.linearGradient
                                id="sphereGradient"
                                initial={{ // Define initial state here
                                    x1: "5%",
                                    x2: "5%",
                                    y1: "0%",
                                    y2: "15%"
                                }}
                                animate={gradientAnimation.animate}
                            >
                                <stop stopColor="#373734" offset="0%" />
                                <stop stopColor="#242423" offset="50%" />
                                <stop stopColor="#0D0D0C" offset="100%" />
                            </motion.linearGradient>
                        </defs>
                        <AnimatePresence>
                            {pathData.map((d, i) => (
                                <AnimatedPath
                                    key={i}
                                    d={d}
                                    index={i}
                                    time={time}
                                    introVariants={introVariants}
                                    introComplete={introComplete}
                                />
                            ))}
                        </AnimatePresence>
                    </motion.svg>
                </motion.div>

            </div>
            <motion.h1 
                className='absolute top-1/2 left-1/2'
                style={{
                    x: '-50%',
                    y: '-50%',
                    transformOrigin: 'center center',
                }}
                initial={{
                    opacity: 0,
                    y: 0,
                }}
                animate={{
                    opacity: 1,
                    y: -200,
                    transition: {
                        duration: 1,
                        delay: 1,
                        ease: "easeInOut",
                    }
                }}
            >
                404
            </motion.h1>
            <motion.h2 
                className='absolute top-1/2 left-1/2 text-center'
                style={{
                    x: '-50%',
                    y: '-50%',
                    // scale: scale,
                    transformOrigin: 'center center',
                }}
                initial={{
                    opacity: 0,
                    y: 0,
                }}
                animate={{
                    opacity: 1,
                    y: 130,
                    transition: {
                        duration: 1,
                        delay: 1,
                        ease: "easeInOut",
                    }
                }}
            >
                Page Not Found
            </motion.h2>
            <div className='absolute bottom-5'>
                <PrimaryButtonAnimation
                    linkText='Go to Home'
                    link={'/'}
                    animationStyle={'mouse-exit-origin'}
                />
            </div>
        </div>
    );
};

export default PageNotFound;