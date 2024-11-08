import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  const url = "http://localhost:8000/ai/";
  const random = getRandomInt(105);
  const originUrl = random !== 0 ? url + String(random) : url + "1";

  useEffect(() => {
    axios
      .get(originUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("エラー発生", error);
      });
  }, [url]);
  return (
    <APIContext.Provider
      value={{
        users,
      }}
    >
      {children}
    </APIContext.Provider>
  );
}

export function useAPI() {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
}
