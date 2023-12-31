import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button';
import Logo from '../../Logo/Logo';
import Searchbar from '../Searchbar/Searchbar';

const Navbar =() => {
  return (
      <nav className={styles.navbar}>
        <Logo />
        <Searchbar/>
        <Button children="Give Feedback"/>
      </nav>      
  )
}

export default Navbar;