import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/esm/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addFood, getFood } from '../../../redux/reducers/food/food.action';
import DishList from '../../components/Dish/DishList'
import Modals from "../../components/Modal/AddDish.modal"
// import "./dish.css"
const DishEditpage = () => {
    // https://res.cloudinary.com/dm5krjksw/image/upload/v1667646844/dish/ggp_quhark.jpg
    // const [dishData, setDishData] = useState({
    //     name: "",
    //     description: "",
    //     isVeg: "",
    //     category: "",
    //     photos: "",
    //     price: "",



    // });

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    // const handleChange = (e) => {
    //     setDishData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    // };

    const dispatch = useDispatch();




    // const closeModal = () => {
    // setIsOpen(false);
    // };

    // useEffect(() => {
    //     dispatch(getFood());
    // }, []);


    // const submit = async () => {
    //     await dispatch(addFood(dishData));

    //     closeModal();
    //     setDishData({
    //         name: "",
    //         description: "",
    //         isVeg: "",
    //         category: "",
    //         photos: "",
    //         price: "",
    //     });
    // };


    // const foodList = useSelector((globalState) => globalState.food.foods)

    // const userData = Object.values(userList);
    return (
        <>


            <h2 class="text-8xl text-center pb-12 pt-3">Dish Details</h2>
            <div class="text-center pb-5 " >
                <Button variant="primary" style={{ background: "rgb(124 58 237)" }} onClick={handleShow}> ADD DISH </Button>
            </div>
            <div class="container display-block shadow-lg rounded-3xl ">

                <div class="card">


                    <div class="card-body">
                        <DishList />


                    </div>
                </div >
            </div >

            <br /><br />

            {/* <!-- <a href="#deleteModal" class="trigger-btn" data-toggle="modal"> --> */}

            <div class="float-end">
                <a href="/home" class="button glow-button">Back To Home</a>
            </div>
            <br /><br /><br />


            <Modals show={show} onHide={handleClose} />

            {/* <!-- <h1>..</h1> --></br> */}
        </>
    )
}

export default DishEditpage