import { useState } from 'react';

/**
 * Custom hook untuk mengelola daftar favorit.
 * Menyediakan fungsi toggle dan akses daftar favorit.
 */
export function useFavorites() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  return { favorites, toggleFavorite };
}