// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Mark from "./Swiper.styled";

function MainSlider() {
    return (
        <>
            {/*<Mark />*/}
            <Swiper
                // install Swiper modules
                style={{
                    marginRight: "auto",
                    marginLeft: "auto",
                    marginTop: '30px',
                    width: "100%",
                    minWidth: "500px",
                    height: "500px",
                    minHeight: "350px",
                    backgroundColor: "#FFF5F1",
                    borderRadius: "12px",
                }}
                modules={[Navigation, Pagination]}
                loop={true}
                spaceBetween={8}
                initialSlide={1}
                centeredSlides={true}
                navigation={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 3000 }}
            >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
            </Swiper>
        </>
    );
}



export default MainSlider