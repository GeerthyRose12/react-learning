import React from "react"
// import Navbar from "../components/Navbar"

import { Link, Outlet } from "react-router-dom"



const Users = () =>{
    return (
        <div>
            {/* <Navbar /> */}
            <h1>Users</h1>
            <Link to="profile">
                Profile
            </Link>

            <Link to="settings">
                Settings
            </Link>


            <Outlet />
        </div>
    )
};

export default Users;