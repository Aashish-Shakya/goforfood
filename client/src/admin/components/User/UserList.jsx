import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import UserTable from './UserTable';

const UserList = (props) => {
    const [userList, setUserList] = useState([]);

    const reduxState = useSelector((globalState) => globalState.user.userList);

    useEffect(() => {
        reduxState && setUserList(reduxState)
    }, [reduxState])
    // console.log(reduxState)

    return (
        <>
            <Table rounded-border rounded-end hover >
                <thead>
                    <tr muted>

                        <th>Username</th>

                        <th >Email Id</th>
                        <th >Role</th>

                        <th >User ID</th>
                        <th >Action</th>
                        {/* <th >Action</th> */}

                    </tr>
                </thead>
                <tbody>

                    {userList.map((item) => (
                        <UserTable {...item} />

                    ))}



                </tbody>
            </Table>



        </>
    )
}

export default UserList








