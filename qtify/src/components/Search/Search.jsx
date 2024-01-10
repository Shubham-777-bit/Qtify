import React, { useState } from 'react';
import styles from './Search.module.css';
import { ReactComponent as SearchIcon } from "../../asstes/Seachicon.svg";
import { Autocomplete, TextField, Paper, ListItemText } from '@mui/material';

const Searchbar = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);

  const changeHandler = (e) => {
    setVal(e.target.value);
  }

  const clickHandler = () => {
  }

  return (
    <div className={styles.wrapper}>
      <Autocomplete
        className={styles.search}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data.map((option) => option.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
            onChange={changeHandler}
            className={styles.searchBox}
          />
        )}
        PaperComponent={({ children }) => (
          <Paper sx={{ backgroundColor: 'black' }}>{children}</Paper>
        )}
        renderOption={(props, option) => (
          <li {...props}>
            <ListItemText primary={option} sx={{ color: 'white' }} />
          </li>
        )}
      />
      <button className={styles.searchButton} type="submit" onClick={clickHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Searchbar;



   
