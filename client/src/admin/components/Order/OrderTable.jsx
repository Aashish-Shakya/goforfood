import React from 'react'

const OrderTable = (props) => {
    // console.log(props.orderDetails[0].paymentDetails)
    return (
        <>
            <tr class="text-black h6">



                <td>{props.orderDetails[0].razorpay_payment_id}</td>
                {/* <td>{props._id}</td> */}

                <td>{props.user}</td>

                <td><img src={props.orderDetails[0].food[0].image} alt="dish" class="image1" /></td>
                <td>{props.orderDetails[0].food[0].name}</td>
                <td>{props.orderDetails[0].itemTotal}</td>
                <td>{props.orderDetails[0].status}</td>

                {/* <td>{props.status}</td>

                <td>{props.paymode}</td> */}


                {/* <td>Completed</td> */}

            </tr>
        </>
    )
}

export default OrderTable