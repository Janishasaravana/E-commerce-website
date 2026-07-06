import './App.css';
import FrontPage from './Components/FrontPage';
import Brands from './Components/Brands';
import { Route } from 'react-router-dom';
import { BrowserRouter, Routes } from 'react-router-dom';
import Samsung from './Components/Samsung';
import SamsungDetails from './Components/SamsungDetails';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Checkout from './Components/Checkout';
function App() {
  return (
    <div>


<Routes>
  <Route path="/" element={<FrontPage />} />
  <Route path="/brands" element={<Brands />} />
  <Route path="/samsung" element={<Samsung />} />
<Route path="/samsung/:id" element={<SamsungDetails />} />
 <Route path="/cart" element={<Cart />} />
 <Route path="/checkout" element={<Checkout />} />
 <Route path="/login" element={<Login />} />





</Routes>


    
    </div>
  );
}

export default App;

