import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import userCss from "../../assets/styles/user.module.css"

import { BsPencilFill, BsEyeFill, BsEyeSlashFill, BsFillTrashFill } from "react-icons/bs";
import { deleteUser } from '../../../redux/reducers/user/user.action';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import UserModal from "./UserContainer"



const UserTable = (props) => {

  // const [user, setUser] = useState({});
  // const dispatch = useDispatch();
  // const userList = useSelector((globalState) => globalState.user.userList) || {};
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const deleteOneUser = () => dispatch(deleteUser(props._id), window.location.reload(false));
  return (
    <>

      <tr>
        <td>{props.fullName}</td>
        <td>{props.email}</td>
        <td>{props.role}</td>
        <td>{props._id}</td>
        <td colSpan={2} class="flex flex-row gap-2 justify-center text-2xl text-blue-600" ><BsPencilFill onClick={handleShow} />   <BsFillTrashFill onClick={deleteOneUser} /> </td>
        <td></td>

      </tr>
      {/* <table>
        <thead><th>1</th></thead>

      </table> */}


      <UserModal show={show} onHide={handleClose} userId={props._id} userName={props.fullName} userRole={props.role} userEmail={props.email} />
    </>
  )
}

export default UserTable





