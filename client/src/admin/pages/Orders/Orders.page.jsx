import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../../../redux/reducers/order/order.action';
import OrderList from '../../components/Order/OrderList'
// import "./order.css"

const Orderspage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllOrder());
    }, []);

    const orderList = useSelector((globalState) => globalState.order.orderList) || {};

    // const userData = Object.values(userList);
    return (
        <>


            <h2 class="text-8xl text-center pb-12 pt-4">Order Details</h2>

            <div class="container display-block shadow-lg rounded-3xl ">

                <div class="card">


                    <div class="card-body">

                        <OrderList />

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