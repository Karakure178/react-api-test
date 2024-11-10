import React, { useContext, useState, useEffect, createContext } from "react";
import axios from "axios";

const APIContext = createContext();

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

export function APIContextProvider({ children }) {
  const [users, setUsers] = useState([]);
  // const url = "https://sabe-dev.onrender.com/ai/";
  const url = "https://test1.egg9017shun.workers.dev/api/todos/";
  const random = getRandomInt(20);
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
