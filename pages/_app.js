import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRouter } from 'next/router';
import LoadingBar from "react-top-loading-bar";
import ErrorBoundary from './errorBoundary';

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [user, setUser] = useState(null);
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  // Load cart and user on initial load
  useEffect(() => {
    router.events.on('routeChangeStart', () => setProgress(40));
    router.events.on('routeChangeComplete', () => setProgress(100));

    // Load cart from localStorage if it exists
    if (typeof window !== 'undefined') {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }

      // Load user token from localStorage if it exists
      const token = localStorage.getItem('token');
      if (token) {
        setUser(token);
      }
    }
  }, [router.events]);

  // Save cart to localStorage whenever it changes
  const saveCart = (myCart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(myCart));
    }
  };

  // Add item to the cart
  const addCart = (itemCode, qty, price, name, size, variant) => {
    let myCart = { ...cart };
    if (itemCode in myCart) {
      myCart[itemCode].qty += qty;
    } else {
      myCart[itemCode] = { qty, price, name, size, variant };
    }
    setCart(myCart);
    saveCart(myCart);
  };

  // Remove item from the cart
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

  // Clear the cart
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  // Calculate the total value of the cart
  const calculateTotal = () => {
    let sum = 0;
    for (let item in cart) {
      sum += cart[item].price * cart[item].qty;
    }
    return sum;
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <>
      <ErrorBoundary>
        <LoadingBar
          color="#ff2d55"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
          waitingTime={500}
        />
        <Navbar
          user={user}  // Pass user state to Navbar
          cart={cart}
          addCart={addCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          total={calculateTotal}
          logout={logout}  // Pass logout function to Navbar
        />
        <Component
          user={user}  // Pass user state to Navbar
          cart={cart}
          addCart={addCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          total={calculateTotal}
          logout={logout}  // Pass logout function to Navbar
          {...pageProps}
        />
        <Footer />
      </ErrorBoundary >
    </>
  );
}

export default MyApp;
