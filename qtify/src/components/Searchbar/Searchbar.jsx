import React from 'react'
import styles from "./Searchbar.module.css"
import { ReactComponent as SearchIcon } from "../../asstes/Seachicon.svg";

const Searchbar = () => {
  return (
    <div>
      <form className={styles.wrapper} >
        <input className={styles.search}/>
        <div>
          <button className={styles.searchbutton} type='submit'>
            <SearchIcon/>
          </button>
        </div>
      </form>
    </div>
  )
}

export default Searchbar;   