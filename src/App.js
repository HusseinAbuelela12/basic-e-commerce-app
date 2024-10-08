import './App.css';
import Navbar from './components/navbar/Navbar';
import ProductsList from './components/products-list/ProductsList';
import Slider from './components/slider/Slider';
import { Route,Routes } from 'react-router-dom';
import About from './components/about/About';
import ProductDetails from './components/product-details/ProductDetails'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' element={<><Slider /><ProductsList /></>}/>
          <Route path='about' element={<About />}/>
          <Route path='product/:productId' element={<ProductDetails />}/>
        </Routes>
    </div>
  );
}

export default App;
