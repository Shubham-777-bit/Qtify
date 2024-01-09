// import React, { useState } from 'react';
import React, { useState } from 'react';  // Import React
import styles from './Section.module.css';
import { CircularProgress, Box } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carosuel';

const Section = ({ title, data }) => {
  const [carouselToggle, setCarouselToggle] = useState(true);

  const handleToggle = () => {
    setCarouselToggle(!carouselToggle);
  };

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        {title && (
          <h4 className={styles.toggleText} onClick={handleToggle}>
            {carouselToggle ? "Show All" : "Collapse All"}
          </h4>
        )}
      </div>
      {!data?.length ? (
        <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress />
        </Box>
      ) : (
        <div className={styles.cardWrapper}>
          {!carouselToggle ? (
            <div className={styles.wrapper}>
              {data.map((item) => (
                <Card key={item.id} data={item} type="album" />
              ))}
            </div>
          ) : (
            <Carousel
              data={data}
              componentRender={(ele) => <Card data={ele} type="album" />}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Section;






