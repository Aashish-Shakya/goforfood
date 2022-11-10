import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

//pages
import HomePage from "./pages/Home.page";
import MenuPage from './pages/Menu.page';
import CartPage from './pages/Cart.page';
import OrderPage from './pages/Order.page';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';


//admin Page
import Users from './admin/pages/Users/Users.page';
import Orders from './admin/pages/Orders/Orders.page';
import Dishes from './admin/pages/Dishes/DishEdit.page';

//companents
// import Navbar from './components/Navbar';
import { useEffect } from "react";
// redux
import { useDispatch } from "react-redux";
import { getAllUser, getMySelf } from "./redux/reducers/user/user.action";
import { getCart } from "./redux/reducers/cart/cart.action";
import AdminPage from './admin/pages/Home.page'
import { getOrder } from './redux/reducers/order/order.action';
import ContactUs from './components/Footer/ContactUs';
import Gallery from './components/Footer/Gallery';
import Aboutpage from './pages/About.page';
import Servicespage from './pages/Services.page';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMySelf());
    dispatch(getCart());
    dispatch(getOrder());

  }, [localStorage]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate to="/:type" />} />
        <Route path="/:type" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="order" element={<OrderPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="aboutus" element={<Aboutpage />} />
        <Route path="services" element={<Servicespage />} />


        {/* Admin Page  */}

        <Route path="admin" element={<AdminPage />} />
        <Route path="users" element={<Users />} />
        <Route path="orders" element={<Orders />} />
        <Route path="dishes" element={<Dishes />} />


      </Routes>
    </>
  );
}

export default App;
// will install body parser