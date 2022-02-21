import React from "react";
import UserForm from "./UserForm";

let User = () => {
    const userData = (usrDataHandler) => {
        console.log(usrDataHandler)
    }
  

    return (
        <UserForm  usrData={userData}/>
    )
}


export default User;