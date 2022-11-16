import React from "react";
import { BsTrashFill } from "react-icons/bs";

import cx from "classnames"
import cartCss from "../../assets/styles/cart.module.css"
// redux
import { useDispatch } from "react-redux";
import {
    deleteCart,
    incrementQuantity,
    decrementQuantity,
} from "../../redux/reducers/cart/cart.action";

const CartContainer = (props) => {
    const dispatch = useDispatch();

    const deleteFoodFromCart = () => dispatch(deleteCart(props._id));

    const increment = () => dispatch(incrementQuantity(props._id));

    const decrement = () => {
        if (props.quantity === 1) return;
        dispatch(decrementQuantity(props._id));
    };
    // console.log(props.items)

    return (
        <>



            <tr>
                <td class={cartCss.imagebox}><img src={props.photos} style={{ height: "120px" }} /></td>
                <td class={cartCss.about}>
                    <h1 class={cartCss.title}> {props.name}
                    </h1>
                </td>
                <td class={cartCss.counter} >
                    <button class={cartCss.btn} onClick={decrement}>-</button>
                    <div class={cartCss.count}>{props.quantity}
                    </div>
                    <button class={cartCss.btn} onClick={increment}>+</button>
                </td>
                <td class={cartCss.unitprice}>{props.price}
                </td>
                <td class={cartCss.prices}>
                    <div class={cartCss.amount}>
                        {parseInt(props.price) * parseInt(props.quantity)}
                    </div>
                </td>
                <td >
                    <div class={cartCss.remove} onClick={deleteFoodFromCart} ><BsTrashFill /></div>
                </td>
            </tr>

        </>
    )
}

export default CartContainer