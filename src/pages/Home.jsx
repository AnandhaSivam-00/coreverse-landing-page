import { motion } from 'framer-motion'

import ClientMarquee from '../components/ClientMarquee'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation'
import SectionPill from '../components/SectionPill'
import CollapsableCard from '../components/CollapsableCard'
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import Sphere3DMain from '../components/3D Spheres/Sphere3DMain'
import EllipseFiveVariant from '../components/3D Spheres/EllipseFiveVariant'
import Sphere3DTwoMainAxis from '../components/3D Spheres/Sphere3DTwoMainAxis'

import {
    ReactIcon,
    FlutterIcon,
    FirebaseIcon,
    NodeJsIcon,
    MongoDBIcon,
    ExpressJsIcon,
    PostgreSQLIcon,
    AntDesignIcon,
    NextJSIcon,
    AWSIcon,
    GoogleCloudIcon,
    StripeIcon,
    GitHubActionIcon,
} from '../assets/Icons/Icons'


import {
    headingVariants,
    paragraphVariants,
} from '../utils/Animations'
import clientReviewData from '../utils/clientReviewData.json'

import '../App.css'

import BannerImage1 from '../assets/662d719974811b48b7fe60c8_img1.png'
import BannerImage2 from '../assets/662d71997728968b7a441ece_img2.png'
import BannerImage3 from '../assets/662d75846e0e4feedf3fb769_img3.png'
import BannerImage4 from '../assets/662d7584977fb64c8704c1f4_img4.png'
import BannerImage5 from '../assets/662d758488062fffaf190cb8_img5.png'
import BannerImage6 from '../assets/662fadf359d329ab7374cfea_banner1.png'
import BannerImage7 from '../assets/662fadf33baedbbd9e018dbc_banner2.png'
import ReviewCards from '../components/ReviewCards'


