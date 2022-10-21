import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import FoodTab from "../components/FoodTab";
import menuIcon from "../assets/images/menu_2.png"
import menuCss from "../assets/styles/menu.css"

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


                    <div class="menu1">
                        <nav class="navbar1">
                            <ul class="nav-list1">

                                <li class="category"><a>American </a></li>
                                <li class="category"><a>Italian </a></li>
                                <li class="category"><a>Chinese </a></li>
                                <li class="category"><a>South-Indian </a></li>
                                <li class="category"><a>Sweet </a></li>
                                <li class="category"><a>Drinks </a></li>
                            </ul>
                        </nav>
                    </div>
                    <div class="menu-container" >
                        <div class="menu--title">

                            <img id="menuIcon" src={menuIcon} />
                        </div>

                        {/* <!-- Menu --> */}
                        <div class="menu">

                            <div class="container">
                                {/* <!-- Need to add chalk font in dish category --> */}
                                <div class="menu--category" id="category">
                                    <span> American</span>
                                </div>
                                <div class="menu--card-container">

                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1665828324/ggp_ut1tsz.jpg" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="../images/ggp.jfif" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="../images/ggp.jfif" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="../images/ggp.jfif" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="menu--category" id="category">
                                    <span> Italian</span>
                                </div>

                                <div class="menu--card-container">

                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="../images/ggp.jfif" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                    <div class="menu--card">
                                        <div class="card--imgbx"><img src="../images/ggp.jfif" alt="menu-item" class="menu--item-image" />
                                        </div>
                                        <div class="contentBx">
                                            <h2 class="menu--item-title">Gol Gappe</h2>
                                            <h3 class="menu--item-price">Price:<strike>1000</strike>20 /-</h3>
                                            <button>Add</button>
                                        </div>
                                    </div>
                                </div>


                            </div>

                            {/* <!-- <% for (Map.Entry<String, List<Dish>> category : bo.categorizeDishes().entrySet()) {
            out.print("<div id=" + category.getKey() + " class=\"categoryHeading\"> <span class='heading'>"
                    + category.getKey().toUpperCase() + "</span> DISHES</div>
            <div class=\"category\">");
                for (Dish dish : category.getValue()) {
                out.print(
                "<div class=\"container\">
                    <div class=\"card\">
                        <div class=\"imgBx\"><img class=\"image\" src="
									+ dish.getImage_url()
									+ "></div>
                        <div class=\"contentBx\">
                            <h2 class=\"shop-item-title\">" + dish.getName()
                                + "</h2><br>
                            <div>
                                <h3>Price: <strike style=\"color: red;\">" + dish.getPrice()
                                        + "</strike> " + (dish.getPrice() - dish.getDiscount())
                                    + "/-</h3><br>
                            </div><button class=\"shop-item-button\" style=\"background-color: rgb(57, 241,
                                33)\">ADD</button>
                        </div>
                    </div>
                </div>");
                }
                out.print("</div>");
            }
            %> -->

            <br>*/}
                        </div>
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