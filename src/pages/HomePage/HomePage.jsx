import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import BookList from "../../components/BookList/BookList.jsx";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { fetchSearchBooks } from "../../api/axiosGutendex.js";
import styles from "../HomePage/HomePage.module.css";

export default function HomePage() {
  const [books, setBooks] = useState([]);
  const location = useLocation();
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);

  // get query from url
  const searchResult = new URLSearchParams(location.search).get("q");

  useEffect(() => {
    if (!searchResult) {
      setBooks([]);
      setLoading(false);
      return;
    }

    const getBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchSearchBooks(searchResult);
        setBooks(data.results); // Gutendex puts books inside "results"
        setNextPage(data.next);
        setPreviousPage(data.previous);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, [searchResult]);

  // The start page
  if (!searchResult) {
    return (
      <div className={styles.startPage}>
        <h1>Welcome to Gutendex</h1>
        <p>Search for a book and expand your knowledge</p>
      </div>
    );
  }

  // When site is loading
  if (loading)
    return <p className={styles.loading}>Loading search results...</p>;

  // If the site shows no results
  if (!books.length) return <p className={styles.loading}>No books found.</p>;

  // Results
  return (
    <>
      <h2 className={styles.homePage}>Search results for "{searchResult}"</h2>
      <div className={styles.searchList}>
        <BookList
          books={books}
          isFavorite={isFavorite}
          toggleFavorite={toggleFavorite}
        />
      </div>
      <Pagination nextPage={nextPage} previousPage={previousPage} />
    </>
  );
}
