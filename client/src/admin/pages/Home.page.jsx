import React, { useEffect, useState } from "react";

import AdminNavbar from '../components/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';

import teams from "../assets/images/team.png"
import order from "../assets/images/order.png"
import dish from "../assets/images/dish.png"

import Footer from "../components/Footer"
import Button from "react-bootstrap/esm/Button";
import addDishModals from '../components/Modal/AddDish.modal';

import "../assets/styles/adminHome.css"
// Layout
import HomeLayout from "../layouts/Homepage.layout";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllUser } from "../../redux/reducers/user/user.action";
import UserList from "../components/User/UserList";
import { getAllOrder, getOrder } from "../../redux/reducers/order/order.action";
import { getFood } from "../../redux/reducers/food/food.action";

const Home = () => {




    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser());
        dispatch(getAllOrder());
        dispatch(getFood());

    }, []);

    const userList = useSelector((globalState) => globalState.user.userList) || {};

    // const orderList = useSelector((globalState) => globalState.order);
    const orderList = useSelector((globalState) => globalState.order.orderList) || {};

    const dishList = useSelector((globalState) => globalState.food.foods) || {}
    console.log(dishList)


    // console.log(orderList)
    // console.log(user)




    return (


        <>


            <AdminNavbar />
            <br />
            <h5 className="display-4 text-center pt-10 mb-2">WELCOME TO ADMIN DASHBOARD</h5>

            <Container>
                <Container>
                    <Row classNameName='mt-5'>
                        <Col md={4}>
                            <Link to="/users" className="text-decoration-none"> <Card >
                                <Card.Body className="text-center">
                                    <div className="tilter">
                                        <div className="container">
                                            <Card.Img className="img-fluid" variant="top" src={teams} />


                                            {/* <img className="img-fluid" src=" " alt="" /> */}

                                        </div>
                                        <p className="text-dark display-4"> {userList.length}</p>
                                        <p className="display-4 text-muted">USERS</p>
                                    </div>
                                </Card.Body>




                            </Card></Link>

                        </Col>
                        <Col md={4}>
                            <Link to="/dishes" className="text-decoration-none"> <Card >
                                {/* <Card onClick={handleShow} > */}
                                <Card.Body className="text-center">
                                    <div className="tilter">
                                        <div className="container">
                                            <Card.Img className="img-fluid" variant="top" src={dish} />


                                            {/* <img className="img-fluid" src=" " alt="" /> */}

                                        </div>
                                        <p className="text-dark display-4">{dishList.length}</p>
                                        <p className="display-4 text-muted">Dishes</p>
                                    </div>
                                </Card.Body>




                            </Card></Link>

                        </Col>
                        <Col md={4}>
                            <Link to="/orders" className="text-decoration-none">
                                <Card  >
                                    <Card.Body className="text-center">
                                        <div className="tilter">
                                            <div className="container">
                                                <Card.Img className="img-fluid" variant="top" src={order} />


                                                {/* <img className="img-fluid" src=" " alt="" /> */}

                                            </div>
                                            <p className="text-dark display-4">{orderList.length}</p>
                                            <p className="display-4 text-muted">Orders</p>
                                        </div>
                                    </Card.Body>




                                </Card>
                            </Link>

                        </Col>
                    </Row>

                </Container>
            </Container>
            {/* <Footer /> */}
        </>
    );
};



// export default HomeLayout(Home);
export default Home;