import { useState } from 'react';
import { useToast } from '@/components/ui/use-toast';

/**
 * Custom hook untuk mengelola keranjang belanja.
 * Menyediakan fungsi tambah item dan hitung total.
 */
export function useCart() {
  const [cartItems, setCartItems] = useState([]);
  const { toast } = useToast();

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);

    toast({
      title: 'Ditambahkan ke keranjang',
      description: `${product.name} telah ditambahkan.`,
    });
  };

  const getTotalItems = () => cartItems.length;

  return { cartItems, addToCart, getTotalItems };
}