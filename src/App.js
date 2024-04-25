import {Routes,Route, Navigate} from 'react-router-dom';
import Store from './components/pages/Store';
import Cart from './components/pages/Cart';
import Navbar from './components/pages/Navbar';
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';
import Footer from './components/pages/Footer';
import Category from './components/pages/Category';
import ProductDetails from './components/pages/ProductDetails';

function App() {
  return (
    <>
    <ProductsContextProvider>
      <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Store/>}/>
        <Route path='/products/:category/:id' element={<ProductDetails/>}/>
        <Route path='/products/:category' element={<Category/>}/>
        <Route path='/*' element={<Navigate to="/products" />} />
      </Routes>
      <Footer/>
    </CartContextProvider>
    </ProductsContextProvider>
    </>
  );
}

export default App;
