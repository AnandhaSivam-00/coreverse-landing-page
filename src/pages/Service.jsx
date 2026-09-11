import React from 'react'
import { motion } from 'framer-motion'
import { SwiperSlide } from 'swiper/react'

import SectionPill from '../components/SectionPill'
import PrimaryButtonAnimation from '../components/PrimaryButtonAnimation'
import SpotlightContainer from '../components/SpotlightContainer'
import Spotlight3DCardEffect from '../components/Spotlight3DCardEffect'
import ReviewCards from '../components/ReviewCards'
import CardSlider from '../components/CardSlider'

import { serviceCardVariants } from '../utils/Animations'
import { CheckVariantIcon } from '../assets/Icons/Icons'
import { MonitorSmartphone, LayoutTemplate, Globe, Package, DraftingCompass } from 'lucide-react'

import clientReviewData from '../utils/clientReviewData.json'


const services = [
  {
    icon: <Globe className="text-blue-700 w-6 h-6" />,
    title: 'Custom Website Development',
    description:
      'Beautiful, responsive, and high-performing websites crafted with precision. We build experiences that connect brands with users.',
    list: ["Business Websites", "Portfolio Sites", "Landing Pages & Campaign Microsites", "E-commerce Frontends" ]
  },
  {
    icon: <LayoutTemplate className="text-blue-700 w-6 h-6" />,
    title: 'Web Application Engineering',
    description:
      'Scalable, secure, and intelligent web applications that handle business logic, data, and dynamic user interaction with elegance.',
    list: ["Business Dashboards", "Internal Portals", "Customer Interfaces", "Content & Workflow Management Systems"]
  },
  {
    icon: <MonitorSmartphone className="text-blue-700 w-6 h-6" />,
    title: 'Mobile App Development',
    description:
      'Smart, seamless mobile apps that work across iOS and Android, built with modern frameworks and a mobile-first mindset.',
    list: ["Cross-platform & Native Apps", "User-centric Mobile Experiences", "App Store Optimization & Deployment", "Backend Integration & API Support"]
  },
  {
    icon: <Package className="text-blue-700 w-6 h-6" />,
    title: 'SaaS Product Development',
    description:
      'Turn your idea into a product. We design, develop, and deploy robust Software-as-a-Service platforms for modern businesses.',
    list: ["End-to-End Product Engineering", "Subscription Models", "Role-Based Access & Admin Panels", "Analytics, Automation & Integrations"]
  },
  {
    icon: <DraftingCompass className="text-blue-700 w-6 h-6" />,
    title: 'UI/UX Strategy & Design',
    description:
      "We don't just design interfaces; we design interactions. Our user experience team ensures every touchpoint is intuitive and engaging.",
    list: ["UI Wireframing & Prototyping", "Design Systems & Component Libraries"," Human-Centered Design Principles", "Mobile, Web, and SaaS Focused"]
  },
]
const highlights = [
  'Requirement Workshops',
  'Weekly Progress Reviews',
  'Proactive Support & Optimization',
  'Post-Launch Training and Documentation',
]


const Service = () => {
  return (
    <div className="text-white px-4 md:px-6">
      <div className="text-center pb-20">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">What We Do</h1>
        <p className="text-lg text-gray-300">
          Crafting Digital Realities, Enabling Smart Possibilities. We are your technology ally, committed to making your ideas real, scalable, and ready for the world.
        </p>
      </div>

      <div className="mt-20">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          We Provide The Best Services to Empower Your Business.
        </h2>

        <div className="max-w-6xl mx-auto space-y-6 mt-10 ">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4 hover:scale-[1.01] transition"
              variants={serviceCardVariants}
              initial='initial'
              whileInView='whileInView'
              viewport='viewport'
            >
              <div className="flex items-center content-center space-x-4 h-15">
                <div className="w-10 h-12 p-2 rounded-full border border-white/10 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl mb-0 font-semibold w-full md:w-50 lg:w-50">{service.title}</h3>
              </div>
              <div className='flex flex-col justify-center content-center space-x-4'>
                <p className="text-gray-300 text-base md:text-lg md:max-w-3xl leading-relaxed md:text-left">
                  {service.description}
                </p>
                <ul className='text-gray-300 text-sm md:max-w-3xl leading-relaxed list-styles'>
                  {service.list.map((item, index) => (
                    <li key={index} className='text-gray-300'>{item}</li>
                  ))}
                </ul>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
      <div className='pt-20'>
        {/* Blurred Background Image */}

        <SpotlightContainer>
          <Spotlight3DCardEffect>
            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
              {/* Left Side */}
              <div className="max-w-xl text-center md:text-left -mt-2">
                <SectionPill sectionTitle={'Our Approach'} />
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight pt-3">
                  A Client-Centric {' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-900">
                    Partnership.
                  </span>
                </h2>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  We treat every project as a strategic partnership. Our transparent communication, frequent demos, and collaborative process ensure you're always in control of the outcome.
                </p>
                <PrimaryButtonAnimation
                  linkText='Get Started'
                  link={'/contact'}
                  animationStyle={'rounded-full! mouse-exit-origin'}
                />
              </div>

              {/* Right Side */}
              <div className="w-full md:w-[45%] space-y-6">
                {highlights.map((point, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-row justify-start items-center bg-white/5 p-4 rounded-xl backdrop-blur-md"
                    variants={serviceCardVariants}
                    initial='initial'
                    whileInView='whileInView'
                    viewport='viewport'
                  >
                    <CheckVariantIcon width={30} height={30} />
                    <p className="text-white font-medium text-lg ps-4 mb-0">{point}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </Spotlight3DCardEffect>
        </SpotlightContainer>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-y-16 gap-x-10 md:gap-x-5">
        {/* Left Side */}
        <div className="max-w-xl text-center md:text-left mt-10">
          <SectionPill sectionTitle={'Happy Customers'} />
          <h2>Experience</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, incidunt.</p>
          <h4 className='text-8xl! font-medium'>25+</h4>
        </div>
        <div className="w-full md:w-[65%] space-y-6">
          <div className='pt-5'>
            <SpotlightContainer className='flex flex-col md:flex-row md:flex-wrap gap-6'>
              <CardSlider>
                {clientReviewData.slice(0, 5).map((review) => (
                  <SwiperSlide
                    key={review.id}
                    className='max-w-sm'
                  >
                    <ReviewCards
                      id={review.id}
                      reviewer={review.client_name}
                      position={review.position}
                      comment={review.comment}
                      className='w-80 h-full'
                    />
                  </SwiperSlide>
                ))}
              </CardSlider>
            </SpotlightContainer>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Service
