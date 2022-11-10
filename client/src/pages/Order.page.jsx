import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import OrderList from "../components/Order/OrderList";
import OrderContainer from "../components/Order/OrderTable";
import Orderlayout from "../layouts/Order.layout";

// Layout

import { getOrder } from "../redux/reducers/order/order.action";
import { getAllUser } from "../redux/reducers/user/user.action";

const Order = () => {
    const user = useSelector((globalState) => globalState.user);

    // const orderList = useSelector((globalState) => globalState.order) || {};

    // const orderData = Object.values(orderList)





    // console.log(order.orders.orderDetails)
    // console.log(user)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder());
        // dispatch(getAlhlUser());

    }, []);



    return (
        <>


            <div class="body">
                <br />
                {user?.fullName ? (

                    <div class="container">
                        <h2 class="order-details">Order Details</h2>
                        <div id="accordion">


                            {/* <!-- <h1 style="font-size: xxx-large">NO ORDERS YET.</h1> --> */}



                            <div class="card">
                                <div class="card-header">
                                    {/* <!-- <center> --> */}
                                    <table class="table1">
                                        <thead>
                                            <tr>
                                                <th scope="col">Bill No</th>
                                                <th scope="col">TRX ID</th>
                                                <th scope="col">Total Amount</th>
                                                <th scope="col">Date & Time</th>
                                                <th scope="col">Address</th>
                                                <th scope="col">Status</th>
                                                <th><a class="card-link" data-toggle="collapse" href="#orders"> More Details
                                                    <i class="fa fa-angle-down" style={{ fontSize: "25px" }}  ></i></a>
                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>





                                            <OrderList />


                                        </tbody>

                                    </table>
                                    {/* <!-- </center>  --> */}
                                </div>
                                <div id="orders" class="collapse hide" data-parent="#accordion">
                                    <div class="card-body">
                                        {/* <!-- <center> --> */}
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col" class="head">S.No</th>
                                                    <th scope="col" class="head">Product
                                                    </th>
                                                    <th scope="col" class="head">Name</th>
                                                    <th scope="col" class="head">Quantity
                                                    </th>
                                                    <th scope="col" class="head">Price</th>
                                                    <th scope="col" class="head">Cost</th>
                                                </tr>
                                            </thead>
                                            <tbody>


                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td class="image-box"><img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1665828324/ggp_ut1tsz.jpg" class="image1" /></td>
                                                    <div class="info">
                                                        <td>
                                                            <h6>
                                                                Gol Gappe
                                                            </h6>
                                                        </td>
                                                        <td>
                                                            <div class="count">
                                                                2
                                                            </div>
                                                        </td>
                                                        <td>
                                                            500
                                                        </td>
                                                        <td>
                                                            <div>
                                                                1000
                                                            </div>
                                                        </td>
                                                    </div>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td class="image-box"><img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1665828324/ggp_ut1tsz.jpg" class="image1" /></td>
                                                    <div class="info">
                                                        <td>
                                                            <h6>
                                                                Gol Gappe
                                                            </h6>
                                                        </td>
                                                        <td>
                                                            <div class="count">
                                                                2
                                                            </div>
                                                        </td>
                                                        <td>
                                                            500
                                                        </td>
                                                        <td>
                                                            <div>
                                                                1000
                                                            </div>
                                                        </td>
                                                    </div>

                                                </tr>
                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td class="image-box"><img src="https://res.cloudinary.com/dm5krjksw/image/upload/v1665828324/ggp_ut1tsz.jpg" class="image1" /></td>
                                                    <div class="info">
                                                        <td>
                                                            <h6>
                                                                Gol Gappe
                                                            </h6>
                                                        </td>
                                                        <td>
                                                            <div class="count">
                                                                2
                                                            </div>
                                                        </td>
                                                        <td>
                                                            500
                                                        </td>
                                                        <td>
                                                            <div>
                                                                1000
                                                            </div>
                                                        </td>
                                                    </div>

                                                </tr>


                                            </tbody>
                                        </table>
                                        {/* <!-- </center>  --> */}

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

        </>
    );
};

export default Orderlayout(Order);