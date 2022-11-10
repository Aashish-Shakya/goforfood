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

            <div className="grid gap-0 md:gap-2 md:grid-cols-2 grid-cols-1 lg:grid-cols-3">
                {foodList.map((food) => (
                    <MenuCard {...food} key={food._id} />

                ))}
            </div>
        </>
    )
}

export default FoodList