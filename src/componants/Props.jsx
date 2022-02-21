import React from "react";
import "./Props.css"
let Props = (props) => {

    return(
        <div className="container mt-5">
            <div className="row">
                <div className="col-3"></div>
                <div className="col-6">
                    <h2> User : { props.user }</h2>
                    <ul>
                        <li>{ props.role }</li>
                        <li>Technology
                            <ol>
                                <li>{ props.tech[0] }</li>
                                <li>{ props.tech[1] }</li>
                                <li>{ props.tech[2] }</li>
                            </ol>
                        </li>
                        <li>{ props.mail_id }</li>
                    </ul>
                </div>
                <div className="col-3"></div>
            </div>
        </div>
    )
}


export default Props;