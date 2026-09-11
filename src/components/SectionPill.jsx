import { motion } from 'framer-motion'

import { sectionpillVariants } from '../utils/Animations'

const SectionPill = ({ sectionTitle }) => {
    return (
        <motion.div
            className='py-1 px-3 m-1 font-medium text-xs text-uppercase h-auto w-auto rounded-full inline-block section-pill'
            variants={sectionpillVariants}
            initial='initial'
            whileInView='whileInView'
            viewport='viewport'
        >
            {sectionTitle}
        </motion.div>
    )
}

export default SectionPill