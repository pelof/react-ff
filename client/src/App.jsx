import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Checkout from './routes/Checkout/Checkout';
import ShoppingCart from './routes/ShoppingCart/ShoppingCart';
import Search from './routes/Search/Search';
import NewProduct from './routes/NewProduct/NewProduct';
import ProductList from './routes/ProductList/ProductList';


function App() {

  return (
    <>
      <Routes>
        <Route index element={<Home/>}></Route>
        <Route path='/products/:slug' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/cart' element={<ShoppingCart/>}></Route>
        <Route path='/search/slug' element={<Search/>}></Route>
        <Route path='/admin/products/new' element={<NewProduct/>}></Route>
        <Route path='/admin/products' element={<ProductList/>}></Route>
      </Routes>
    </>
  )
}

export default App;
