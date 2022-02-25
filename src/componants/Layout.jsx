
import React from "react";
import './css/Layout.css'
import User from "./User";
import UserForm from './UserForm'
import FatchAPI from './FatchAPI';
import UserProfile from "./UserProfile";
import HelpL from "./Namereset";

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';



let Layout = () => {

    


    return (
        <>
            <div className="row" id="wrapper">
                <div className="col-2 border-end bg-white" id="sidebar-wrapper">
                    <div className="sidebar-heading border-bottom bg-light"><h2>Start Bootstrap</h2></div>
                    <div className="list-group list-group-flush">
                        <Link to='userprofile/' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">User profile</Link>
                        <Link to='userprofileform/' className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Add user</Link>
                        <Link to='allusers/' className="list-group-item list-group-item-action list-group-item-light p-3" href="userprofileform/">Dashboard</Link>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Projects</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Members</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Trainee</a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">Login </a>
                    </div>
                </div>
                <div className="col-8">
                    {/* <FatchAPI /> */}
                    <Routes>
                        <Route path='/allusers/' element={<FatchAPI />} />
                        <Route path='/allusers/:id' element={<FatchAPI />} />
                        <Route path='/userprofileform/' element={<User />} />
                        <Route path='/userprofileform/:id' element={<User />} />
                        <Route path='/userprofile/' element={<UserProfile />} />
                        <Route path='/help/' element={<HelpL />} />
                    </Routes>

                    
                </div>
            </div>


        </>
    )

}



export default Layout;