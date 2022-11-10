import React, { useEffect, useState } from 'react'
import Cartlayout from '../layouts/Cart.layout';
// redux
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../redux/reducers/food/food.action";
import { getCart } from '../redux/reducers/cart/cart.action';
import CartContainer from '../components/cart/CartContainer';

const Cartpage = () => {
    const user = useSelector((globalState) => globalState.user);
    const cart = useSelector((globalState) => globalState.cart.cart);
    console.log("Cart Data")
    console.log(cart)
    let total = 0;

    {
        cart.map((item) => (
            total = parseInt(item.totalPrice) + total
        ))
    }
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCart());

    }, []);
    console.log(cart?.length === 0)
    const payNow = () => {
        let options = {
            key: "rzp_test_q1aD8S4CGOEb75",
            amount:
                cart.reduce((total, current) => total + current.totalPrice, 0) * 100,
            currency: "INR",
            name: "G4F Master",
            description: "Fast Delivery Service",
            handler: (data) => {
                alert("Payment Successful");
                console.log(data);
            },
            prefill: {
                name: user.name,
                email: user.email,
            },
            theme: {
                color: "#e23744",
            },
        };

        // let razorpay = new window.Razorpay({ options });
        let razorpay = new window.Razorpay(options);
        razorpay.open();
    };


    return (
        <>

            <div>



                {user?.fullName ? (


                    <div class="cartbody">
                        <div class="container">
                            <div class="Cart-Container cart">
                                <h3 class="Heading">Shopping Cart</h3>

                                <div>
                                    <h5 className="Action" style={{ textAlign: "right" }}> Remove All</h5>


                                </div>


                                <div  >
                                    {cart?.length === 0 ? (
                                        <h1 class="display-1">
                                            <p> There are no item in the cart.</p>
                                        </h1>) : (


                                        cart.map((item) => (
                                            <CartContainer key={item._id} {...item} />

                                        ))


                                    )}
                                </div>
                                {/* <CartContainer /> */}

                                <div class="checkout">
                                    <div class="total">
                                        <div class="grandtotal">
                                            <div class="Subtotal">Sub-Total</div>
                                            <div class="items">{cart.length} Items
                                            </div>
                                        </div>
                                        <div class="total-amount">Rs.

                                            {total}
                                        </div>
                                    </div>
                                </div>




                            </div>
                        </div>



                    </div>
                ) : (
                    <div>

                        < h1 class="display-1" style={{ color: "red" }}  >
                            <p> Please Log in first!</p>
                        </h1>
                    </div>
                )}


            </div>

        </>
    )
}

export default Cartlayout(Cartpage);