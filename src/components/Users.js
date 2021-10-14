import React from "react";

const Users = (props) => {
    return (
        <div className="usersWrapper">
            {props.users.map(user => (
                <div className="userWrapper" key={user.uuid}>
                   <h2> {user.name.first}</h2>
                   <img src={user.picture.medium} alt={user.name}></img>
                   <p>Contact: {user.email}</p>
                   <p>Location: {user.location.state}</p>
                    
                </div>
            ))}
        </div>
    )  
}


export default Users;