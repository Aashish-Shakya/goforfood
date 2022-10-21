import React from "react";
import { useParams } from "react-router-dom";

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import CartPage from "./Cart.page";
import MenuPage from "./Menu.page";
import OrderPage from "./Order.page";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

// components


const Home = () => {
    const { type } = useParams();

    return (
        <>

            {/* 
            <div className="my-5 mb-20 md:mb-10">
                {type === "menu" && <MenuPage />}
                {type === "cart" && <CartPage />}
                {type === "order" && <OrderPage />}
                {type === "signin" && <SignIn />}
                {type === "signup" && <SignUp />}
            </div> */}
        </>
    );
};

export default HomeLayout(Home);