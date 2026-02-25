import { useTheme } from "../Context/ThemeContext.jsx";
import styles from "../Header/Header.module.css";
import { FiSun, FiMoon } from "react-icons/fi";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <button className={styles.theme} onClick={toggleTheme}>
        {theme === "light" ? <FiMoon /> : <FiSun />}
      </button>
    </>
  );
}
