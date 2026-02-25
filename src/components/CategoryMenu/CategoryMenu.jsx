import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./CategoryMenu.module.css";
import {
  FaBookOpen,
  FaHeart,
  FaBalanceScale,
  FaUsers,
  FaGavel,
  FaTheaterMasks,
  FaBrain,
} from "react-icons/fa";
import {
  GiMagnifyingGlass,
  GiKnifeThrust,
  GiDragonHead,
  GiCrown,
  GiTreasureMap,
  GiCrossedSwords,
} from "react-icons/gi";

const categories = [
  { name: "Fiction", id: "fiction", icon: <FaBookOpen /> },
  { name: "Mystery", id: "mystery", icon: <GiMagnifyingGlass /> },
  { name: "Thriller", id: "thriller", icon: <GiKnifeThrust /> },
  { name: "Romance", id: "romance", icon: <FaHeart /> },
  { name: "Fantasy", id: "fantasy", icon: <GiDragonHead /> },
  { name: "Morality", id: "morality", icon: <FaBalanceScale /> },
  { name: "Society", id: "society", icon: <FaUsers /> },
  { name: "Power", id: "power", icon: <GiCrown /> },
  { name: "Justice", id: "justice", icon: <FaGavel /> },
  { name: "Adventure", id: "adventure", icon: <GiTreasureMap /> },
  { name: "Tragedy", id: "tragedy", icon: <FaTheaterMasks /> },
  { name: "War", id: "war", icon: <GiCrossedSwords /> },
  { name: "Philosophy", id: "philosophy", icon: <FaBrain /> },
];
export default function CategoryMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button
        className={styles.categoryToggle}
        onClick={() => setIsOpen(!isOpen)}
      >
        Categories ▾
      </button>
      {isOpen && (
        <section className={styles.dropdownMenu}>
          {categories.map((category) => (
            <Link
              className={styles.categories}
              key={category.id}
              to={`/category/${category.name}`}
              onClick={() => setIsOpen(false)}
            >
              <div className={styles.icon}>{category.icon}</div>
              <span className={styles.categoryName}>{category.name}</span>
            </Link>
          ))}
        </section>
      )}
    </div>
  );
}
