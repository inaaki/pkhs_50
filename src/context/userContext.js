import React, { useEffect, useMemo, useReducer } from 'react';
import FullLoader from '../components/loader/FullLoader';
import http from '../http';
import ls from '../utils/localStorage';
import { cloneDeepObject as clone } from '../utils/object';

//userContext use hook
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

//userContext reducer
const REDUCER_TYPE = {
  state: 'updateState',
  user: 'updateUser',
  status: 'status',
};
function userProviderReducer(state, action) {
  const { type, payload } = action;
  const { status, user } = payload;
  switch (type) {
    case REDUCER_TYPE.status:
      return { ...state, status };
    case REDUCER_TYPE.user:
      return { ...state, user };
    case REDUCER_TYPE.state:
      return { ...clone(state), ...clone(payload) };
    default:
      return state;
  }
}

function UserProvider({ children }) {
  const [state, dispatch] = useReducer(userProviderReducer, {
    user: {},
    status: 'pending',
  });

  const { user, status } = state;

  const setUser = user => {
    dispatch({
      type: REDUCER_TYPE.user,
      payload: {
        user,
      },
    });
  };
  const setStatus = status => {
    dispatch({
      type: REDUCER_TYPE.status,
      payload: {
        status,
      },
    });
  };
  const setState = state => {
    dispatch({
      type: REDUCER_TYPE.state,
      payload: state,
    });
  };

  useEffect(() => {
    const fetchUser = async () => {
      const token = ls.get();
      if (token) {
        try {
          const user = await http.getUser(token);
          user.token = token;
          setState({ user, status: 'resolved' });
        } catch (error) {
          ls.remove();
          setStatus('resolved');
        }
      } else {
        setStatus('resolved');
      }
    };
    fetchUser();
  }, []);

  const providerValue = useMemo(
    () => ({
      user,
      setUser,
    }),
    [user]
  );

  if (status === 'pending') {
    return <FullLoader />;
  } else if (status === 'resolved') {
    return (
      <UserContext.Provider value={providerValue}>
        {children}
      </UserContext.Provider>
    );
  } else {
    throw new Error('unhandled status');
  }
}

export default UserProvider;
