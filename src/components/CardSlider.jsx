import { Swiper } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules'

const CardSlider = ({ children }) => {
    return (
        <div className="w-full max-w-5xl mx-auto relative py-10">
            {/* Glassmorphism background effect */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl backdrop-blur-lg -z-10"></div> */}
            {/* <div className='absolute inset-0 z-2 marquee-gradient-quotes'></div> */}
            <Swiper
                effect='coverflow'
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView='auto'
                coverflowEffect={{
                    rotate: 5,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                    slideShadows: true
                }}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                    clickable: true
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className='w-full relative px-4 py-10'
            >
                {children}

                <div className='slider-controler mt-8'>
                    <div className="swiper-button-prev slider-arrow w-12! h-12! rounded-2xl bg-black/20 backdrop-blur-lg hover:bg-black/40 transition-all !after:text-[12px]"></div>
                    <div className="swiper-button-next slider-arrow w-12! h-12! rounded-2xl bg-black/20 backdrop-blur-lg hover:bg-black/20 transition-all !after:text-[12px]"></div>
                    <div className="swiper-pagination bottom-0! static! mt-8 w-full! flex justify-center gap-1"></div>
                </div>
            </Swiper>
        </div>
    )
}

export default CardSlider