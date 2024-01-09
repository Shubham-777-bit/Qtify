import React, { useEffect, useState } from 'react';
import { fetchGenreList, fetchNewAlbums, fetchSongs, fetchTopAlbums }  from './api/index.js';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/HeroSection.jsx';
// import api from '../src/api/index.js';
// import Card from './components/Card/Card.jsx';
import Section from './components/section/Section.jsx';
import styles from './App.module.css';
import GenreSection from './components/Genresection/Genresection.jsx';

function App() {
  
  const [songsData, SetSongsData] = useState([]);
  const [TopAlbumData, SetTopAlbumData] = useState([]);
  const [NewAlbumData, SetNewAlbumData] = useState([]);
  const [genre, Setgenre] = useState([]);

  const Data = async () => {
    SetTopAlbumData(await fetchTopAlbums() );
    SetNewAlbumData(await fetchNewAlbums() );
    SetSongsData(await fetchSongs());
    Setgenre(await fetchGenreList() );
    }

 


  useEffect(()=>{
    Data()
  },[]);
 

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      {/* {TopAlbumData.map((item) => {
        return (
          <Card key={item.id} data={item} type="album" />
        )
      })} */}
      <div className ={styles.sectionWrapper}>
      <Section data={TopAlbumData} type="album" title="Top Album"/>
      <Section data={NewAlbumData}  type="album" title="New Album"/>
      <GenreSection data={songsData} title="Songs" genreList={genre} />
      </div>
    </div>
  );
}

export default App;


