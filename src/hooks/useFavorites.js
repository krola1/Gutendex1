import { useLocalStorage } from "../hooks/useLocalStorage";

export default function useFavorites() {
  const [favorites, setFavorites] = useLocalStorage("bookFavorites", []);

  const isFavorite = (id) => favorites.some((book) => book.id === id);

  const addFavorite = (book) => {
    if (isFavorite(book.id)) return;
    setFavorites((prev) => [...prev, book]);
  };

  const removeFavorite = (id) => {
    setFavorites((prev) => prev.filter((book) => book.id !== id));
  };

  const toggleFavorite = (book) => {
    isFavorite(book.id) ? removeFavorite(book.id) : addFavorite(book);
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}
