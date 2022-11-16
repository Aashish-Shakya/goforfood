import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import cartCss from "../assets/styles/cart.module.css"
import CartContainer from "../components/cart/CartContainer";
const Cartlayout = (Component) =>
    ({ ...props }) => {


        return (
            <>
                <Navbar />
                <div className="container mx-auto px-4 lg:px-20">
                    <Component {...props} />
                </div>

                <Footer />
            </>
        )
    }


export default Cartlayout

