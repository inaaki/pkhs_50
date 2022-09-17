import React, { useState } from 'react';

const UserContext = React.createContext();
UserContext.displayName = 'UserContext';

export function useUserContext() {
  const user = React.useContext(UserContext);
  if (user === undefined)
    throw new Error(
      '`useUserContext` hook should be called inside `<UserContext.Provider>`'
    );
  return user;
}

function UserProvider({ children }) {
  //user will be replace by api
  // const user = { name: 'aaa', isRegistered: false };
  const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
