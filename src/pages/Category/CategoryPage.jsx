import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFavorites from "../../hooks/useFavorites";
import Pagination from "../../components/Pagination/Pagination.jsx";
import BookCard from "../../components/BookCard/BookCard.jsx";
import { fetchBookByCategory } from "../../api/axiosGutendex.js";
import styles from "../Category/CategoryPage.module.css";

export default function CategoryPage() {
  const { categoryName } = useParams();
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  useEffect(() => {
    const getBooks = async () => {
      try {
        setLoading(true);
        const data = await fetchBookByCategory(categoryName);
        setBooks(data.results);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getBooks();
  }, [categoryName]);

  if (loading)
    return <p className={styles.loading}>Loading category results...</p>;
  if (!books.length) return <p className={styles.loading}>No books found.</p>;

  return (
    <section>
      <h1 className={styles.categoryName}>{categoryName}</h1>
      <div className={styles.categoryMenu}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </section>
  );
}
