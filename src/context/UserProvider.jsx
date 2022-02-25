import { createContext, useState } from 'react';

export const UserContext = createContext(null);

//contains detail of the person that is selected for chat
const UserProvider = ({children}) => {
    const [person, setPerson] = useState({});
  return (
        <UserContext.Provider value={{ person, setPerson }}>
            {children}
        </UserContext.Provider>
  )
}

export default UserProvider