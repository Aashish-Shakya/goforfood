import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import UserList from '../../admin/components/User/UserList';
import { getOrder } from '../../redux/reducers/order/order.action';
import OrderTable from "./OrderTable"

const OrderList = (props) => {

    // const [orderList, setOrderList] = useState([]);

    const orderList = useSelector((globalState) => globalState.order.orders) || {};

    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setShow(true)
        }, 5000)

        return () => clearTimeout(timeout)

    }, [show])

    if (!show) return null
    var paymentDetails = Object.values(orderList)[3]



    // console.log(paymentDetails)



    // const myTimeout = setTimeout(myGreeting, 5000);


    // console.log(typeof (orderList))

    console.log(orderList)
    paymentDetails.forEach(order => {
        console.log(order.food)

    })

    // console.log(Object.values(orderList))
    // {
    //     orders?.length === 0 ? (window.location.reload()) : (
    //         console.log(orders || {})
    //     )


    // }
    // const orderData = Object.values(orderList)
    // console.log(orderData.map((item) => (console.log(item))))
    // const orders = useSelector((globalState) => globalState.order.orders.orderDetails) || {};

    // useEffect(() => {
    //     setOrderList(orders);

    // }, [orders])

    // {
    //     Object.keys(orderList)?.length === 0 ? (
    //         console.log(true)
    //     ) : (
    //         orderList.map((item) => {
    //             console.log("HJbzvd")
    //         })
    //     )
    // }


    // console.log(orderList[1].paymentDetails)
    // console.log(orderList.orderDetails.map((item) => { console.log(item) }) || {})
    // console.log(orderList.length === 0)
    {
        // orderList?.length === 0 ? (
        //     console.log("EMpty")
        // ) : (
        // <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">

        {/* {reduxState.map((item) => (
                    console.log(orderList) || {}
                )) || {}} */}
        //     </div>
        // )
    }
    return (

        <>{function myGreeting() {
            <div >
                {/* STill getting error on this page */}
                {orderList?.length === 0 ? (
                    console.log("EMpty")
                ) : (
                    <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                        {/* {orderList.map((item) => (
                        <OrderTable {...item} key={item._id} />
                    ))} */}
                    </div>
                )

                }
            </div>
        }}  </>

    )
}

export default OrderList




