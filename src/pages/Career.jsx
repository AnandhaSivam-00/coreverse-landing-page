import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

import { headingVariants, paragraphVariants } from '../utils/Animations'
import { UpArrowIcon } from '../assets/Icons/Icons'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import SpotlightContainer from '../components/SpotlightContainer'

const Career = () => {
    const roleList = [
        {
            roleTitle: 'Full Stack Development',
            description: 'Join our full stack team to build end-to-end web applications using modern technologies like React, Node.js, and cloud platforms. Work on both frontend and backend development.',
            link: '?job-role=fullstack-deveploment'
        },
        {
            roleTitle: 'Mobile App Development',
            description: 'Create innovative mobile applications for iOS and Android platforms using React Native, Flutter, or native technologies. Build user-friendly mobile experiences.',
            link: '?job-role=fullstack-deveploment'
        },
        {
            roleTitle: 'IoT and Automations',
            description: 'Design and develop Internet of Things solutions and automation systems. Work with sensors, embedded systems, and cloud integration for smart device connectivity.',
            link: '?job-role=fullstack-deveploment'
        },
        {
            roleTitle: 'Q/A Testing',
            description: 'Ensure software quality through manual and automated testing. Create test cases, identify bugs, and work closely with development teams to deliver reliable products.',
            link: '?job-role=fullstack-deveploment'
        },
        {
            roleTitle: 'Automation Testing',
            description: 'Develop and maintain automated testing frameworks and scripts. Implement continuous integration testing using tools like Selenium, Cypress, and Jest.',
            link: '?job-role=fullstack-deveploment'
        },
    ];

    return (
        <div className='mx-auto flex flex-col gap-x-2 gap-y-5'>
            <section className='gird grid-cols-1 gap-x-1 gap-y-20'>
                <div className='flex flex-col justify-center items-center gap-y-1 mb-10'>
                    <motion.h1
                        className='pb-2'
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Career
                    </motion.h1>
                    <motion.p
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        <p>Join us. You won't regret it.</p>
                    </motion.p>
                </div>
                <SpotlightContainer className='flex flex-row flex-wrap justify-evenly items-center gap-x-5 gap-y-10'>
                    {roleList.map((item) => (
                        <Spotlight3DCardEffect key={item.roleTitle} className='flex flex-col justify-start items-start p-4 max-w-80 overflow-hidden rounded-3xl'>
                            <NavLink to={item.link} className='text-decoration-none'>
                                <div className='w-15 h-15 rounded-full flex justify-center items-center place-self-end hyperlink'>
                                    <UpArrowIcon width='28' height='28' />
                                </div>
                                <h3>{item.roleTitle}</h3>
                                <p>{item.description}</p>
                            </NavLink>
                        </Spotlight3DCardEffect>
                    ))}
                </SpotlightContainer>
            </section>
        </div>
    )
}

export default Career