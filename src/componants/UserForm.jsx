import React, { useState } from "react";


let UserForm = ( props ) => {


    let [name, setName] = useState("")
    let [mobile, setMobile] = useState("")
    let [email, setEmail] = useState("")
    let [date, setDate] = useState("")

    let setNameHandler = (event) => {
        setName(event.target.value)
    }
    let setMobileHandler = (event) => {
        setMobile(event.target.value)
    }
    let setEmailHandler = (event) => {
        setEmail(event.target.value)
    }
    let setDateHandler = (event) => {
        setDate(event.target.value)
    }

    let formSubmit = (event) => {
        event.preventDefault();
        
        const usr = {
            name : name,
            mobile : mobile,
            email : email,
            date : new Date(date).toDateString()
        };
        props.usrData(usr);

        console.log(usr)
        setName("")
        setMobile("")
        setEmail("")
        setDate("")

    }

    return (
        <div className="container mt-5 bg-dark">
            <div className="row bg-dark">
                <div className="col-3"></div>
                <div className="col-6">
                    <form className="form-control bg-dark text-white" onSubmit={formSubmit}>
                        <div>
                            <label>Your name</label>
                            <input type="text" onChange={setNameHandler} value={name} className="form-control" />
                        </div>
                        <div>
                            <label>Mobile number</label>
                            <input type="number" onChange={setMobileHandler} value={mobile} className="form-control" />
                        </div>
                        <div>
                            <label>Email id</label>
                            <input type="text" onChange={setEmailHandler} value={email} className="form-control" />
                        </div>
                        <div>
                            <label>Date of joining</label>
                            <input type="date" onChange={setDateHandler} value={date} className="form-control" />
                        </div>
                        <div>
                            <br />
                            <input type="submit" value="Submit" className="btn btn-info text-white" />
                        </div>
                    </form>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    );
}


export default UserForm;