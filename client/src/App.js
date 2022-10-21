import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//pages
import HomePage from "./pages/Home.page";
import MenuPage from './pages/Menu.page';
import CartPage from './pages/Cart.page';
import OrderPage from './pages/Order.page';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


//companents
// import Navbar from './components/Navbar';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/:type" />} />
        <Route path="/:type" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

      </Routes>
    </>
  );
}

export default App;
// will install body parser