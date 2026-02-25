import BookCard from "../BookCard/BookCard";
import styles from "../BookList/BookList.module.css";

export default function BookList({ books, isFavorite, toggleFavorite }) {
  if (!books || books.length === 0) {
    return <p>No books found.</p>;
  }
  return (
    <ul className={styles.bookList}>
      {books.map((book) => (
        <li key={book.id} className={styles.listItem}>
          <BookCard
            book={book}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        </li>
      ))}
    </ul>
  );
}
