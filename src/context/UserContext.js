import { createContext} from "react";

export const UserContext = createContext({
    loggedInUser: '',
    setLoggedInUser: () => {},
    currentUser: ''
})