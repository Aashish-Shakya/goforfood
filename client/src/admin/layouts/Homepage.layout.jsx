import React from "react";
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
const HomepageLayout =
  (Component) =>
    ({ ...props }) => {

      return (
        <>

          <AdminNavbar />
          <Container>
            <Container>
              <Row className='mt-5'>
                <Col md={4}>
                  <Card   >
                    <Card.Body class="text-center">
                      <div class="tilter">
                        <div class="container">
                          <Card.Img class="img-fluid" variant="top" src={teams} />


                          {/* <img class="img-fluid" src=" " alt="" /> */}

                        </div>
                        <p class="text display-4">12</p>
                        <p class="display-4 text-muted">USERS</p>
                      </div>
                    </Card.Body>




                  </Card>

                </Col>
                <Col md={4}>
                  <Card >
                    <Card.Body class="text-center">
                      <div class="tilter">
                        <div class="container">
                          <Card.Img class="img-fluid" variant="top" src={dish} />


                          {/* <img class="img-fluid" src=" " alt="" /> */}

                        </div>
                        <p class="text display-4">12</p>
                        <p class="display-4 text-muted">Dishes</p>
                      </div>
                    </Card.Body>




                  </Card>

                </Col>
                <Col md={4}>
                  <Card >
                    <Card.Body class="text-center">
                      <div class="tilter">
                        <div class="container">
                          <Card.Img class="img-fluid" variant="top" src={order} />


                          {/* <img class="img-fluid" src=" " alt="" /> */}

                        </div>
                        <p class="text display-4">12</p>
                        <p class="display-4 text-muted">Orders</p>
                      </div>
                    </Card.Body>




                  </Card>

                </Col>
              </Row>

            </Container>
          </Container>

          {/* <Modals show={show} handleClose={handleClose} handleShow={handleShow} /> */}

        </>
      );
    };

export default HomepageLayout;
