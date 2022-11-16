import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import InputGroup from 'react-bootstrap/InputGroup';
import { useDispatch } from 'react-redux';
import { addFood, getFood } from '../../../redux/reducers/food/food.action';

const AddDishModals = (props) => {
    const [dishData, setDishData] = useState({
        name: "", description: "", isVeg: "", category: "", photos: "", price: ""
    });


    // var dishData = {}
    const handleChange = (e) => {
        setDishData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };
    const { show, handleClose, handleShow } = props;



    const closeModal = () => {
        // setShow(true);
    };
    const dispatch = useDispatch();

    const submit = async () => {
        closeModal();
        await dispatch(addFood(dishData));
        window.location.reload(false)
    };
    useEffect(() => {
        dispatch(getFood())
    })
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
                    <Modal.Title>Please Fill All Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form>
                        {/* <FloatingLabel
                            controlId="floatingInput"
                            label="Email address"
                            className="mb-3"
                        >
                            <Form.Control type="email" placeholder="name@example.com" />
                        </FloatingLabel> */}
                        {/* <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                id="email"
                                placeholder="email@gmail.com"
                                autoFocus
                                defaultValue={props.userEmail}
                                onChange={handleChange}
                            /> */}
                        <FloatingLabel

                            label="Dish Name"
                            className="mb-3"
                        >
                            <Form.Control type="name"
                                id="name"

                                autoFocus

                                onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel

                            label="Description"
                            className="mb-3"
                        >
                            <Form.Control type="description" id="description" onChange={handleChange} />
                        </FloatingLabel>
                        <div class="flex gap-2 mb-3 border p-2 rounded-lg">
                            <Form.Label >Is Veg :</Form.Label>

                            <Form.Check
                                type="radio"
                                label="true"
                                name="true"
                                id="isVeg"
                                aria-label="radio 1"
                                onChange={handleChange}

                                value="true"
                            />
                            <Form.Check
                                type="radio"
                                label="false"
                                name="false"
                                id="isVeg"
                                aria-label="radio 2"
                                onChange={handleChange}

                                value="false"
                            />

                        </div>
                        <FloatingLabel

                            label="Category"
                            className="mb-3"
                        >
                            <Form.Control type="category" id="category" onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel

                            label="Image Url"
                            className="mb-3"
                        >
                            <Form.Control type="text" id="photos" onChange={handleChange} />
                        </FloatingLabel>
                        <FloatingLabel

                            label="Price"
                            className="mb-3"
                        >
                            <Form.Control type="number" id="price" placeholder=" 123" onChange={handleChange} />
                        </FloatingLabel>

                        {/* <InputGroup className="mb-3  text-sm">
                            <InputGroup.Text >Price: ₹</InputGroup.Text>

                            <Form.Control aria-label="Amount (to the nearest INR)" clas="w-1/2" />
                            <InputGroup.Text>.00</InputGroup.Text>

                        </InputGroup> */}





                        {/* <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Dish Name</Form.Label>
                            <Form.Control
                                type="name"
                                placeholder="name"
                                autoFocus
                            />
                        </Form.Group> */}

                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary" onClick={submit}>
                        Submit
                    </Button>
                    {/* <Button variant="primary">Understood</Button> */}
                </Modal.Footer>
            </Modal>

        </>
    );


}

export default AddDishModals