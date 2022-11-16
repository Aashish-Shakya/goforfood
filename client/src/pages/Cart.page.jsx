import React, { useEffect, useState } from 'react'
import Cartlayout from '../layouts/Cart.layout';
import cx from "classnames"
import cartCss from "../assets/styles/cart.module.css"
// redux
import { useDispatch, useSelector } from "react-redux";
// import { getFood } from "../redux/reducers/food/food.action";
import { getCart } from '../redux/reducers/cart/cart.action';
import CartContainer from '../components/cart/CartContainer';
import { BsShieldLockFill } from "react-icons/bs";


const Cartpage = () => {
    const cart = useSelector((globalState) => globalState.cart.cart);
    const user = useSelector((globalState) => globalState.user);
    // console.log("Cart Data")
    // console.log(cart)
    let total = 0;

    {
        cart.map((item) => (
            total = parseInt(item.totalPrice) + total
        ))
    }


    const payNow = () => {
        let options = {
            key: "rzp_test_UlPKh5EHocg8Rv",
            amount:
                cart.reduce((total, current) => total + current.totalPrice, 0) * 100,
            currency: "INR",
            name: "G4F Master",
            description: "Fast Delivery Service",
            handler: (data) => {
                alert("Payment Successful");
                console.log(data);
                localStorage.removeItem("goforfoodCart", window.location.reload(false))

                // localStorage.setItem("goforfoodCart", JSON.stringify({ cart: cartData.cart }));
            },
            prefill: {
                name: user.fullName,
                email: user.email,
            },
            theme: {
                color: "#528FF0",
            },
        };

        // let razorpay = new window.Razorpay({ options });
        let razorpay = new window.Razorpay(options);
        razorpay.open();
    };


    return (
        <>





            {user?.fullName ? (


                <div class={cartCss.cartbody}>
                    <div class={cartCss.container}>
                        {/* <span className={cx(signUpCss.dot, signUpCss.one)}></span> */}

                        {/* <div class="Cart-Container cart"> */}
                        <div class={cx(cartCss.CartContainer, cartCss.cart)}>
                            <h3 class={cartCss.Heading}>Shopping Cart</h3>

                            {/* <div>
                                    <h5 className={cartCss.Action} style={{ textAlign: "right" }}> Remove All</h5>


                                </div> */}



                            {cart?.length === 0 ? (
                                <h3 class="display-5 ">
                                    <p> There are no item in the cart.</p>
                                </h3>) : (

                                <table class={cartCss.table}>
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

                                        {cart.map((item) => (
                                            <CartContainer key={item._id} {...item} />

                                        ))}




                                    </tbody>
                                </table>


                            )}

                            {/* <CartContainer /> */}
                            <div class={cartCss.checkout}>
                                <div class={cartCss.total}>
                                    <div class={cartCss.grandtotal}>
                                        <div class={cartCss.Subtotal}>Sub-Total</div>
                                        <div class={cartCss.items}>{cart.length} Items
                                        </div>
                                    </div>
                                    <div class={cartCss.totalamount}>Rs.

                                        {total}
                                    </div>
                                </div>
                            </div>





                        </div>
                    </div>


                    <div className={cartCss.container}>
                        <div className={cx(cartCss.CartContainer, cartCss.billing)}>
                            <div className={cartCss.row}>
                                <div className={cartCss.col75}>
                                    <div>

                                        <div className={cartCss.row}>
                                            <div className={cartCss.col50}>
                                                <h3 className={cartCss.da}>Delivery Address</h3>
                                                <br /> <br /> <br />
                                                <label for="fname"><i className="fa fa-user"></i> Full
                                                    Name</label>
                                                <input type="text" id="fname" name="firstname"
                                                    defaultValue={user.fullName} />
                                                <label for="email"><i className="fa fa-envelope"></i>
                                                    Email</label>
                                                <input type="text" id="email" name="email" defaultValue={user.email} />
                                                <label for="mob"><i className="fa fa-phone"></i>
                                                    Phone</label> <input type="text" id="mob" name="mobile" defaultValue={user.phoneNumber} />
                                                <label for="adr"><i className="fa fa-institution"></i>
                                                    Address</label> <input type="text" id="adr" name="address" defaultValue={user.address} />
                                                {/* <label for="city"><i className="fa fa-address-card"></i>
                                                    City</label> <input type="text" id="city" name="city" defaultValue="New Delhi" /> */}
                                                <div className={cartCss.row}>
                                                    <div className={cartCss.col50}>
                                                        <label for="state">State</label> <input type="text" id="state" name="state" defaultValue="Delhi" />
                                                    </div>
                                                    <div className={cartCss.col50}>
                                                        <label for="zip">Zip</label> <input type="text" id="zip" name="zip" defaultValue="110059" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        <div className={cartCss.payu}>
                                            <button
                                                onClick={payNow}
                                                className=" flex items-center gap-2 justify-center my-4 md:my-8 w-full px-4   h-14 text-white fomt-medium text-lg bg-zomato-400 rounded-lg"
                                            >
                                                Pay Securely <BsShieldLockFill />
                                            </button>
                                            {/* <input value="PayOnline" className={cartCss.checkoutbtn} onClick={payNow} /> */}
                                            {/* <input type="button" onclick="paycod()" value="COD" className={cartCss.checkoutbtn} /> */}
                                        </div>





                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            ) : (
                <div>

                    <h1 class="display-1" style={{ color: "red" }}  >
                        <p> Please Log in first!</p>
                    </h1>
                </div>
            )}




        </>
    )
}

export default Cartlayout(Cartpage);