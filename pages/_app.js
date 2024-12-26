import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRouter } from 'next/router';
import { set } from 'mongoose';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [subtotal, setSubtotal] = useState(0);
  const router  = useRouter();
  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        setCart(storedCart);
      }
    } catch (err) {
      console.error('Error loading cart from localStorage:', err);
    }
  }, []);

  const saveCart = (myCart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(myCart));
    }
  };

  const addCart = (itemCode, qty, price, name, size, variant) => {
    console.log('Adding to cart:', itemCode, qty, price, name, size, variant);  // Debugging log
    let myCart = { ...cart };
    if (itemCode in myCart) {
      myCart[itemCode].qty += qty;
    } else {
      myCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
  };

  const removeFromCart = (itemCode, qty) => {
    let myCart = { ...cart };
    if (itemCode in myCart) {
      myCart[itemCode].qty -= qty;
    }
    if (myCart[itemCode]?.qty <= 0) {
      delete myCart[itemCode];
    }
    setCart(myCart);
    saveCart(myCart);
  };

  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  const calculateTotal = (myCart) => {
    let sum = 0;
    for (let item in myCart) {
      sum += myCart[item].price * myCart[item].qty;
    }
    // console.log('Cart total:', sum);  // Debugging log
    return sum;
  };

  return (
    <>
      <Navbar
        cart={cart}
        addCart={addCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        total={calculateTotal}
        
      />
      <Component
        cart={cart}
        addCart={addCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        total={calculateTotal}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
