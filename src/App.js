import {Routes,Route, Navigate} from 'react-router-dom';
import Store from './components/pages/Store';
import Cart from './components/pages/Cart';
function App() {
  return (
    <>
    <p>daa</p>
    <Routes>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='products' element={<Store/>}/>
      <Route path='/*' element={<Navigate to="/products" />} />
    </Routes>
    </>
  );
}

export default App;
