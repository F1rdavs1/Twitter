import { createContext, useState } from "react";

const Context = createContext();

const TokenContext = ({ children }) => {
  let initialToken;

  try {
    initialToken = JSON.parse(window.localStorage.getItem("token")) || false;
  } catch (e) {
    console.error("Error parsing token from localStorage:", e);
    initialToken = false;
  }

  const [token, setToken] = useState(initialToken);

  const setAndStoreToken = (newToken) => {
    setToken(newToken);
    window.localStorage.setItem("token", JSON.stringify(newToken));
  };

  return (
    <Context.Provider value={{ token, setToken: setAndStoreToken }}>
      {children}
    </Context.Provider>
  );
};

export { Context, TokenContext };
