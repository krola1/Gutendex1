import useFavorites from "../../hooks/useFavorites";
import BookList from "../../components/BookList/BookList";
import styles from "../FavoritesPage/FavoritePage.module.css";

export default function FavoritePage() {
  const { favorites, isFavorite, toggleFavorite } = useFavorites();
  return (
    <section className={styles.favoritesPage}>
      <h2 className={styles.text}>My favorites</h2>
      <div className={styles.favorites}>
        {favorites.length > 0 ? (
          <BookList
            books={favorites}
            isFavorite={isFavorite}
            toggleFavorite={toggleFavorite}
          />
        ) : (
          <p className={styles.text}>No books stored in favorites.</p>
        )}
      </div>
    </section>
  );
}
