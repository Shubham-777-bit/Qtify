import axios from 'axios';

const BACKEND_ENDPOINT = 'https://qtify-backend-labs.crio.do';

const fetchTopAlbums = async () => {
    try {
        const res =await axios.get (`${BACKEND_ENDPOINT}/albums/top`);
        console.log('fetchTopAlbums response:', res.data);
        return res.data; 
    } catch (err) {
        console.log(err);
    }
}

const fetchNewAlbums = async () => {
    try{
        const res =await axios.get (`${BACKEND_ENDPOINT}/albums/new`)
        console.log('fetchNewAlbums response:', res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

const fetchGenreList = async () => {
    try{
        const allObj = {
            key: "all",
            label: 'All'
        }
        const res = await axios.get(`${BACKEND_ENDPOINT}/genres`);
        const genreData = res.data.data;
        genreData.unshift(allObj);
        return genreData;
    } catch (err){
        console.log(err);
    }
}

const fetchSongs = async () => {
    try{
        const res = await axios.get (`${BACKEND_ENDPOINT}/songs`)
        console.log('fetchSongs response:', res.data);
        return res.data;
    } catch (err) {
        console.log(err);
    }
}

export { fetchTopAlbums, fetchNewAlbums, fetchSongs, fetchGenreList };