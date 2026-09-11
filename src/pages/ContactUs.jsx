import { motion } from 'framer-motion';

import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect';
import SpotlightContainer from '../components/SpotlightContainer';
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation';
import SectionPill from '../components/SectionPill';

import '../App.css';
import { headingVariants, paragraphVariants } from '../utils/Animations';

const ContactUs = () => {
    return (
        <div className='mx-auto w-full px-4 flex flex-col justify-center items-center gap-y-4 md:gap-y-10 lg:gap-y-15'>
            <div className='max-w-4xl text-center text-wrap px-4'>
                <SectionPill sectionTitle={'Contact'} />
                <motion.h1
                    variants={headingVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                    className='text-2xl md:text-3xl lg:text-4xl'
                >
                    Let's Build the Future, Together
                </motion.h1>
                <motion.p
                    className='max-w-xl mx-auto text-sm md:text-base mt-3'
                    variants={paragraphVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                >
                    We're not just a service provider. We're your technology ally - committed to making your ideas real, scalable, and ready for the world. Reach out to us.
                </motion.p>
            </div>
            <SpotlightContainer className='w-full max-w-3xl mx-auto px-1 md:px-3 lg:px-4'>
                <Spotlight3DCardEffect className='p-10 md:p-13 lg:p-15 rounded-2xl w-full'>
                    <form className="space-y-4 md:space-y-6 w-full">
                        {/* Name Fields */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                            <div>
                                <label className="block text-[0.65em] font-semibold mb-1 text-uppercase">
                                    First Name <span className='text-uppercase'>(Required)</span>
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="First Name"
                                    className="mt-1 w-full h-10 md:h-15 rounded-lg placeholder:text-opacity-25 px-3 text-sm"
                                />
                            </div>
                            <div>
                                <label className="block text-[0.65em] font-semibold mb-1 text-uppercase">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="mt-1 w-full h-10 md:h-15 rounded-lg placeholder:text-opacity-25 px-3 text-sm"
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-[0.65em] font-semibold mb-1 text-uppercase">
                                Email <span className='text-uppercase'>(Required)</span>
                            </label>
                            <input
                                type="email"
                                required
                                placeholder="Your Email"
                                className="mt-1 w-full h-10 md:h-15 rounded-lg px-3 text-sm md:text-base"
                            />
                        </div>

                        <div>
                            <label className="block text-[0.65em] font-semibold mb-1 text-uppercase">
                                Message
                            </label>
                            <textarea
                                rows="4"
                                placeholder="Tell us how we can help"
                                className="mt-1 w-full resize-none rounded-lg placeholder:text-opacity-25 px-3 py-2 text-sm"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className='px-2 py-1 mx-auto mt-4 flex justify-center'>
                            <PrimaryButtonAnimation
                                linkText='Submit'
                                link={'/sign-up'}
                                animationStyle={'rounded-xl mouse-exit-origin w-full'}
                            />
                        </div>
                    </form>
                </Spotlight3DCardEffect>
            </SpotlightContainer>
        </div>
    );
};

export default ContactUs;