import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const AdminNavbar = () => {

    return (
        <>

            <Navbar variant="dark" expand="lg" className='custom-bg'>
                <Container fluid>
                    <Navbar.Brand href="#" className='mx-4'>ADMIN_PORTAL</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto mx-5 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ color: "white" }} href="#action1">G4FOOD</Nav.Link>
                            <Nav.Link style={{ color: "white" }} href="#action2">Home</Nav.Link>


                        </Nav>
                        <Nav.Link style={{ color: "white" }} href="#action1">LOGOUT</Nav.Link>

                    </Navbar.Collapse>
                </Container>
            </Navbar>





        </>
    )
}

export default AdminNavbar