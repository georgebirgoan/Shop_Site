import {Routes,Route, Navigate} from 'react-router-dom';
import Store from './components/pages/Store';
import Cart from './components/pages/Cart';
import Navbar from './components/pages/Navbar';
import ProductsContextProvider from './context/ProductsContextProvider';
import CartContextProvider from './context/CartContextProvider';


function App() {
  return (
    <>
    <ProductsContextProvider>
      <CartContextProvider>
      <Navbar/>
      <Routes>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/products' element={<Store/>}/>
        <Route path='/*' element={<Navigate to="/products" />} />
      </Routes>
    </CartContextProvider>
    </ProductsContextProvider>
    </>
  );
}

export default App;
