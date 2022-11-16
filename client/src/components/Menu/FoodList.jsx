import React, { useState, useEffect } from 'react'
import MenuCard from './MenuCard';
// redux
import DishEdit from "../../admin/pages/Dishes/DishEdit.page"
import { useSelector } from "react-redux";

const FoodList = (props) => {

    const [foodList, setFoodList] = useState([]);

    const reduxState = useSelector((globalState) => globalState.food.foods)

    useEffect(() => {
        reduxState && setFoodList(reduxState)
    }, [reduxState])
    console.log(reduxState)
    return (
        <>
            <div class="container"  >
                {/* <!-- Need to add chalk font in dish category --> */}
                {/* <div class="menu--category" id="category">
                    <span>  Indian</span>
                </div> */}

                <div class="menu--card-container grid grid-cols-4 gap-4">

                    {foodList.map((food) => (

                        <MenuCard {...food} key={food._id} />

                    ))}



                </div>

            </div>

        </>
    )
}

export default FoodList