import { createContext, useState } from 'react';
import { getUser } from '../services/auth';


const UserContext = createContext();

const UserProvider = ({ children }) => {

    // set variable to get user info from supabase
  const currentUser = getUser();
    // set state 
  const [user, setUser] = useState(currentUser);
    // return component with Provider property?
    // values are the state you want to be passed down to children
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export { UserContext, UserProvider };