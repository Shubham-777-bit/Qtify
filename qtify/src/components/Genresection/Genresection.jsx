import React, { useEffect, useState } from 'react';
import styles from './GenreSection.module.css';
import { CircularProgress } from '@mui/material';
import Card from '../Card/Card';
import Carousel from '../Carousel/Carosuel';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

function sortByGenre(data, genreType) {
  if (genreType === 'all') {
    return data;
  }
  return data.filter((item) => item.genre.key === genreType);
}

const GenreSection = ({ data, title, genreList }) => {
  const [value, setValue] = useState('all');
  const [songData, setSongData] = useState(data);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    setSongData(sortByGenre(data, value));
  }, [value, data]);

  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
      </div>
      <TabContext value={value}>
        <Box className={styles.tabWrapper}>
          <TabList onChange={handleChange} aria-label="Genre Tab" TabIndicatorProps={{ className: styles.indicator }}>
            {genreList.map((genre) => (
              <Tab
                className={genre.key === value ? styles.selectedTab : styles.genreTab}
                key={genre.key}
                label={genre.label}
                value={genre.key}
              />
            ))}
          </TabList>
        </Box>
        <TabPanel key={value} value={value}>
          {!songData?.length ? (
            <CircularProgress />
          ) : (
            <div className={styles.cardWrapper}>
              <Carousel data={songData} componentRender={(ele) => <Card data={ele} type="song" />} />
            </div>
          )}
        </TabPanel>
      </TabContext>
    </div>
  );
};

export default GenreSection;
