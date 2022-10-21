import React from 'react'
import "./order.css"

const Orderspage = () => {
    return (
        <>

            <br /><br />
            <h2 class="OD">OrderDetails</h2>
            <br /><br />
            {/* <!-- <h1>Total Order{{this.countOrder}}</h1> --> */}
            <div class="container">

                <div class="card">


                    <div class="card-body">

                        <table class="table sticky table-hover">
                            <thead class="thead">
                                <tr class="text-muted h3">
                                    <th scope="col" class="head">S.No</th>
                                    <th scope="col" class="head">BILL_NO</th>
                                    <th scope="col" class="head">USERNAME</th>
                                    <th scope="col" class="head">TOTAL_AMOUNT</th>
                                    <th scope="col" class="head">ADDRESS</th>
                                    <th scope="col" class="head">TRANSACTION_ID</th>
                                    <th scope="col" class="head">STATUS</th>

                                </tr>
                            </thead>

                            <tbody>

                                {/* 
                    <!-- {{billList}} -->
                    <!-- <button (click)="demo()">Test</button> --> */}
                                <tr class="text-black h4">

                                    <td>1</td>

                                    <td>12435346</td>

                                    <td>Aash</td>

                                    <td>2000</td>

                                    <td>New Delhi</td>

                                    <td>234rt5gfdsq12345</td>


                                    <td>Completed</td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

            <br /><br />

            {/* // <!-- <a href="#deleteModal" class="trigger-btn" data-toggle="modal"> --> */}




            <div class="float-end">
                <a href="/home" class="button glow-button">Back To Home</a>
            </div>
            <br /><br /><br />
            {/* // <!-- <h1>..</h1> --></br> */}
        </>
    )
}

export default Orderspage