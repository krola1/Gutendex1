import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pagination from "../../components/Pagination/Pagination.jsx";
import { fetchBookDetails } from "../../api/axiosGutendex.js";
import styles from "../DetailsPage/DetailsPage.module.css";

export default function DetailsPage() {
  const [book, setBook] = useState(null);
  const { id } = useParams(); // This is to get the book ID from the URL

  useEffect(() => {
    const getBook = async () => {
      try {
        const data = await fetchBookDetails(id);
        setBook(data);
      } catch (error) {
        console.error(error);
      }
    };

    getBook();
  }, [id]);

  if (!book) return <p className={styles.loading}>Loading book details ...</p>;

  return (
    <article className={styles.bookDetails}>
      <h1 className={styles.title}>{book.title}</h1>
      <div className={styles.containerImg}>
        <img
          src={book.formats?.["image/jpeg"]}
          alt={book.title}
          className={styles.bookImg}
        />
      </div>
      <div className={styles.textDetails}>
        <p>
          <strong>Author:</strong> {book.authors?.[0]?.name}
        </p>
        <p>
          <strong>Downloads:</strong> {book.download_count}
        </p>
        <p>
          <strong>Category:</strong> {book.subjects?.join(", ")}
        </p>
        <p>
          <strong>Language:</strong> {book.languages?.join(", ")}
        </p>
        <p>
          <strong>Read online:</strong>{" "}
          <a
            href={book.formats?.["text/html"]}
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Book
          </a>
        </p>
        <button className={styles.favBtn}>Add to Favorites</button>
      </div>
    </article>
  );
}
