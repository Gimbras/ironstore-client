import { createContext, useState } from "react";

const UserContext = createContext()

function UserProviderWrapper(props){

    const [user, setUser] = useState(null)
    const [items, setItems] = useState (0)

    return (
        <UserContext.Provider value={{user, setUser, items, setItems}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProviderWrapper}