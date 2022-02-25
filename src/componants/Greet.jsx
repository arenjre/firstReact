// this is example of state hook using useState

import React, { useState } from "react";
import './css/Greet.css'

let greet = "";
let greett = ""
let hello = ""


let Greet = () => {
    // let [nm, setNm] = useState(hello)
    // let [gt, setGt] = useState(greet);

    // let changeHello = (event) => {
    //     setNm(event.target.value)
    //     console.log(hello)
    // }
    // let btnclicked = () => {
    //     // alert("button clicked!");
    //     hello = nm;
    //     greett = "Hello "
    //     greet = (setGt("Welcome to the firstReact app"));


    // }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col text-white">
                        Column
                    </div>
                    <div className="col text-white">
                        Column
                    </div>
                    <div className="col text-white">
                        Column
                    </div>
                </div>
            </div>
        </>


        // <div className="container mt-5">
        //     <div className="row">
        //         <div className="col">addsfdsfds</div>
        //         <div className="col card mt-5 mb-4">
        //             <div className="user text-white mt-5">
        //                 <div className="pic">
        //                     <img src="icon.png" alt="" />
        //                 </div>
        //                 <div className="detail">
        //                     <h2 className="u">User name</h2>
        //                     <p>Developer</p>
        //                     <p className="mt-3">Email : Example@gmail.com</p>
        //                     <p>Mobile : 231232121</p>
        //                     <p>Experience : 12</p>
        //                 </div>
        //                 <br />
        //                 <div className="row">
        //                     <div className="col tech">
        //                         <p>Technology</p>
        //                         <ul className="tech2">
        //                             <li>python</li>
        //                             <li>django</li>
        //                             <li>DRF</li>
        //                         </ul>
        //                     </div>
        //                     <div className="col">
        //                         <p>Projects</p>
        //                         <ul>
        //                             <li>project1</li>
        //                             <li>project2</li>
        //                             <li>project3</li>
        //                         </ul>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //         <div className="col"></div>
        //     </div>

        //     <div className="row">
        //         <div className="col"></div>
        //         <div className="col-3">
        //             <button className="btn btn-sm text-white">All Members</button>
        //             <button className="btn btn-sm text-white">Previous</button>
        //             <button className="btn btn-sm text-white">Next</button>
        //         </div>
        //         <div className="col"></div>
        //     </div>
        // </div>
    )
}


export default Greet;
