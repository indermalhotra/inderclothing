
import { createContext, useState } from "react";

// We will send default values
export const UserContext = createContext({
    currentUser:null,
    setCurrentUser:()=>null,
}); 

// This is provider when we wrap any component it can access the value
// We can Wrap in index.js because all of our component require this value.

export const UserProvider = ({children}) =>{
    const [currentUser, setCurrentUser] = useState(null);
    const [otherValue, setOtherValue] = useState(null);

    const value = {currentUser, setCurrentUser};

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}