const Home = () => {
    return (
        <div className='mx-auto flex flex-col gap-y-15 md:gap-y-25 lg:gap-y-25'>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-1 gap-y-30'>
                <div className='m-auto p-auto flex flex-col justify-start items-start gap-y-3 z-50!'>
                    <motion.h1
                        className='pb-2'
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Crafting Digital Realities, Enabling Smart Possibilities
                    </motion.h1>
                    <motion.p
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        At Coreverse Technologies, we are the architects of digital transformation. From web solutions to full-fledged SaaS platforms, our strength lies in simplicity-driven innovation.
                    </motion.p>
                    <PrimaryButtonAnimation
                        linkText='Get Started'
                        link={'/sign-up'}
                        animationStyle={'rounded-full! mouse-exit-origin'}
                    />
                </div>
                <div className='z-1 relative flex justify-center items-center overflow-visible'>
                    <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] md:top-[10em] -right-[10em] perspective-distant bg-blur-block blur-[160px]!'></div>
                    <Sphere3DMain />
                </div>
            </section>
            <section className='grid grid-cols-1 gap-x-1 md:gap-x-3 lg:gap-x-3 mt-70 md:mt-10 lg:mt-5'>
                <div className='flex flex-col justify-center items-center gap-y-5 sm:gap-y-3'>
                    <motion.p
                        className='text-uppercase text-xs font-medium'
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Trusted by Digital Startups, EdTech, Media & Commerce businesses worldwide
                    </motion.p>
                    <ClientMarquee />
                </div>
            </section>
            <section className='grid grid-cols-1 gap-x-5 gap-y-10'>
                <div className='flex flex-col justify-center items-center gap-y-2 max-w-xl mx-auto text-center text-wrap'>
                    <SectionPill sectionTitle={'Services'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        What We Do - Our Core Services
                    </motion.h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-5'>
                    {/* Spotlight cards are come here */}
                    <SpotlightContainer>
                        <Spotlight3DCardEffect className='p-0 rounded-xl fl</Spotlight3DCardEffect>ex flex-col justify-between items-start gap-y-1'>
                            <img src={BannerImage1} alt='banner-1' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto' />
                            <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                                <h4 className='max-w-50'>Custom Website Development</h4>
                                <p className='max-w-90'>Beautiful, responsive, and high-performing websites crafted with precision. Whether you're a startup or enterprise, we build experiences that connect brands with users.</p>
                            </div>
                        </Spotlight3DCardEffect>
                    </SpotlightContainer>
                    <SpotlightContainer>
                        <Spotlight3DCardEffect className='p-0 rounded-xl flex flex-col justify-between items-start gap-y-1'>
                            <div className='flex flex-col justify-start items-start gap-y-2 px-4 pt-4 pb-0'>
                                <h4 className='max-w-50'>Web Application Engineering</h4>
                                <p className='max-w-90 mb-0'>Scalable, secure, and intelligent web applications that handle business logic, data, and dynamic user interaction with elegance.</p>
                            </div>
                            <img src={BannerImage2} alt='banner-2' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto' />
                        </Spotlight3DCardEffect>
                    </SpotlightContainer>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-x-5 gap-y-5'>
                    <SpotlightContainer>
                        <Spotlight3DCardEffect className='h-100 p-0 rounded-xl flex flex-col justify-between items-start gap-y-1'>
                            <img src={BannerImage3} alt='banner-3' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto' />
                            <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                                <h4 className='max-w-50'>Mobile App Development</h4>
                                <p className='max-w-90'>Smart, seamless mobile apps that work across iOS and Android, built with modern frameworks and a mobile-first mindset.</p>
                            </div>
                        </Spotlight3DCardEffect>
                    </SpotlightContainer>
                    <SpotlightContainer>
                        <Spotlight3DCardEffect className='p-0 h-100 rounded-xl flex flex-col justify-between items-start gap-y-1'>
                            <div className='flex flex-col justify-start items-start gap-y-2 px-4 pt-4 pb-0'>
                                <h4 className='max-w-50'>SaaS Product Development</h4>
                                <p className='max-w-90 mb-0'>Turn your idea into a product. We design, develop, and deploy robust Software-as-a-Service platforms for modern businesses.</p>
                            </div>
                            <img src={BannerImage4} alt='banner-4' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto' />
                        </Spotlight3DCardEffect>
                    </SpotlightContainer>
                    <SpotlightContainer>
                        <Spotlight3DCardEffect className='p-0 h-100 rounded-xl flex flex-col justify-between items-start gap-y-1'>
                            <img src={BannerImage5} alt='banner-5' loading='lazy' className='w-1/2 md:w-full lg:w-full mx-auto' />
                            <div className='flex flex-col justify-start items-start gap-y-2 px-4 pb-2'>
                                <h4 className='max-w-50'>UI/UX Strategy & Design</h4>
                                <p className='max-w-90'>We don't just design interfaces; we design interactions. Our UX team ensures every touchpoint is intuitive and engaging.</p>
                            </div>
                        </Spotlight3DCardEffect>
                    </SpotlightContainer>
                </div>
            </section>
            <section className='relative grid grid-cols-1 gap-x-1 gap-y-10 md:gap-x-20 lg:gap-x-20'>
                <div className='flex flex-col justify-start items-start gap-y-5 z-1'>
                    <motion.h2
                        className='max-w-2xl'
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Precision. Purpose. Performance.
                    </motion.h2>
                    <motion.h3
                        className='opacity-50 max-w-5xl'
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        We believe every digital product must be rooted in purpose and executed with technical clarity.
                        From the first wireframe to the final deployment, every step is about delivering functional elegance.
                    </motion.h3>
                    <PrimaryButtonAnimation
                        linkText='Learn More'
                        link={'/about-us'}
                        animationStyle={'rounded-full! mouse-exit-origin'}
                    />
                </div>
                <div className='absolute z-0 w-[50em] h-[24em] -bottom-[4em] -left-[15em] -rotate-20 prespective-[1000px] bg-blur-block'></div>
            </section>
            <section
                className='grid grid-cols-2 grid-flow-row md:grid-cols-4 lg:grid-cols-4 gap-x-5 gap-y-10
        *:flex *:flex-col *:justify-center *:items-center'
            >
                <div className='col-span-2 md:col-span-4 lg:col-span-4 gap-y-2 max-w-xl mx-auto text-center text-wrap'>
                    <SectionPill sectionTitle={'Tech Stacks'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Our Development Stack & Practices
                    </motion.h2>
                </div>
                {[
                    {
                        icon: <ReactIcon width={45} height={45} />,
                        text: 'React'
                    },
                    {
                        icon: <NextJSIcon width={45} height={45} />,
                        text: 'NextJS'
                    },
                    {
                        icon: <FlutterIcon width={45} height={45} />,
                        text: 'Flutter'
                    },
                    {
                        icon: <FirebaseIcon width={45} height={45} />,
                        text: 'Firebase'
                    },
                    {
                        icon: <NodeJsIcon width={45} height={45} />,
                        text: 'Node js'
                    },
                    {
                        icon: <ExpressJsIcon width={45} height={45} />,
                        text: 'Express js'
                    },
                    {
                        icon: <MongoDBIcon width={45} height={45} />,
                        text: 'Mongo DB'
                    },
                    {
                        icon: <PostgreSQLIcon width={45} height={45} />,
                        text: 'Postgre SQL'
                    },
                    {
                        icon: <AWSIcon width={45} height={45} />,
                        text: 'AWS'
                    },
                    {
                        icon: <GoogleCloudIcon width={45} height={45} />,
                        text: 'Google Cloud'
                    },
                    {
                        icon: <StripeIcon width={45} height={45} />,
                        text: 'Stripe Integration'
                    },
                    {
                        icon: <GitHubActionIcon width={45} height={45} />,
                        text: 'GitHub Actions'
                    },
                ].map((item, idx) => (
                    <motion.div
                        key={item.text}
                        className='m-auto p-auto flex flex-col items-center'
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.15 }}
                        viewport='viewport'
                    >
                        <Spotlight3DCardEffect className='p-3 rounded-3xl'>
                            {item.icon}
                        </Spotlight3DCardEffect>
                        <motion.h5
                            className='mt-2'
                            variants={headingVariants}
                            initial='initial'
                            whileInView='whileInView'
                            viewport='viewport'
                        >
                            {item.text}
                        </motion.h5>
                    </motion.div>
                ))}
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-20'>
                <div className='flex flex-col justify-start items-start gap-y-2 text-wrap order-last md:order-first! lg:order-first! z-50!'>
                    <SectionPill sectionTitle={'Interoperability'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Flexible Collaboration Models
                    </motion.h2>
                    <motion.p
                        className='max-w-140'
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Whether you need a one-time project or a long-term tech partner, we offer flexible collaboration models:
                        Fixed-Cost Projects, Dedicated Developer Teams, Agile Sprint-Based Delivery, and Product-as-a-Service (PaaS) Partnerships.
                    </motion.p>
                    <PrimaryButtonAnimation
                        linkText='Learn More'
                        link={'/services'}
                        animationStyle={'rounded-full! mouse-exit-origin'}
                    />
                </div>
                <div className='relative flex justify-center items-center z-1 order-first md:order-last! lg:order-last! min-h-[26em]'>
                    <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] -right-[10em] perspective-distant bg-blur-block blur-[160px]!'></div>
                    <EllipseFiveVariant />
                </div>
            </section>
            <section className='grid grid-cols-1 auto-rows-auto gap-y-10'>
                <div className='flex flex-col justify-center items-center gap-y-2 max-w-2xl mx-auto text-center text-wrap'>
                    <SectionPill sectionTitle={'Testimonials'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Read real reviews from our satisfied customers
                    </motion.h2>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-3 md:gap-x-5 lg:gap-x-5 gap-y-10'>
                    <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
                        {clientReviewData.slice(0, 2).map((review) => (
                            <ReviewCards
                                id={review.id}
                                reviewer={review.client_name}
                                position={review.position}
                                comment={review.comment}
                            />
                        ))}
                    </SpotlightContainer>
                    <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
                        {clientReviewData.slice(2, 4).map((review) => (
                            <ReviewCards
                                id={review.id}
                                reviewer={review.client_name}
                                position={review.position}
                                comment={review.comment}
                            />
                        ))}
                    </SpotlightContainer>
                    <SpotlightContainer className='flex flex-col justify-start items-start gap-y-5'>
                        {clientReviewData.slice(4, 6).map((review) => (
                            <ReviewCards
                                id={review.id}
                                reviewer={review.client_name}
                                position={review.position}
                                comment={review.comment}
                            />
                        ))}
                    </SpotlightContainer>
                </div>
            </section>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-5 gap-y-10 md:gap-y-20 lg:gap-y-20'>
                <div className='relative flex justify-center items-center z-1 min-h-[25em]'>
                    <Sphere3DTwoMainAxis />
                    <div className='absolute z-0 w-[50em] h-[15em] md:h-[20em] top-[1em] -right-[10em] perspective-distant bg-blur-block blur-[200px]!'></div>
                </div>
                <div className='m-auto p-auto flex flex-col justify-start items-start gap-y-5'>
                    <SectionPill sectionTitle={'Revolutionary'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Your Technology Partner
                    </motion.h2>
                    <motion.p
                        variants={paragraphVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        We treat every project as a strategic partnership — not a one-off contract. Our transparent communication, frequent demos, and collaborative process ensure you're always in control of the outcome.
                    </motion.p>
                </div>
            </section>
            <section className='m-auto p-auto flex flex-col justify-center items-center gap-y-5'>
                <div className='max-w-2xl text-center mb-3'>
                    <SectionPill sectionTitle={'Faq'} />
                    <motion.h2
                        variants={headingVariants}
                        initial='initial'
                        whileInView='whileInView'
                        viewport='viewport'
                    >
                        Frequently Asked Questions
                    </motion.h2>
                </div>
                <CollapsableCard
                    heading={'What services does Coreverse Technologies offer?'}
                    text={'We offer Custom Website Development, Web Application Engineering, Mobile App Development, SaaS Product Development, and UI/UX Strategy & Design. Our comprehensive services cover everything from business websites to full-scale SaaS platforms.'}
                />
                <CollapsableCard
                    heading={'What technologies do you work with?'}
                    text={'Our tech stack includes React, Vue, Node.js, Django, Flask, Firebase, PostgreSQL, MongoDB, Docker, and cloud platforms like AWS and Google Cloud. We always use the latest technologies for flexibility, speed, and long-term maintainability.'}
                />
                <CollapsableCard
                    heading={'What engagement models do you offer?'}
                    text={'We offer flexible collaboration models including Fixed-Cost Projects, Dedicated Developer Teams, Agile Sprint-Based Delivery, and Product-as-a-Service (PaaS) Partnerships to suit different project needs and budgets.'}
                />
                <CollapsableCard
                    heading={'What industries do you work with?'}
                    text={'We work with Digital Startups, Education & EdTech, Media & Content Platforms, Retail & D2C Commerce, Service-based Enterprises, and Communities & Non-Profits across various sectors.'}
                />
                <CollapsableCard
                    heading={'How do you ensure project success?'}
                    text={'We follow a client-centric approach with transparent communication, frequent demos, requirement workshops, weekly progress reviews, and collaborative processes to ensure you\'re always in control of the outcome.'}
                />
                <CollapsableCard
                    heading={'Do you provide post-launch support?'}
                    text={'Yes, we provide proactive support & optimization, post-launch training, and comprehensive documentation to ensure your digital solution continues to perform optimally after deployment.'}
                />
            </section>
            <section className='w-full h-full'>
                <SpotlightContainer>
                    <Spotlight3DCardEffect className='p-5 rounded-xl'>
                        <div className='flex flex-col justify-center items-center gap-y-3 max-w-2xl mx-auto text-center text-wrap'>
                            <SectionPill sectionTitle={'Get Started'} />
                            <h2>Let's Build the Future, Together</h2>
                            <p>We're not just a service provider. We're your technology ally — committed to making your ideas real, scalable, and ready for the world.</p>
                            <PrimaryButtonAnimation
                                linkText='Contact Us'
                                link={'/sign-up'}
                                animationStyle={'rounded-full! mouse-exit-origin'}
                            />
                        </div>
                        <img src={BannerImage6} alt='banner-6' loading='lazy' className='absolute top-0 left-0 right-auto bottom-auto max-w-50 md:max-w-70 lg:max-w-90 -z-1' />
                        <img src={BannerImage7} alt='banner-7' loading='lazy' className='absolute top-auto left-auto right-0 bottom-0 max-w-50 md:max-w-70 lg:max-w-90 -z-1' />
                    </Spotlight3DCardEffect>
                </SpotlightContainer>
            </section>
        </div>
    )
}

export default Home