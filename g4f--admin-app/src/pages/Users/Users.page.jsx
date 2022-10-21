import React from 'react'

// It is also effecting our home page
// import "./users.css"

const Userspage = () => {
    return (
        <>
            <br /><br />
            <h2 class="OD">User Details</h2>
            <br /><br />
            <div class="container">
                <div class="card">
                    <div class="card-body">
                        <table class="table sticky table-hover">
                            <thead class="thead">
                                <tr class="text-muted h3 ">
                                    <th scope="col" class="head">S.NO</th>
                                    <th scope="col" class="head">Username</th>
                                    <th scope="col" class="head">First Name</th>
                                    <th scope="col" class="head">Last Name</th>
                                    <th scope="col" class="head">Mobile No</th>
                                    <th scope="col" class="head">Email Id</th>
                                    <th scope="col" class="head">Gender</th>
                                    <th scope="col" class="head">Address</th>
                                </tr>
                            </thead>
                            <tbody>




                                <tr class="h5">

                                    <td> 1 </td>
                                    <td> Aash</td>
                                    <td>Aashish </td>
                                    <td>Shakya </td>
                                    <td>1234567 </td>
                                    <td>xyz@gmail.com</td>
                                    {/* <!-- <td>{{ user.password }}</td> --> */}

                                    <td>Male</td>
                                    <td class="h6 adrs" style={{ width: "200px" }}>Uttam Nagar</td>

                                </tr>


                            </tbody>
                        </table>
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