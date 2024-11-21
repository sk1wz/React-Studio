import React from 'react';
import AdvantageItem from './items/AdvantageItem';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { advantageList } from '../types/variables';

const Advantages = () => {

    // // variables
    // const [slidesPerView, setSlidesPerView] = useState(3);
   
    // // hooks
    // useEffect(() => {
    //     const handleResize = () => {
    //         const newSlidesPerView =
    //         window.innerWidth < 600 ? 1.2 :
    //         window.innerWidth < 800 ? 2.2 : 3;
    //         setSlidesPerView(newSlidesPerView);
    //     };
    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => {
    //         window.removeEventListener('resize', handleResize);
    //     };
    // }, []);

    return (
        <div className='Advantage' id="Advantage">
            <h2>Почему выбирают нас?</h2>
    
            <Swiper
                modules={[Pagination]}
                spaceBetween={30}
                
                breakpoints={{
                    1000:{
                        slidesPerView: 3,
                    },
                    800: {
                        slidesPerView: 2,
                      },
                    600: {
                      slidesPerView: 1,
                    },
                  }}
                pagination={{ clickable: true }}
                loop={true}
                autoplay={{
                    delay: 500,
                    disableOnInteraction: true
                }}
            >
                {advantageList.map((advantage) =>
                    <SwiperSlide className="Advantage__list" key={advantage.id} >
                        <AdvantageItem id={advantage.id} title={advantage.title} body={advantage.body} img={advantage.img} />
                    </SwiperSlide>
                )}
            </Swiper>
        </div>
    );
}

export default Advantages;