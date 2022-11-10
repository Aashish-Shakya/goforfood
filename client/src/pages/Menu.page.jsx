import React, { useEffect, useState } from 'react'
import MenupageLayout from '../layouts/Menupage.layout';


// redux
import { useDispatch, useSelector } from "react-redux";
import { getFood } from "../redux/reducers/food/food.action";




const Menupage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getFood());
    }, []);


    return (
        <>

        </>
    )
}


export default MenupageLayout(Menupage)