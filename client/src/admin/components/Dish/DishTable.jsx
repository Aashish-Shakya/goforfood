import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteFood } from '../../../redux/reducers/food/food.action';

const DishTable = (props) => {
    //   {props.forEach(element => {
    //     count = count+1
    //   });}

    const dispatch = useDispatch();
    const deleteOneDish = () => dispatch(deleteFood(props._id), window.location.reload(false));
    return (
        <>
            <tr class="text-black">


                <td>{props.category}</td>
                <td class="image-box"><img src={props.photos} class="image1" /></td>
                <td> {props.name}</td>
                <td> {props.price} </td>
                <td colSpan={2}>
                    <i class="fa-solid fa-trash-can text-2xl text-red-600" onClick={deleteOneDish}  ></i>
                    {/* <i class=" icon fa-solid fa-pen text-2xl" ></i> */}
                </td>
            </tr>

        </>
    )
}

export default DishTable