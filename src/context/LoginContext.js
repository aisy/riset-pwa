import React from 'react'

const LoginContext = React.createContext({});

export const LoginProvider = LoginContext.Provider;
export const LoginConsumer = LoginContext.Consumer;

export default LoginContext