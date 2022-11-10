import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import CartPage from "./Cart.page";
import MenuPage from "./Menu.page";
import OrderPage from "./Order.page";
import SignIn from "./SignIn";
import SignUp from "./SignUp";


//companents
// import Navbar from './components/Navbar';

// redux
import { useDispatch, useSelector } from "react-redux";

import { getOrder } from "../redux/reducers/order/order.action";
import ContactUs from "../components/Footer/ContactUs";
import Gallery from "../components/Footer/Gallery";





const Home = () => {

    const dispatch = useDispatch();
    const { type } = useParams();
    useEffect(() => {
        dispatch(getOrder());

    }, []);

    return (
        <>

            {/* <div className="my-5 mb-20 md:mb-10"> */}
            {/* {console.log(order)} */}
            <div className="">
                {type === "menu" && <MenuPage />}
                {type === "cart" && <CartPage />}
                {type === "order" && <OrderPage />}
                {type === "signin" && <SignIn />}
                {type === "signup" && <SignUp />}
                {type === "contactus" && <ContactUs />}
                {type === "gallery" && <Gallery />}
            </div>
        </>
    );
};

export default HomeLayout(Home);