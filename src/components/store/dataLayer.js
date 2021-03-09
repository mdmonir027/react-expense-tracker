import React, { useContext, createContext, useReducer } from "react";

const Context = createContext();

export const DataLayer = ({ initialState, reducer, children }) => (
  <Context.Provider value={useReducer(reducer, initialState)}>
    {children}
  </Context.Provider>
);

export const DataLayerValue = () => useContext(Context);
