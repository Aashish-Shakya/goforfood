import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import FoodTab from "../components/FoodTab";
import menuIcon from "../assets/images/menu_2.png"
import menuCss from "../assets/styles/menu.css"

import FoodList from "../components/Menu/FoodList";
const MenupageLayout =
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


                    {/* <div class="menu1">
                        <nav class="navbar1">
                            <ul class="nav-list1">

                                <li class="category"><a href="#north">American </a></li>
                                <li class="category"><a>Italian </a></li>
                                <li class="category"><a>Chinese </a></li>
                                <li class="category"><a>South-Indian </a></li>
                                <li class="category"><a>Sweet </a></li>
                                <li class="category"><a>Drinks </a></li>
                            </ul>
                        </nav>
                    </div> */}
                    <div class="menu-container" >
                        <div class="menu--title">

                            <img id="menuIcon" src={menuIcon} />
                        </div>

                        {/* <!-- Menu --> */}
                        <div class="menu">

                            {/* <div class="container"> */}

                            {/* <div class="menu--category" id="category">
                                <span>  Indian</span>
                            </div> */}



                            <FoodList />



                            {/* </div> */}

                            <br /><br />
                        </div>
                        {/* <div id="north" className="menu--category">Hello All</div> */}
                        <div class="checkout">
                            <button class="checkout--button">Checkout</button>
                        </div>
                    </div>

                    {/* // <!-- Menu ends --> */}

                    {/* // <!-- Checkout Button --> */}
                    {/* // <!-- <div class="checkout_div">
        <% if (session.getAttribute("username")==null) { out.print("<button class=\"checkout\" onclick=\"alert('Please
            Log in first!')\">Checkout</button>");
            } else {
            out.print("<button class=\"checkout\" onclick=\"checkout('" + session.getAttribute("username")
                + "')\">Checkout</button>");
            }
            %> */}

                    {/* // </div> -->
    // <!-- Checkout Button --> */}



                    <Footer />
                </>
            );
        };

export default MenupageLayout;