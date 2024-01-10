import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import Searchbar from "../Search/Search"
import styles from './NavBar.module.css'
const NavBar = ({data}) => {
  return (
    <nav className={styles.navbar}>
        <Logo />
        <Searchbar data={data} />
        <Button children={"Give Feedback"} />
    </nav>
  )
}

export default NavBar