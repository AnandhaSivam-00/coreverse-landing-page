import { motion } from 'framer-motion'
import SectionPill from '../components/SectionPill'
import { headingVariants, paragraphVariants } from '../utils/Animations'

const PrivacyPolicy = () => {
    return (
        <div className='mx-auto flex flex-col gap-y-10 py-10 px-5 md:px-20'>
            <div className='flex flex-col justify-center items-center gap-y-5 mx-auto text-center text-wrap'>
                <SectionPill sectionTitle={'Privacy'} />
                <motion.h1
                    variants={headingVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                >
                    Privacy Policy
                </motion.h1>
            </div>

            <motion.div
                variants={paragraphVariants}
                initial='initial'
                whileInView='whileInView'
                viewport='viewport'
                className='flex flex-col gap-y-6 max-w-4xl mx-auto'
            >
                <p>At Coreverse Technologies, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you interact with our website and software development services.</p>

                <h4>1. Information We Collect</h4>
                <p>We may collect personal information that you provide to us directly, such as when you request a quote, subscribe to our newsletter, or contact our support team. This may include:</p>
                <ul className='list-styles'>
                    <li>Contact Information: Name, email address, phone number, and company name.</li>
                    <li>Project Details: Requirements, specifications, and business context relevant to the services we provide.</li>
                    <li>Technical Data: IP addresses, browser types, and usage data collected automatically through cookies when you visit our website.</li>
                </ul>

                <h4>2. How We Use Your Information</h4>
                <p>The information we collect is used to:</p>
                <ul className='list-styles'>
                    <li>Deliver and manage our software development and consulting services.</li>
                    <li>Communicate with you regarding project updates, invoices, and support requests.</li>
                    <li>Improve our website functionality and user experience.</li>
                    <li>Send promotional materials and industry insights, provided you have opted in to receive them.</li>
                </ul>

                <h4>3. Data Sharing and Disclosure</h4>
                <p>Coreverse Technologies does not sell or rent your personal information to third parties. We may share your data with trusted third-party service providers who assist us in operating our business (e.g., cloud hosting providers, payment processors) under strict confidentiality agreements. We may also disclose information if required by law or to protect our legal rights.</p>

                <h4>4. Data Security</h4>
                <p>We implement industry-standard security measures, including encryption and secure server hosting, to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, please note that no method of transmission over the internet or electronic storage is 100% secure.</p>

                <h4>5. Your Rights</h4>
                <p>Depending on your location, you may have the right to access, correct, or delete your personal data held by us. You can also opt out of marketing communications at any time by following the unsubscribe link in our emails or contacting us directly.</p>

                <h4>6. Third-Party Links</h4>
                <p>Our website may contain links to external sites that are not operated by us. We are not responsible for the privacy practices or the content of these third-party websites. We encourage you to review their privacy policies before providing any personal information.</p>

                <h4>7. Changes to This Privacy Policy</h4>
                <p>We may update our Privacy Policy periodically to reflect changes in our practices or regulatory requirements. We will notify you of any significant changes by posting the updated policy on this page with a revised "Last Updated" date.</p>

                <p>If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at privacy@coreverse.com.</p>
            </motion.div>
        </div>
    )
}

export default PrivacyPolicy