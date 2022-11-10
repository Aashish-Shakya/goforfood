import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const OrderTable = (props) => {
  const orderList = useSelector((globalState) => globalState.order.orders) || {};
  // const [user, setUser] = useState({});
  // const dispatch = useDispatch();
  // const userList = useSelector((globalState) => globalState.user.userList) || {};
  console.log(props.paymentDetails.itemTotal)
  console.log(props.food)
  return (
    <>





      <tr className='h5'>

        {/* <td>{props._id}</td> */}
        <td>{props.status}</td>
        {/* <td>{props.paymode}</td> */}
        {/* <td>{props.paymentDetails.food.details}</td> */}


      </tr>



    </>
  )
}

export default OrderTable