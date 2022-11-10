import React, { useState } from "react";
import Modals from "../components/Modal/Dish.modal"
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
import addDishModals from '../components/Modal/addDish.modal';

// Layout
import HomeLayout from "../layouts/Homepage.layout";
import { Link } from "react-router-dom";

const Home = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);



    return (


        <>


            <AdminNavbar />

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
                                        <p className="text-dark display-4">12</p>
                                        <p className="display-4 text-muted">USERS</p>
                                    </div>
                                </Card.Body>




                            </Card></Link>

                        </Col>
                        <Col md={4}>

                            <Card onClick={handleShow} >
                                <Card.Body className="text-center">
                                    <div className="tilter">
                                        <div className="container">
                                            <Card.Img className="img-fluid" variant="top" src={dish} />


                                            {/* <img className="img-fluid" src=" " alt="" /> */}

                                        </div>
                                        <p className="text display-4">12</p>
                                        <p className="display-4 text-muted">Dishes</p>
                                    </div>
                                </Card.Body>




                            </Card>

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
                                            <p className="text-dark display-4">12</p>
                                            <p className="display-4 text-muted">Orders</p>
                                        </div>
                                    </Card.Body>




                                </Card>
                            </Link>

                        </Col>
                    </Row>

                </Container>
            </Container>

            <Modals show={show} handleClose={handleClose} handleShow={handleShow} />
        </>
    );
};



// export default HomeLayout(Home);
export default Home;