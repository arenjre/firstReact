import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';




// const FatchAPI = () => {

//     const params = useParams()

//     const [mdata, setData] = useState([])
//     let url = `http://127.0.0.1:8006/info/info_create/`

//     axios.get(`http://127.0.0.1:8006/info/info_create/`)
//         .then((res) => {
//             setData(res.data)
//         })
//         .catch((err) => {
//             console.log(err);
//         });

//     if ((params.id == false) || (params.id == undefined)) {
//         return (
//             <div className='mt-5'>
//                 <h3>Employee List</h3>
//                 <div className="row">
//                     {mdata.map((mdata) => (
//                         <div className="col-md-6 col-lg-3 g-mb-30" key={mdata.id}>
//                             <a href={`/userinfo/` + mdata.id}>
//                                 <article className="u-shadow-v18 g-bg-dark text-center rounded g-px-20 g-py-40 g-mb-5 user-box">
//                                     <img className="d-inline-block img-fluid mb-4 rounded-circle img1" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Member image" />
//                                     <h4 className="h5 g-color-black g-font-weight-600 g-mb-10">{mdata.user}</h4>
//                                     <p className='mt'>Member/trainee</p>
//                                 </article>
//                             </a>
//                         </div>

//                     ))}
//                 </div>
//             </div>
//         );
//     }

//     else {
//         return (
//             <h2>None</h2>
//         )
//     }


// }

const FatchAPI = () => {
    const params = useParams()
    const [users, setUsers] = useState([])

    if ((params.id == false) || (params.id == undefined)) {

        axios.get(`http://127.0.0.1:8006/server/caffer/alluser/`)
            .then(
                (res) => {
                    console.log(res.data)
                    setUsers(res.data)
                    // console.log(user)
                }
            )
    }

    else {

        axios.get(`http://127.0.0.1:8006/server/caffer/alluser/${params.id}`)
            .then(
                (res) => {
                    // console.log(res.data)
                    setUsers(res.data)
                    // console.log(user)
                }
            )
    }

    if ((params.id == false) || (params.id == undefined)) {
        return (
            <>
                {
                    users.map((user) => (
                        <div className="col-md-6 col-lg-3 g-mb-30" key={user.id}>
                            <Link to={`/allusers/` + user.id}>
                                    <h4 className="h5 g-color-black g-font-weight-600 g-mb-10">{user.user}</h4>
                                    <p className='mt'>Member/trainee</p>
                            </Link>
                            <hr />
                        </div>
                        )
                    )
                }

                <h3>Done!</h3>

            </>
        )
    }

    else {
        return(
            <div>{users.user}</div>
        )
    }

}
export default FatchAPI;