import React from "react";
import { BsTrashFill } from "react-icons/bs";

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
    console.log(props.items)

    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Product</th>
                        <th scope="col">Name</th>
                        <th scope="col">Quantity</th>
                        <th scope="col">Price</th>
                        <th scope="col">Cost</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td class="image-box"><img src={props.photos} style={{ height: "120px" }} /></td>
                        <td class="about">
                            <h1 class="title"> {props.name}
                            </h1>
                        </td>
                        <td class="counter">
                            <button class="btn" onClick={decrement}>-</button>
                            <div class="count">{props.quantity}
                            </div>
                            <button class="btn" onClick={increment}>+</button>
                        </td>
                        <td class="unit_price">{props.price}
                        </td>
                        <td class="prices">
                            <div class="amount">
                                {parseInt(props.price) * parseInt(props.quantity)}
                            </div>
                        </td>
                        <td>
                            <div class="remove" onClick={deleteFoodFromCart}><u>Remove</u></div>
                        </td>
                    </tr>
                </tbody>
            </table>

        </>
    )
}

export default CartContainer