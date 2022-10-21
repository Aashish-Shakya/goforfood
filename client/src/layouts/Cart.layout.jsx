import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import cartCss from "../assets/styles/cart.css"
const Cartlayout = (Component) =>
    ({ ...props }) => {

        const user = {
            fullName: "Aditya",
        };

        return (
            <>
                <Navbar />
                <div>


                    {user?.fullName ? (


                        <div class="cartbody">
                            <div class="container">
                                <div class="Cart-Container cart">
                                    <h3 class="Heading">Shopping Cart</h3>

                                    <div>
                                        <h5 className="Action" style={{ textAlign: "right" }}> Remove All</h5>


                                    </div>

                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Product</th>
                                                <th scope="col">Name</th>
                                                <th scope="col">Quantity</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Cost</th>
                                                <th scope="col">Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>


                                            <tr>
                                                <td class="image-box"><img src=" " style={{ height: "120px" }} /></td>
                                                <td class="about">
                                                    <h1 class="title"> Gol Gappe
                                                    </h1>
                                                </td>
                                                <td class="counter">
                                                    <div class="btn">-</div>
                                                    <div class="count">2
                                                    </div>
                                                    <div class="btn">+</div>
                                                </td>
                                                <td class="unit_price">100
                                                </td>
                                                <td class="prices">
                                                    <div class="amount">
                                                        200
                                                    </div>
                                                </td>
                                                <td>
                                                    <div class="remove"><u>Remove</u></div>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>



                                    <div class="checkout">
                                        <div class="total">
                                            <div class="grandtotal">
                                                <div class="Subtotal">Sub-Total</div>
                                                <div class="items">2 Items
                                                </div>
                                            </div>
                                            <div class="total-amount">Rs. 200
                                            </div>
                                        </div>
                                    </div>




                                </div>
                            </div>



                        </div>
                    ) : (
                        <div>
                            {/* <h1 class="display-1">
                                <p> There are no item in the cart.</p>
                            </h1> */}

                            <h1 class="display-1" style={{ color: "red" }}  >
                                <p> Please Log in first!</p>
                            </h1>
                        </div>
                    )}


                </div>


                <Footer />
            </>
        )
    }


export default Cartlayout

