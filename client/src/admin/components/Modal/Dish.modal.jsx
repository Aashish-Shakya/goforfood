import React, { useState } from 'react'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import addDishModals from './AddDish.modal';

const Modals = (props) => {

  const { show, handleClose, handleShow } = props;

  return (
    <>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}

        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Choose option</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div class="dish-btn">

            <Button variant="primary" style={{ background: "rgb(124 58 237)" }} onClick={handleShow} >Add</Button>

            <Link to="/dishes">
              <Button variant="primary" style={{ background: "rgb(124 58 237)" }} >View</Button>

            </Link>
            {/* <Link to="/menu" >
              <Button variant="primary" style={{ background: "rgb(124 58 237)" }} >View</Button>
            </Link> */}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{ background: "rgb(113 113 122)" }} onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary">Understood</Button> */}
        </Modal.Footer>
      </Modal>


    </>
  );


}

export default Modals