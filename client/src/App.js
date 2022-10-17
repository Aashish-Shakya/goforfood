import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//pages
import Home from "./pages/Home.page";
import Navbar from './components/Navbar';
import Menupage from './pages/Menu.page';
import CartPage from './pages/Cart.page';
import OrderPage from './pages/Order.page';


//companents
// import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/:type" />} />
        <Route path="/:type" element={<Home />} />
        <Route path="/menu" element={<Menupage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </>
  );
}

export default App;
