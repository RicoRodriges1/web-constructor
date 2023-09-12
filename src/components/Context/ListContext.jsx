import React from "react";

export const ListContext = React.createContext();

export function useListContext() {
  const context = React.useContext(ListContext);
  if (!context)
    throw new Error("ListContext is used out of Provider.");
  return context;
}



export function ListContextProvider(props) {
  const [list, setList] = React.useState([]);

  const createId = () => {
    const id = Date.now()
    return id
  }

  return <ListContext.Provider value={{
    list, setList, createId
  }}>
    {props.children }
  </ListContext.Provider>
}