import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';

import DishTable from './DishTable';


const DishList = (props) => {
    const [foodList, setFoodList] = useState([]);

    const reduxState = useSelector((globalState) => globalState.food.foods)

    useEffect(() => {
        reduxState && setFoodList(reduxState)
    }, [reduxState])
    console.log(reduxState)

    return (
        <>
            <Table rounded-border rounded-end hover >
                <thead class="thead">
                    <tr class="text-muted display-6">
                        <th scope="col" class="head">S.No</th>
                        <th scope="col" class="head">Category</th>
                        <th scope="col" class="head">Product</th>
                        <th scope="col" class="head">Name</th>
                        <th scope="col" class="head">Price</th>
                        {/* <th scope="col" class="head">Discount</th>
                        <th scope="col" class="head">Cost</th> */}
                        <th scope="col" class="head">Action</th>
                    </tr>
                </thead>
                <tbody>

                    {foodList.map((item) => (
                        <DishTable {...item} />
                    ))}



                </tbody>
            </Table>



        </>
    )
}

export default DishList




