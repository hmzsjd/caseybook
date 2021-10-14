import React from "react";

const Users = (props) => {
    return (
        <div className="usersWrapper">
            {props.users.map(user => (
                <div className="userWrapper">
                    {user.name}
                </div>
            ))}
        </div>
    )  
}


export default Users;