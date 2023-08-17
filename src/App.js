// ====================================
// There were plans to add a Checkout
// page, but there was not quite
// enough time to finish it.
// ====================================

// AromaGlow Naturals Store page
// Sprint 2 Group Project

// Figma mockup / design by: Aidan Holloway
// React application / design implementation by: Evan Davies

// Last updated: August 17, 2023

import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import { Provider } from './context/Context';

function App() {

  return (
    <Router>
    <Provider>
    <div>
      <Header />
      {/* The site background image */}
      <div className='bg'>
        {/* All available routes */}
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/contact' element={<Contacts/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/product/:productNum' element={<Product />}></Route>
          <Route path='/checkout' element={<Checkout />}></Route>
        </Routes>
        </div>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
