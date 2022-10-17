import React from 'react'
// import "../styles/order.css"

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import FoodTab from "../components/FoodTab";



const Orderlayout = (Component) =>
    ({ ...props }) => {

        const user = {
            fullName: "Aditya",
        };

        return (

            <>

                <Navbar />




                <br />
                <div class="body">
                    {user?.fullName ? (
                        <div class="container">
                            <h2 class="order-details">Order Details</h2>
                            <div id="accordion">
                                {/* <!-- <h1 class="display-1" style="color: red">
                                <p style="font-size: xxx-large"> Please Log in first!</p>
                            </h1> --> */}

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
                                            <tr>
                                                <td>
                                                    1223433
                                                </td>
                                                <td>
                                                    ds562336y3
                                                </td>
                                                <td>
                                                    1000
                                                </td>
                                                <td>
                                                    09/09/2022
                                                </td>
                                                <td class="address">
                                                    B-60 Vikas Nagar Delhi
                                                </td>
                                                <td>
                                                    Success
                                                </td>
                                                <td></td>
                                            </tr>
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
                                                        <td class="image-box"><img src="../images/ggp.jfif" class="image1" /></td>
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
                                                        <td class="image-box"><img src="../images/ggp.jfif" class="image1" /></td>
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
                                                        <td class="image-box"><img src="../images/ggp.jfif" class="image1" /></td>
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

                <Footer />
            </>
        )
    }

export default Orderlayout