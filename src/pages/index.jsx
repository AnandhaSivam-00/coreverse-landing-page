import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

import Header from '../components/Header'
import Footer from '../components/Footer'

const Container = () => {
    const location = useLocation();

    // Scroll to top and force re-mount of components when route changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div
            className='w-full min-h-screen relative flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden gap-x-2 gap-y-10'
        >
            <Header />
            <main className='flex-grow w-21/22 md:w-19/22 lg:w-17/22 m-0 pt-40'>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={location.pathname}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Outlet />
                    </motion.div>
                </AnimatePresence>
            </main>
            <Footer />
        </div>
    )
}

export default Container