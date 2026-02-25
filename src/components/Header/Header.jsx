import { Link } from "react-router-dom";
import CategoryMenu from "../CategoryMenu/CategoryMenu";
import SearchBar from "../SearchBar/SearchBar";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher.jsx";
import { useTheme } from "../Context/ThemeContext.jsx";
import styles from "../Header/Header.module.css";

export default function Header() {
  const { theme } = useTheme();
  return (
    <header className={`${styles.header} ${theme}`}>
      <div>
        <Link to="/">
          <h1 className={styles.Gutendex}>GUTENDEX</h1>
        </Link>
      </div>
      <nav className={styles.navBar}>
        <div className={styles.categoryMenu}>
          <CategoryMenu />
        </div>
        <div className={styles.searchBar}>
          <SearchBar />
        </div>
        <Link to="/favorites">
          <p className={styles.favorites}>Favorites</p>
        </Link>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
