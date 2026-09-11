import { motion } from 'framer-motion'

import { buttonVariants } from '../utils/Animations'

const PrimaryButtonAnimation = ({ linkText, link, animationStyle }) => {
    return (
        <motion.a
            variants={buttonVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
            className={`h-auto m-0 px-4 py-[0.8rem] inline-block bg-gray-500 text-white text-center font-medium text-decoration-none transform-3d hover:cursor-pointer ${animationStyle}`}
            href={link}
            target='_blank'
        >
            {linkText}
        </motion.a>
    )
}

export default PrimaryButtonAnimation