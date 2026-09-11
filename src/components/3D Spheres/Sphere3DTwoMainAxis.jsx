import { useState, useEffect, useRef } from 'react';
import '../../App.css';

// Define default tilt outside the component
const defaultTilt = { x: 65, y: -40, z: 5 };

const Sphere3DTwoMainAxis = () => {
    const [interactiveRotation, setInteractiveRotation] = useState(defaultTilt);
    const [isMouseInside, setIsMouseInside] = useState(false);
    const [hoveredDisk, setHoveredDisk] = useState(null);
    const spherePosition = useRef(0);
    const sphereWrapperRef = useRef(null);
    const lastScrollY = useRef(0);
    const rafRef = useRef(null);

    // Revised disk data with proper z-index, z-positions and sizing
    const diskData = [
        { id: 'disk-p3', z: 120, sizeW: 'w-[40%]', sizeH: 'h-[40%]', blur: 'blur-[20px]', initialScale: 1, isRing: false, zIndex: 7 },
        { id: 'disk-p2', z: 60, sizeW: 'w-[77%]', sizeH: 'h-[77%]', blur: 'blur-[7px]', initialScale: 1, isRing: false, zIndex: 6 },
        { id: 'disk-p1', z: 0, sizeW: 'w-[90%]', sizeH: 'h-[90%]', blur: '', initialScale: 1, isRing: true, zIndex: 5 },
        { id: 'disk-n1', z: -60, sizeW: 'w-[77%]', sizeH: 'h-[77%]', blur: 'blur-[7px]', initialScale: 1, isRing: false, zIndex: 4 },
        { id: 'disk-n2', z: -120, sizeW: 'w-[55%]', sizeH: 'h-[55%]', blur: '', initialScale: 1, isRing: true, zIndex: 3 },
        { id: 'disk-n3', z: -160, sizeW: 'w-[40%]', sizeH: 'h-[40%]', blur: 'blur-[20px]', initialScale: 1, isRing: false, zIndex: 2 }
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
            const rotateXSensitivity = -0.08;
            const rotateYSensitivity = 0.08;
            const rotateZSensitivity = 0.04;

            // Max rotation deviation from the defaultTilt during mouse interaction
            const maxDeviationX = 35;
            const maxDeviationY = 35;
            const maxDeviationZ = 20;

            // Calculate new rotations based on mouse movement around the default tilt
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
                const moveFactor = 0.17;
                const immediateDirectionalBoost = Math.sign(scrollDelta) * 2;
                const smoothMovement = scrollDelta * moveFactor;
                const movement = smoothMovement + immediateDirectionalBoost;

                // Add damping to prevent extreme movement
                const maxMovement = 30;
                const dampedMovement = Math.max(-maxMovement, Math.min(maxMovement, movement));

                // Update sphere position with damping
                const newPosition = spherePosition.current - dampedMovement;
                spherePosition.current = Math.max(-120, Math.min(120, newPosition));

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
    }, []);

    // Transition style based on mouse presence
    const transitionStyle = isMouseInside
        ? 'transform 3s linear'
        : 'transform 5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';

    return (
        <div
            ref={sphereWrapperRef}
            className='absolute flex justify-center items-center inset-0 perspective-[2000px] 
        transform-3d z-0 top-[1em]'
            onMouseEnter={() => setIsMouseInside(true)}
            onMouseLeave={() => setIsMouseInside(false)}
            style={{
                willChange: 'transform',
                transition: 'transform 0.2s cubic-bezier(0.33, 1, 0.68, 1)'
            }}
        >
            <div
                className='relative flex justify-center items-center text-[0.8em] md:text-[1em] lg:text-[1.2em] w-[25em] h-[25em] transform-3d'
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
                        className={`absolute ${disk.blur || ''} ${disk.sizeW} ${disk.sizeH} rounded-full transform-3d perspective-[1000px]`}
                        style={{
                            transform: `translateZ(${disk.z}px) scale(${hoveredDisk === index ? 0.8 : disk.initialScale})`,
                            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
                            willChange: 'transform',
                            zIndex: disk.zIndex,
                        }}
                        onMouseEnter={() => setHoveredDisk(index)}
                        onMouseLeave={() => setHoveredDisk(null)}
                    >
                        <div className={`w-full h-full rounded-full ${disk.isRing ? 'bg-circle-color bg-circle-color-line' : 'bg-circle-color'}`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sphere3DTwoMainAxis;