import { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import { CallIcon, MenuIcon } from '../assets/Icons/Icons'
import { PRIMARY_COLOR, SECONDARY_COLOR } from '../assets/Colors/Color'
import Logo from '../assets/logowhite.png'
import NavTab from './NavTab'

const CursorTracker = ({ position }) => {
    return (
        <motion.div
            animate={{
                ...position
            }}
            className="absolute z-[-1] h-[2rem] bg-opacity-20 rounded-full"
            style={{ backgroundColor: `${PRIMARY_COLOR}30` }}
        />
    )
}

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const [position, setPosition] = useState({
        left: 0,
        width: 0,
        opacity: 0,
    });

    const scrollThreshold = 50;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            
            const footer = document.querySelector('footer');
            if(footer) {
                const footerTop = footer.getBoundingClientRect().top;
                //const windowHeight = window.innerHeight;
                
                if (footerTop <= 80) {
                    setHideHeader(true);
                } else {
                    setHideHeader(false);
                }
            }
            
            if(scrollY > scrollThreshold) {
                setIsScrolled(true);
            } 
            else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])


    const navLinkClass = ({ isActive }) => 
        isActive 
            ? 'text-white! font-medium text-decoration-none py-2 px-3 rounded-full hidden md:block' 
            : 'text-slate-500! font-medium py-2 px-3 rounded-full text-decoration-none hidden md:block';

    const navLinkClassMobile = ({ isActive }) =>
        isActive
            ? 'text-white! font-medium text-decoration-none py-2 px-4 mx-auto rounded-full block md:hidden'
            : 'text-slate-500! font-medium py-2 px-3 rounded-full text-decoration-none block md:hidden';

    const handleShowMenu = () => {
        setShowMenu(prev => !prev);
    }
            
    return (
        <>
            <AnimatePresence mode='wait'>
                <motion.div 
                    className='absolute -top-6 left-2 w-150 h-40 rounded-br-full blur-3xl'
                    style={{
                        background: `radial-gradient(circle at 0% 0%, ${PRIMARY_COLOR}50, ${PRIMARY_COLOR}50)`,
                        transform: 'rotate(10deg)'
                    }}
                    initial={{ opacity: 0.2, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    whileInView={{
                        opacity: 1,
                        scale: 1.2,
                        transition: {
                            duration: 3,
                        }
                    }}
                    viewport={{ once: false }}
                ></motion.div>
            </AnimatePresence>
            <nav
                className={`absolute fixed top-2 flex items-center justify-between w-20/22 md:w-19/22 lg:w-17/22 transition-all z-1000
                    ${isScrolled ? 'border-1 border-gray-800 bg-black/20 rounded-full backdrop-blur-lg' : 'border-1 border-transparent rounded-full'}
                    ${hideHeader ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                `}
                    
                onMouseLeave={() => {
                    setPosition((prev) => ({
                        ...prev,
                        opacity: 0,
                    }))
                }}
            >
                <div className='flex flex-row justify-center items-center md:gap-x-1 gap-x-20 my-2 transition-all'>
                    <NavLink
                        to='.'
                        className='text-decoration-none'
                        end
                    >
                        <img src={Logo} alt="Logo" className='w-20 h-7 pb-1 ms-3' />
                    </NavLink>
                    <NavTab className={'hidden md:block'} setPosition={setPosition}>
                        <NavLink
                            to='about-us'
                            className={navLinkClass}
                            end
                        >
                            About Us
                        </NavLink>
                    </NavTab>
                    <NavTab className={'hidden md:block'} setPosition={setPosition}>
                        <NavLink
                            to='services'
                            className={navLinkClass}
                            end
                        >
                            Services
                        </NavLink>
                    </NavTab>
                    <NavTab className={'hidden md:block'} setPosition={setPosition}>
                        <NavLink
                            to='career'
                            className={navLinkClass}
                            end
                        >
                            Career
                        </NavLink>
                    </NavTab>
                    <NavTab className={'hidden md:block'} setPosition={setPosition}>
                        <NavLink
                            to='contact-us'
                            className={navLinkClass}
                            end
                        >
                            Contact Us
                        </NavLink>
                    </NavTab>
                </div>
                <div className='flex flex-row justify-end md:justify-center items-center md:gap-x-2 gap-x-3 md:mx-5 mx-3 my-2 transition-all'>
                {/* md:gap-x-1 gap-x-20 md:mx-5 mx-3 my-2 */}
                    <NavTab setPosition={setPosition} className={'p-0 m-0'}>
                        <Link
                            to='/sign-up'
                            className='text-white! font-medium text-decoration-none mouse-enter-origin
                                py-1 px-3 rounded-full hover:bg-transparent hidden sm:block'
                        >
                            Sign up
                        </Link>
                    </NavTab>
                    <NavTab setPosition={setPosition}>
                        <button className='py-2 px-3 rounded-full! block bg-slate-900 mouse-enter-origin'>
                            <CallIcon width={20} height={20} />
                        </button>
                    </NavTab>
                    <motion.button
                        className={`py-1 px-2 rounded-full! block hover:bg-slate-900 md:hidden 
                            ${showMenu ? 'menu-btn-animation menu-btn-opened' : 'menu-btn-animation'}`}
                        onClick={handleShowMenu}
                        whileTap={{ scale: 0.9 }}
                    >
                        <MenuIcon width={30} height={30} />
                    </motion.button>
                </div>
                <CursorTracker position={position} />
            </nav>
            <AnimatePresence mode='wait'>
                {(showMenu && !hideHeader) && (
                    <motion.div
                        className={`z-1000 absolute fixed w-11/12 flex flex-column justify-center gap-y-2 p-2 top-18
                            border-1 border-gray-800 bg-black/20 backdrop-blur-lg rounded-lg md:hidden
                        `}
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ 
                            duration: 0.3,
                            type: "spring",
                            stiffness: 300,
                            damping: 25
                        }}
                    >
                        {['about-us', 'services', 'career', 'contact-us'].map((link, index) => (
                            <motion.div
                                key={link}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.175 }}
                                className='w-full flex'
                            >
                                <NavLink
                                    to={link}
                                    className={navLinkClassMobile}
                                    onClick={handleShowMenu}
                                    end
                                >
                                    {link.split('-').map(word => 
                                        word.charAt(0).toUpperCase() + word.slice(1)
                                    ).join(' ')}
                                </NavLink>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}

export default Header