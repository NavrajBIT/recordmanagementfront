import UserContext from './userContext'
import { useState } from 'react'

const UserState = (props) => {
    const [userName, setUserName] = useState("");
    const updateName = (name) => {
        setUserName(name);
    };
    return(
        <UserContext.Provider value={{userName, updateName}}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserState;