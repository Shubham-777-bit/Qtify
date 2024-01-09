
import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as RightArrow } from '../../asstes/arrowright.svg';
import "swiper/css";
import styles from './Carousel.module.css';

const CarouselNavigationRight = () => {
    const swiper = useSwiper();
    const [isEnd, setisEnd] = useState(swiper.isEnd);

    useEffect(() => {
        const handleSlideChange = () => {
            setisEnd(swiper.isEnd);
        };

        swiper.on('slideChange', handleSlideChange);

        
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.rightNavigantion}>
            {!isEnd && <RightArrow onClick={() => swiper.slideNext()} />}
        </div>
    );
};

export default CarouselNavigationRight;


