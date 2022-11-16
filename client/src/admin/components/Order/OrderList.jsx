import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import OrderTable from './OrderTable';
import Table from 'react-bootstrap/Table';

const OrderList = () => {
    const [orderList, setOrderList] = useState([]);

    const reduxState = useSelector((globalState) => globalState.order.orderList);

    useEffect(() => {
        reduxState && setOrderList(reduxState)
    }, [reduxState])

    return (
        <>
            <Table rounded-border rounded-end hover >
                <thead class="thead">
                    <tr class="text-muted h6">

                        <th scope="col" class="head">BILL_NO</th>
                        <th scope="col" class="head">USERID</th>
                        <th scope="col" class="head">Dish Name</th>
                        <th scope="col" class="head">Dish Image</th>
                        <th scope="col" class="head">Total </th>
                        {/* <th scope="col" class="head">ADDRESS</th> */}
                        {/* <th scope="col" class="head">TRANSACTION_ID</th> */}
                        <th scope="col" class="head">STATUS</th>

                    </tr>
                </thead>
                <tbody>

                    {orderList.map((item) => (
                        <OrderTable {...item} />

                    ))}



                </tbody>
            </Table>
        </>
    )
}

export default OrderList



