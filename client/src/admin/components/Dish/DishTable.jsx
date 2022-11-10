import React from 'react'

const DishTable = (props) => {
    //   {props.forEach(element => {
    //     count = count+1
    //   });}

    return (
        <>
            <tr class="text-black">

                <td>{ }</td>
                <td>{props.category}</td>
                <td class="image-box"><img src={props.photos} class="image1" /></td>
                <td> {props.name}</td>
                <td> {props.price} </td>
                <td>
                    <i class="fa-solid fa-trash-can text-2xl"  ></i>
                    <i class=" icon fa-solid fa-pen text-2xl" ></i>
                </td>
            </tr>

        </>
    )
}

export default DishTable