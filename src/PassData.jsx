import React from "react";
import Props from './componants/Props'


let PassData = () => {
    let user = "Arjun Bankhede"
    let role = "Developer"
    let tech = ['python', 'Django', 'DRF', 'React']
    let mail_id = 'arjun@gmail.com'

    return (
        <div>
            <Props 
              user = {user}
              role = { role}
              tech = {tech}
              mail_id  = {mail_id}
            />
        </div>
    )
}


export default PassData;