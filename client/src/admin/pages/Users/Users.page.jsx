import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUser, getMySelf, deleteUser } from '../../../redux/reducers/user/user.action';
import cx from "classnames"

// import userCSS from "../../assets/styles/user.module.css"
// ../../assets / styles / signIn.module.css
// import "../../assets/styles/user.module.css"
import "./users.css"
import UserTable from '../../components/User/UserTable';
import UserList from '../../components/User/UserList';


//bootstrap
import Table from 'react-bootstrap/Table';

const Userspage = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllUser());
    }, []);

    const userList = useSelector((globalState) => globalState.user.userList) || {};

    const userData = Object.values(userList);

    return (
        <>


            {/* <br /><br /><span class={cx(signUpCss.dot, signUpCss.three)}></span> */}
            <h2 class="OD">User Details </h2>

            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <UserList />
                    </div>
                </div>
            </div>
            <br /><br />
            <div class="float-end">
                <a href="/home" class="button glow-button">Back To Home</a>
            </div>
            <br /><br /><br /><br />

        </>
    )
}

export default Userspage

