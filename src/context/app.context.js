import { createContext, useState } from "react";

const UserContext = createContext()

function UserProviderWrapper(props){

    const [user, setUser] = useState(null)
    const [items, setItems] = useState (0)
    const [cartItems, setCartItems] = useState([])

    return (
        <UserContext.Provider value={{user, setUser, items, setItems, cartItems, setCartItems}}>
            {props.children}
        </UserContext.Provider>
    )
}

export {UserContext, UserProviderWrapper}