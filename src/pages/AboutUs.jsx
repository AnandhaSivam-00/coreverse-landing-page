import SectionPill from '../components/SectionPill';
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation';

import '../App.css'
import {
    LeaderboardStarIcon,
    OptimizationIcon,
    LightBulbIcon,
    AcadamicCapIcon,
    VerticalAdjustIcon,
    CheckShieldIcon,
} from '../assets/Icons/Icons';

import { motion } from 'framer-motion';
import {
    headingVariants,
    paragraphVariants,
} from '../utils/Animations';

const AboutUs = () => {
    return (
        <div className='mx-auto flex flex-col gap-y-25'>
            <section className='grid grid-cols-1 gap-x-5 gap-y-10'>
                <div className='flex flex-col justify-center items-center gap-y-5 sm: gap-y-3 mx-auto text-center text-wrap'>
                    <SectionPill sectionTitle={'About Us'} />
                    <motion.h1
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Welcome to Coreverse Technologies, we are the architects of digital transformation.
                    </motion.h1>
                </div>
                <SpotlightContainer
                    className='mx-auto w-20/22 md:w-3xl lg:w-3xl flex flex-col justify-center items-center gap-y-5 text-wrap'
                >
                    <Spotlight3DCardEffect>
                        <p>
                            With a deep-rooted passion for technology and a sharp eye for design, we offer tailor-made IT services that empower
                            businesses to scale, adapt, and thrive in the modern digital landscape.
                        </p>
                    </Spotlight3DCardEffect>
                    <Spotlight3DCardEffect>
                        <p>
                            From web solutions to full-fledged SaaS platforms, our strength lies in simplicity-driven
                            innovation building systems that are intuitive, agile, and built to perform.
                        </p>
                    </Spotlight3DCardEffect>
                    <Spotlight3DCardEffect>
                        <p>
                            Let's embark on this journey of creativity, collaboration, and innovation with Coreverse Technologies.
                        </p>
                    </Spotlight3DCardEffect>
                </SpotlightContainer>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-10 gap-y-8'>
                <div className='flex flex-col justify-start items-start gap-y-5 text-wrap'>
                    <SectionPill sectionTitle={'Our Philosophy'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Guided by "Precision. Purpose. Performance."
                    </motion.h2>
                    <motion.p
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        We believe every digital product must be rooted in purpose and executed with technical clarity.
                        From the first wireframe to the final deployment, every step is about delivering functional elegance.
                    </motion.p>
                    <PrimaryButtonAnimation
                        linkText='Join us now'
                        link={'/contact'}
                        animationStyle={'mouse-exit-origin rounded-full'}
                    />
                </div>
                <div className='relative grid grid-cols-2 gap-x-5 md:gap-x-10 lg:gap-x-10 gap-y-10 mt-5'>
                    {[
                        {
                            icon: <VerticalAdjustIcon width={44} height={44} />,
                            text: 'We Probe Workspaces'
                        },
                        {
                            icon: <LeaderboardStarIcon width={50} height={50} />,
                            text: 'We Lead Technologically'
                        },
                        {
                            icon: <OptimizationIcon width={45} height={45} />,
                            text: 'We Optimize Resources'
                        },
                        {
                            icon: <LightBulbIcon width={44} height={44} />,
                            text: 'We Lead With Innovation'
                        },
                        {
                            icon: <AcadamicCapIcon width={44} height={44} />,
                            text: 'We Offer Tech Diversity'
                        }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            className='flex flex-row justify-start items-center gap-x-5'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: idx * 0.75 }}
                            viewport='viewport'
                        >
                            {item.icon}
                            <h6 className='mb-0!'>{item.text}</h6>
                        </motion.div>
                    ))}
                    <div className='absolute z-0 bg-blur-block opacity-50'></div>
                </div>
            </section>
            <section className='grid grid-cols-1 gap-x-5 gap-y-15'>
                <div className='flex flex-col justify-center items-center gap-y-5 sm:gap-y-3 mx-auto text-center text-wrap'>
                    <SectionPill sectionTitle={'Client-Centric Approach'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        With Coreverse you are always in control
                    </motion.h2>
                </div>
                <div className='flex flex-row justify-center items-center flex-wrap gap-x-5 gap-y-10'>
                    {[
                        'Focus critical developer resources on your core business',
                        'Launch new products faster with less payments code',
                        'Improve conversion from international customers'
                    ].map((text, idx) => (
                        <motion.div
                            key={idx}
                            className='max-w-80 flex flex-col justify-center items-center gap-y-1 text-center text-wrap p-4 rounded-xl collapsable-card-items'
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.15 }}
                            viewport='viewport'
                        >
                            <CheckShieldIcon width={35} height={35} />
                            <p className='opacity-75'>{text}</p>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AboutUs;