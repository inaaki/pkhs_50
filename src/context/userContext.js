import React, { useContext } from 'react';

export const UserContext = React.createContext({});
UserContext.displayName = 'UserContext';

function UserProvider({ children }) {
  //user will be replace by api
  const user = {name:'akib'};

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}

export default UserProvider;