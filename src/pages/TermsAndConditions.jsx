import { motion } from 'framer-motion'
import SectionPill from '../components/SectionPill'
import { headingVariants, paragraphVariants } from '../utils/Animations'

const TermsAndConditions = () => {
    return (
        <div className='mx-auto flex flex-col gap-y-10 py-10 px-5 md:px-20'>
            <div className='flex flex-col justify-center items-center gap-y-5 mx-auto text-center text-wrap'>
                <SectionPill sectionTitle={'Legal'} />
                <motion.h1
                    variants={headingVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                >
                    Terms and Conditions
                </motion.h1>
            </div>

            <motion.div
                variants={paragraphVariants}
                initial='initial'
                whileInView='whileInView'
                viewport='viewport'
                className='flex flex-col gap-y-6 max-w-4xl mx-auto'
            >
                <p>Welcome to Coreverse Technologies. These Terms and Conditions govern your use of our website and services. By accessing or using our services, you agree to be bound by these terms.</p>

                <h4>1. Services Provided</h4>
                <p>Coreverse Technologies is a software development firm providing custom software engineering, IT consulting, web and mobile application development, and SaaS solutions. The specific scope of services for any given project will be detailed in a separate Statement of Work (SOW) or service agreement.</p>

                <h4>2. Intellectual Property</h4>
                <p>Unless otherwise explicitly stated in a specific agreement, all code, designs, and architectures developed by Coreverse Technologies remain our intellectual property until full payment is received. Upon complete payment, the intellectual property rights to the final deliverables are transferred to the client, as outlined in the respective contract. We retain the right to reuse underlying tools, libraries, and foundational code that are not proprietary to the client's business logic.</p>

                <h4>3. Client Responsibilities</h4>
                <p>To ensure timely and successful project delivery, clients are expected to provide necessary resources, feedback, and approvals in a timely manner. Delays on the client's end may result in adjustments to project timelines and potential additional costs.</p>

                <h4>4. Payment Terms</h4>
                <p>Payment schedules and amounts will be specified in the individual project agreements. Invoices are generally due within 30 days of receipt unless otherwise agreed. We reserve the right to suspend services or withhold deliverables for accounts with overdue payments.</p>

                <h4>5. Warranties and Liability</h4>
                <p>We strive to deliver high-quality, bug-free software. Our deliverables come with a standard warranty period (typically 30-90 days, depending on the contract) during which we will fix any critical defects at no additional cost. Beyond this period, ongoing maintenance and support can be arranged via a separate agreement. Coreverse Technologies shall not be held liable for any indirect, incidental, or consequential damages arising from the use of our software or services.</p>

                <h4>6. Confidentiality</h4>
                <p>We respect your proprietary information. Both parties agree to maintain the confidentiality of any non-public information shared during the course of our engagement. Non-Disclosure Agreements (NDAs) can be executed upon request prior to project initiation.</p>

                <h4>7. Termination</h4>
                <p>Either party may terminate an agreement with written notice if the other party breaches any material term and fails to cure such breach within an agreed-upon timeframe. Upon termination, the client shall pay for all services rendered and expenses incurred up to the date of termination.</p>

                <h4>8. Amendments</h4>
                <p>We may update these Terms and Conditions from time to time. Any changes will be posted on this page. Your continued use of our services after any changes constitutes acceptance of the new terms.</p>

                <p>If you have any questions regarding these Terms and Conditions, please contact us at legal@coreverse.com.</p>
            </motion.div>
        </div>
    )
}

export default TermsAndConditions