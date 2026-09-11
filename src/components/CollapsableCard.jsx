import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { PlusIcon } from '../assets/Icons/Icons';

import '../App.css';

const CollapsableCard = ({ heading, text }) => {
    const [isCollapse, setIsCollapse] = useState(true);

    const cardVariants = {
        collapsed: {
            backgroundColor: 'rgba(5, 13, 21, 0)',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        },
        expanded: {
            backgroundColor: 'rgba(5, 13, 21)',
            transition: {
                duration: 0.3,
                ease: 'easeInOut'
            }
        }
    }

    const contentVariants = {
        collapsed: {
            opacity: 0,
            height: 0,
            marginTop: 0,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        },
        expanded: {
            opacity: 1,
            height: 'auto',
            marginTop: 8,
            transition: {
                duration: 0.3,
                ease: 'easeInOut',
            },
        }
    }

    const toggleCollapse = () => {
        setIsCollapse((prev) => !prev);
    }

    return (
        <motion.div
            className='mx-auto w-20/22 md:w-3xl lg:w-3xl rounded-2xl text-wrap overflow-hidden select-none collapsable-card-items'
            variants={cardVariants}
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={isCollapse ? 'collapsed' : 'expanded'}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 1,
                    ease: "easeInOut",
                    staggerChildren: 0.2
                }
            }}
            viewport='viewport'
        >
            <div 
                className='m-2 mb-1 p-2 flex flex-row justify-between items-center 
                    hover:cursor-pointer hover:px-3! transition-all duration-200 ease-in-out'
                onClick={toggleCollapse}
            >
                <h5 className='text-wrap mb-0'>{heading}</h5>
                <motion.div 
                    className=''
                    initial={{ rotate: 0 }}
                    animate={isCollapse ? { rotate: 0 } : { rotate: 45 }}
                    transition={{
                        duration: 0.3,
                        ease: 'easeInOut',
                    }}
                >
                    {/* <CollapseIcon width={30} height={30} /> */}
                    <PlusIcon width={24} height={24} />
                </motion.div>
            </div>
            <AnimatePresence initial={false}>
                {!isCollapse && (
                    <motion.div 
                        className='m-2 mt-0 p-1 px-2'
                        key="content"
                        variants={contentVariants}
                        initial="collapsed"
                        animate="expanded"
                        exit="collapsed"
                    >
                        <p>{text}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default CollapsableCard