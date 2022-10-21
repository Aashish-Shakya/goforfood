import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const addDishModals = (props) => {

    const { addshow, addhandleClose, addhandleShow } = props;
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

    return (
        <>


            <Modal
                show={addshow}
                onHide={addhandleClose}
                backdrop="static"
                keyboard={false}

                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>Choose option</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="dish-btn">

                        <Button variant="primary" >Add</Button>

                        <Link to="/dishes">
                            <Button variant="primary">Edit</Button>

                        </Link>
                        <Link to="/"  >
                            <Button variant="primary">View</Button>
                        </Link>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={addhandleClose}>
                        Close
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>
            z
        </>
    );


}

export default addDishModals