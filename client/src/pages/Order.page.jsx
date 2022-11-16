import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import OrderList from "../components/Order/OrderList";
import OrderContainer from "../components/Order/OrderTable";
import Orderlayout from "../layouts/Order.layout";

import cx from "classnames"
import orderCss from "../assets/styles/order.module.css"
// Layout

import { getOrder } from "../redux/reducers/order/order.action";
import { getAllUser } from "../redux/reducers/user/user.action";

import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';




const Order = () => {
    const [open, setOpen] = useState(false);
    const user = useSelector((globalState) => globalState.user);

    const orderList = useSelector((globalState) => globalState.order.orders) || {};

    // const orderData = Object.values(orderList)





    // console.log(order.orders.orderDetails)
    // console.log(orderList)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrder());
        // dispatch(getAlhlUser());

    }, []);



    return (
        <>


            <div class={orderCss.body}>

                <br />
                {user?.fullName ? (

                    <div class={orderCss.container}>
                        <div class={orderCss.orderDetails}>Order Details</div>
                        <div id={orderCss.accordion}>


                            {/* <!-- <h1 style="font-size: xxx-large">NO ORDERS YET.</h1> --> */}



                            <div class={orderCss.card}>
                                <div class={orderCss.cardHeader}>
                                    {/* <!-- <center> --> */}
                                    <table class={orderCss.table1}>
                                        <thead>
                                            <tr>
                                                {/* <th scope="col">Bill No</th> */}
                                                <th  >TRX ID</th>
                                                <th >Total Amount</th>
                                                <th  >Date & Time</th>
                                                {/* <th >Address</th> */}
                                                <th  >Status</th>
                                                <th><Button class={orderCss.cardLink} onClick={() => setOpen(!open)} aria-controls="toggle-Orders" aria-expanded={open}> More Details

                                                </Button>

                                                </th>
                                            </tr>
                                        </thead>

                                        <tbody>



                                            <tr>
                                                <td>{orderList.orderDetails[0].razorpay_payment_id}</td>
                                                <td>{orderList.orderDetails[0].itemTotal}</td>
                                                <td>{orderList.createdAt}</td>
                                                <td>{orderList.orderDetails[0].status}</td>

                                                {/* <OrderList /> */}

                                            </tr>
                                        </tbody>

                                    </table>
                                    {/* <!-- </center>  --> */}
                                </div>



                                {/* <Collapse in={open}> */}



                                <div id="toggle-Orders"  >
                                    <div class={orderCss.cardBody}>
                                        {/* <!-- <center> --> */}
                                        <table class={orderCss.table}>
                                            <thead>
                                                <tr>
                                                    <th scope="col" class={orderCss.head}>S.No</th>
                                                    <th scope="col" class={orderCss.head}>Product
                                                    </th>
                                                    <th scope="col" class={orderCss.head}>Name</th>
                                                    <th scope="col" class={orderCss.head}>Quantity
                                                    </th>
                                                    {/* <th scope="col" class={orderCss.head}>Price</th>
                                                    <th scope="col" class={orderCss.head}>Cost</th> */}
                                                </tr>
                                            </thead>
                                            <tbody>


                                                <tr>
                                                    <td>
                                                        1
                                                    </td>
                                                    <td class={orderCss.image1}><img src={orderList.orderDetails[0].food[0].image} class="image1" /></td>
                                                    {/* <div class="info"> */}
                                                    <td>

                                                        {orderList.orderDetails[0].food[0].name}

                                                    </td>
                                                    <td class={orderCss.count}>

                                                        {orderList.orderDetails[0].food[0].quantity}

                                                    </td>

                                                    {/* </div> */}

                                                </tr>




                                            </tbody>
                                        </table>
                                        {/* <!-- </center>  --> */}

                                    </div>
                                </div>
                                {/* </Collapse> */}
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