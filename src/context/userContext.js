import React, { useCallback, useContext, useState } from 'react';

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

  const [user, setUser] = useState(null);

  const handleLogin = useCallback(() => setUser({ isRegistered: false }), []);
  const handleLogout = useCallback(() => setUser(null), []);
  const handleDashboard = useCallback(
    () => setUser({ isRegistered: true }),
    []
  );
  const handleRegister = useCallback(
    () => setUser({ isRegistered: false }),
    []
  );

  return (
    <UserContext.Provider
      value={{
        onDashboard: handleDashboard,
        onLogin: handleLogin,
        onLogout: handleLogout,
        onRegister: handleRegister,
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
