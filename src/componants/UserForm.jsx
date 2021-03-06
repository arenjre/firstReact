import React, { useState } from "react";
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './UserForm.css'




let UserForm = (props) => {


    let [fname, setFName] = useState("")
    let [lname, setLName] = useState("")
    let [username, setUsername] = useState("")
    let [mobile, setMobile] = useState("")
    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let setFNameHandler = (event) => {
        setFName(event.target.value)
    }
    let setLNameHandler = (event) => {
        setLName(event.target.value)
    }
    let setUsernameHandler = (event) => {
        setUsername(event.target.value)
    }
    let setMobileHandler = (event) => {
        setMobile(event.target.value)
    }
    let setEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    let setPasswordHandler = (event) => {
        setPassword(event.target.value)
    }

    let formSubmit = (event) => {
        event.preventDefault();

        const usr = {
            first_name: fname,
            last_name: lname,
            username: username,
            mobile: mobile,
            email: email,
            password1: password,
            password2: password
        };
        props.usrData(usr);
        // props.UserForm(usr);

        console.log(usr)
        
        debugger
        setFName("")
        setLName("")
        setUsername("")
        setMobile("")
        setEmail("")
        setPassword("")
        
        // axios({
        //     method: 'post',
        //     url: `http://127.0.0.1:8006/server/caffer/user/`,
        //     data: usr
        // });
    }

    const params = useParams()
    const [users, setUsers] = useState([])


    // axios({
    //     method: 'post',
    //     url: '/user/12345',
    //     data: {
    //       firstName: 'Fred',
    //       lastName: 'Flintstone'
    //     }
    //   });

    // axios({
    //     method: 'post',
    //     url: `http://127.0.0.1:8006/server/caffer/user/`,
    //     data: usr
    //   });
    


    return (
        <div className="container-fluid mt-5">
            <div className="row">
                <div className="col-1"></div>
                <div className="col-11">
                    <form className="form-control userform" onSubmit={formSubmit}>
                        <div className="row">
                            <div className="col">
                                <label>First name</label>
                                <input type="text" required onChange={setFNameHandler} value={users.first_name} className="form-control" />
                            </div>
                            <div className="col">
                                <label>Last name</label>
                                <input type="text" onChange={setLNameHandler} value={users.last_name} className="form-control" />
                            </div>
                        </div>
                        <div>
                            <label>Username</label>
                            <input type="text" required onChange={setUsernameHandler} value={users.username} className="form-control" />
                        </div>
                        <div>
                            <label>Email address</label>
                            <input type="text" required onChange={setEmailHandler} value={users.email} className="form-control" />
                        </div>
                        <div>
                            <label>Mobile number</label>
                            <input type="number" required onChange={setMobileHandler} value={users.mobile} className="form-control" />
                        </div>
                        <div>
                            <label>Password</label>
                            <input type="password" required onChange={setPasswordHandler} value={users.password1} className="form-control" />
                        </div>
                        <div>
                            <label>Retype Password</label>
                            <input type="password" onChange={setPasswordHandler} value={users.password1} className="form-control" />
                        </div>
                        
                        <div>
                            <br />
                            <button className="submit" type="submit" value="" className="btn">Submit</button>
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}


export default UserForm;