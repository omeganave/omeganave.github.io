import './App.css';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import Contacts from './pages/Contacts';
import About from './pages/About';
import Cart from './pages/Cart';
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
        </Routes>
        </div>
    </div>
    </Provider>
    </Router>
  );
}

export default App;
