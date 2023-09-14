import { createContext, useReducer } from "react";
import { useEffect } from "react";
import Axios from 'axios'

export const initialState = {theme: "light", data: []}

export const ContextGlobal = createContext();

function reducer(state, action) {
   switch (action.type) {
     case "GET_DATA":
       return { ...state, data: action.payload };
     case "GET_THEME":
       return { ...state, theme: state.theme === "light" ? "dark" : "light" };
     default:
       return state;
   }
}  

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

const [ state, dispatch ] = useReducer(reducer, initialState)

    useEffect(() => {
      Axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>
        dispatch({ type: "GET_DATA", payload: res.data })
      );
    }, []);
  
  return (
    <ContextGlobal.Provider value={{state , dispatch}}>
      {children}
    </ContextGlobal.Provider>
  );
};
