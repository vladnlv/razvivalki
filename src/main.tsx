import "./styles/main.scss";
import axios from 'axios';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import ReactDom from "react-dom";
import { Route } from 'react-router-dom';
import 'macro-css';

import Header from './components/Header/Header';
import Cart from './components/Cart/Cart'
import SignIn from './components/SignIn/SignIn'
import SignUp from "./components/SignUp/SignUp";

import Main from './pages/Main';
import Catalog from "./pages/Catalog";
import Delnpay from "./pages/Delnpay";
import Aboutus from "./pages/Aboutus";
import Cart1 from "./pages/Cart1";

import { useEffect, useState } from 'react';

function App() {
  const [cartOpened, setCartOpened] = useState(false);
  const [signInOpened, setSignInOpened] = useState(false);
  const [signUpOpened, setSignUpOpened] = useState(false);
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState<object[]>([]);

  useEffect(() => {
    axios.get('https://62683c703f45bffa8389d669.mockapi.io/catalog').then(res => {
      setProducts(res.data);
    })
    axios.get('https://62683c703f45bffa8389d669.mockapi.io/cart').then(res => {
      setCartProducts(res.data);
    })
  }, []);

  const onAddToCart = (obj: any) => {
    axios.post('https://62683c703f45bffa8389d669.mockapi.io/cart', obj);
    setCartProducts(prev => [...prev, obj])
  };

  const onRemoveProduct = (id: string) => {
    axios.delete(`https://62683c703f45bffa8389d669.mockapi.io/cart/${id}`);
    setCartProducts(prev => prev.filter(item => item.id !== id));
  }

  const onSignUp = () => {
    setSignUpOpened(true);
    setSignInOpened(false)
  };

  return (
    <div className="wrapper">
      {/* <Cart cartProducts={cartProducts} onClose={() => setCartOpened(false)} onRemove={onRemoveProduct} opened={cartOpened} /> */}
      <SignIn onClose={() => setSignInOpened(false)} signInOpened={signInOpened} onSignUp={onSignUp} signUpOpened={signUpOpened} />
      <SignUp onClose={() => setSignUpOpened(false)} signUpOpened={signUpOpened}></SignUp>
      <Header onClickCart={() => setCartOpened(true)} onClickAcc={() => setSignInOpened(true)}></Header>
      <Routes>
        <Route path="" element={<Main />}></Route>
        <Route path="catalog" element={<Catalog products={products} onAddToCart={onAddToCart} />}></Route>
        <Route path="delnpay" element={<Delnpay />}></Route>
        <Route path="aboutus" element={<Aboutus />}></Route>
        <Route path="cart" element={<Cart1 cartProducts={cartProducts} onRemove={onRemoveProduct} />}></Route>
      </Routes>
    </div>
  );
}

ReactDom.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("app")
);
