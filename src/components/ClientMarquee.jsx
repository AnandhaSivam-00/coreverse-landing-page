import { motion } from 'framer-motion'

import LebyyLogo from '../assets/3.png';
import SmassAgroProducts from '../assets/5.png';
import KingGoliSoda from '../assets/6.png';

import {
    TechNukeSVGLogo,
    TuneUpSVGLogo,
    VirtuosparkSVGLogo
} from '../assets/ClientLogos/ClientLogoSVGs'

const ClientMarquee = () => {
    // const clientLogos = [
    //     { src: TechNukeLogo, alt: 'tech-nuke-logo' },
    //     { src: TuneUpLogo, alt: 'tune-up-logo' },
    //     { src: LebyyLogo, alt: 'lebyy-logo' },
    //     { src: VirtuosparkLogo, alt: 'virtuospark-logo' },
    //     { src: SmassAgroProducts, alt: 'smass-agro-products-logo' },
    //     { src: KingGoliSoda, alt: 'king-goli-soda-logo' },
    // ];

    const clientLogos = [
        { 
            src: <TechNukeSVGLogo width={110} height={110} />,
            type: 'svg',
            alt: 'tech-nuke-logo'
        },
        { 
            src: <TuneUpSVGLogo width={130} height={130} />,
            type: 'svg',
            alt: 'tune-up-logo'
        },
        { 
            src: LebyyLogo, 
            type: 'img',
            alt: 'lebyy-logo' 
        },
        {
            src: <VirtuosparkSVGLogo width={130} height={130} />,
            type: 'svg',
            alt: 'virtuospark-logo'
        },
        { 
            src: SmassAgroProducts, 
            type: 'img',
            alt: 'smass-agro-products-logo' 
        },
        { 
            src: KingGoliSoda, 
            type: 'img',
            alt: 'king-goli-soda-logo' 
        },
    ]

    return (
        <div
            className='relative w-full h-20 overflow-hidden flex flex-row justify-start items-center gap-x-10 md:gap-x-20'
        >
            <div className='absolute inset-0 z-50 marquee-gradient'></div>
            <motion.div
                className='flex flex-row flex-shrink-0 justify-start items-center gap-x-10 md:gap-x-20'
                initial={{ x: 0 }}
                animate={{ x: '-106%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {clientLogos.map((logo, index) => (
                    // <img
                    //     key={index}
                    //     src={logo.src}
                    //     alt={logo.alt}
                    //     loading='eager'
                    //     className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                    // />
                    logo.type === 'svg' ? logo.src : (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                loading='eager'
                                className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                            />
                        )
                    )
                )}
            </motion.div>
            <motion.div
                className='flex flex-row flex-shrink-0 justify-start items-center gap-x-10 md:gap-x-20'
                initial={{ x: 0 }}
                animate={{ x: '-106%' }}
                transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: 'linear',
                }}
            >
                {clientLogos.map((logo, index) => (
                    // <img
                    //     key={index}
                    //     src={logo.src}
                    //     alt={logo.alt}
                    //     loading='eager'
                    //     className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                    // />
                        logo.type === 'svg' ? logo.src : (
                            <img
                                key={index}
                                src={logo.src}
                                alt={logo.alt}
                                loading='eager'
                                className='w-20 md:w-35 h-auto mx-2 my-1 grayscale'
                            />
                        )
                    )
                )}
            </motion.div>
        </div>
    )
}

export default ClientMarquee