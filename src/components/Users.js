import React from "react";

const Users = (props) => {
    return (
        <div className="usersWrapper">
            {props.users.map(user => (
                <div className="userWrapper" key={user.uuid}>
                   <h2> {user.name}</h2>
                   <img src={user.picture} alt={user.name}></img>
                   <p>Contact: {user.email}</p>
                   <p>Location: {user.location}</p>
                    
                </div>
            ))}
        </div>
    )  
}


export default Users;