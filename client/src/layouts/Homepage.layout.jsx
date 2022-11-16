import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FoodList from "../components/Menu/FoodList";

import homeCss from "../assets/styles/home.module.css"
import "../assets/styles/home.module.css"

const HomepageLayout =
    (Component) =>
        ({ ...props }) => {



            return (
                <>
                    <div>
                        <Navbar />
                    </div>


                    {/* <FoodTab /> */}
                    <div className="container w-full flex mx-auto px-4 lg:px-20">
                        <Component {...props} />

                    </div>

                    <section class="main background">
                        <div class="overlay"></div>
                        <div class="content">
                            <h1 class="heading">Go 4 Food</h1>
                            <div class="text-content">
                                <div class="sub-contentbx">
                                    <p class="slogan">Give your hunger a way</p>
                                    <div className="body-logo"></div>
                                    {/* <img src="../public/image/alter.jpg" class="body-logo" alt="" /> */}
                                </div>

                                <p class="description">Thanks for visiting to our website where
                                    you can easily get your favourite food on such exciting offers</p>
                            </div>
                        </div>

                    </section>

                    <Footer />

                </>
            );
        };

export default HomepageLayout;