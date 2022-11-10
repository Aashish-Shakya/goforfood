import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { editUser, getUser } from '../../../redux/reducers/user/user.action';

const UserContainer = (props) => {
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);



    const [userData, setUserData] = useState({
        _id: `${props.userId}`,
        email: "",
        phoneNumber: "",
        fullName: "",
        address: "",
    });

    const handleChange = (e) => {
        setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const dispatch = useDispatch();
    // const closeModal = () => {
    //     { () => { handleClose } }
    // };
    console.log(userData)
    const submit = async () => {
        await dispatch(editUser(userData, userData._id));
        // closeModal()
        // props.onHide,
        setUserData({ fullName: "", email: "", phoneNumber: "", address: "" });
    };


    useEffect(() => {
        dispatch(getUser(props.userId))
    })
    // const userList = useSelector((globalState) => globalState.user.userList) || {};

    return (

        <>
            {/* <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button> */}

            <Modal show={props.show} onHide={props.onHide}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <span  >FullName</span>
                        <input type="text" id="fullName" name="fname" value={userData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required />

                        <Form.Group className="mb-3" controlId="fullName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                name="fname"

                                placeholder="Name"
                                value={userData.fullName}
                                autoFocus
                                onChange={handleChange}
                            />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                // value={props.userId}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Role</Form.Label>
                            <Form.Control
                                type="email"
                                // value={props.userRole}
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onHide}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={submit} >
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );

}

export default UserContainer




