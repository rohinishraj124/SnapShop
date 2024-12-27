import '../styles/globals.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useRouter } from 'next/router';
import LoadingBar from "react-top-loading-bar";
function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState({});
  const [user, setUser] = useState(null);
  const router = useRouter();
  const [progress, setProgress] = useState(0);

  // On first load, try to load the cart and user token
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    })
    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    })
    try {
      if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
        const storedCart = JSON.parse(localStorage.getItem('cart'));
        setCart(storedCart);
      }
    } catch (err) {
      console.error('Error loading cart from localStorage:', err);
    }

    // Check if there's a token in localStorage, if so, set the user state
    const token = localStorage.getItem('token');
    if (token) {
      setUser(token); // Set user from token if present
    }
  }, []);

  // Save cart to localStorage
  const saveCart = (myCart) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(myCart));
    }
  };

  // Add item to cart
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

  // Remove item from cart
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

  // Clear all items from cart
  const clearCart = () => {
    setCart({});
    saveCart({});
  };

  // Calculate total cart value
  const calculateTotal = (myCart) => {
    let sum = 0;
    for (let item in myCart) {
      sum += myCart[item].price * myCart[item].qty;
    }
    return sum;
  };

  // Logout function to remove token and set user state to null
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    router.push('/');
  };

  return (
    <>
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
