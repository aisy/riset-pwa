import React, { useState, createContext } from 'react'

const LoginContext = createContext({});

const LoginProvider = (props) => {
  const { children } = props;

  // const [user, setUser] = useState([]);

  // const setLogin = dataLogin => {

  // }

  const loginCon = {
    user,
    setUser,
  }

  return (
    <LoginContext.Provider value={loginCon}>
      {children}
    </LoginContext.Provider>
  )
}

// export const LoginProvider = LoginContext.Provider;
export const LoginConsumer = LoginContext.Consumer;

export default LoginContext