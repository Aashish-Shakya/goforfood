import React, { useState, useEffect } from "react";

import menuIcon from "../../assets/images/menu_2.png"
import menuCss from "../../assets/styles/menu.css"

// redux
import { useDispatch, useSelector } from "react-redux";


import { addToCart } from '../../redux/reducers/cart/cart.action';
import { getSpecificFood } from "../../redux/reducers/food/food.action";

const MenuCard = (props) => {
    const [food, setFood] = useState({});
    const dispatch = useDispatch();
    const cart = useSelector((globalState) => globalState.cart.cart)


    // const reduxState = useSelector((globalState) => globalState.food.foods)

    // useEffect(() => {
    //     reduxState && setFood(reduxState)
    // }, [reduxState])

    useEffect(() => {
        dispatch(getSpecificFood(props._id))
            .then((data) => {
                setFood(data.payload.food);
                return data.payload.food;

            })
            .then((data) => {
                cart.forEach((each) => {
                    if (each._id === data._id) {
                        setFood((prev) => ({ ...prev, isAddedToCart: true }));
                    }
                });
            });
    }, [cart]);


    const addFoodToCart = () => {
        dispatch(addToCart({ ...food, quantity: 1, totalPrice: food.price }));
        setFood((prev) => ({ ...prev, isAddedToCart: true }));

    }

    return (
        <>





            <div class="menu--card">
                <div class="card--imgbx"><img src=
                    {props.photos} alt="menu-item" class="menu--item-image" />
                </div>
                <div class="contentBx">
                    <h2 class="menu--item-title">{props.name}</h2>
                    <h3 class="menu--item-price">Price:{props.price}/-</h3>
                    <button disabled={food?.isAddedToCart}
                        onClick={addFoodToCart}>
                        {food.isAddedToCart ? ("Added") : ("Add")}


                    </button>
                </div>
            </div>

        </>
    )
}

export default MenuCard
