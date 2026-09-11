import { motion } from 'framer-motion';
import Spotlight3DCardEffect from './Spotlight3DCardEffect';

import { TestimonialUserIcon, QuoteIcon } from '../assets/Icons/Icons';
import { testimonialCardVariants } from '../utils/Animations';

import '../App.css';


const ReviewCards = ({ id, reviewer, position, comment, className='' }) => {
    return (
        <motion.div
            variants={testimonialCardVariants}
            initial='initial'
            whileHover='whileHover'
            key={id}
            className='h-full'
        >
            <Spotlight3DCardEffect className={`p-[2rem] rounded-2xl ${className}`}>
                <div>
                    <div className='mb-4'>
                        <QuoteIcon width={45} height={45} />
                    </div>
                    <p className='leading-relaxed mb-6'>{comment}</p>
                </div>
                <div className='flex flex-row justify-start items-center gap-x-3 gap-y-1'>
                    <div className='rounded-full p-2 bg-slate-800'>
                        <TestimonialUserIcon width={30} height={30} />
                    </div>
                    <div className='flex flex-col justify-start items-start'>
                        <h6>{reviewer}</h6>
                        <p className='opacity-75 text-xs mb-0!'>{position}</p>
                    </div>
                </div>
            </Spotlight3DCardEffect>
        </motion.div>
    )
}

export default ReviewCards