import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home/Home';
import ProductDetails from './routes/ProductDetails/ProductDetails';
import Checkout from './routes/Checkout/Checkout';
import ShoppingCart from './routes/ShoppingCart/ShoppingCart';
import SearchResults from './routes/SearchResults/SearchResults';
import NewProduct from './routes/NewProduct/NewProduct';
import ProductList from './routes/ProductList/ProductList';
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout';
import AdminLayout from './layouts/AdminLayout/AdminLayout';


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<DefaultLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/products/:slug' element={<ProductDetails/>}></Route>
        <Route path='/checkout' element={<Checkout/>}></Route>
        <Route path='/cart' element={<ShoppingCart/>}></Route>
        <Route path='/search' element={<SearchResults/>}></Route>
        </Route>
        <Route path='/admin' element={<AdminLayout/>}>
        <Route path='/admin/products/new' element={<NewProduct/>}></Route>
        <Route path='/admin/products' element={<ProductList/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App;
