import { Link } from "react-router-dom";
import styles from "./BookCard.module.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

export default function BookCard({ book, isFavorite, toggleFavorite }) {
  console.log(isFavorite);
  return (
    <article className={styles.bookCard}>
      <Link to={`/book/${book.id}`}>
        <img
          src={book.formats["image/jpeg"] || "Missing Cover"}
          alt={book.title}
          className={styles.bookCover}
        />
        <section className={styles.info}>
          <h3 className={styles.bookTitle}>{book.title || "Unknown Title"}</h3>
          <p className={styles.author}>
            {book.authors?.map((a) => a.name).join(", ") || "Unknown Author"}
          </p>
        </section>
      </Link>
      <button
        className={styles.favoritesBtn}
        onClick={() => toggleFavorite(book)}
      >
        {isFavorite(book.id) ? <FaHeart /> : <FaRegHeart />}
      </button>
    </article>
  );
}
