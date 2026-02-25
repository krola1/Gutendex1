import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../SearchBar/SearchBar.module.css";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!search.trim()) return;

    navigate(`/search?q=${encodeURIComponent(search)}`);
    setSearch("");
  };

  return (
    <form onSubmit={handleSearch} className={styles.searchBar}>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search for book.."
        className={styles.searchInput}
      />
      <button type="submit" className={styles.searchBtn}>
        Search
      </button>
    </form>
  );
}
