import React, { useEffect, useState } from 'react';
import { useSwiper } from 'swiper/react';
import { ReactComponent as LeftArrow } from '../../asstes/arrowleft.svg';
import "swiper/css";
import styles from './Carousel.module.css';

const CarouselNavigationLeft = () => {
    const swiper = useSwiper();
    const [isBeginning, setisBeginning] = useState(swiper.isBeginning);

    useEffect(() => {
        const handleSlideChange = () => {
            setisBeginning(swiper.isBeginning);
        };

        swiper.on('slideChange', handleSlideChange);

        
        return () => {
            swiper.off('slideChange', handleSlideChange);
        };
    }, [swiper]);

    return (
        <div className={styles.leftNavigation}>
            {!isBeginning && <LeftArrow onClick={() => swiper.slidePrev()} />}
        </div>
    );
};

export default CarouselNavigationLeft;



