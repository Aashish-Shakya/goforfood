import React from 'react'

const OrderTable = (props) => {
    console.log(props.orderDetails[0].paymentDetails)
    return (
        <>
            <tr class="text-black h6">



                <td>{props._id}</td>

                <td>{props.user}</td>

                {/* <td>{props.orderDetails[0}</td> */}

                <td>{props.status}</td>

                <td>{props.paymode}</td>


                {/* <td>Completed</td> */}

            </tr>
        </>
    )
}

export default OrderTable