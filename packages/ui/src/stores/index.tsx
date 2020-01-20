import React from "react";
import todo from "./Todo";

export const storesContext = React.createContext({
  todo
});

export const useStores = () => React.useContext(storesContext);

export { todo as todoStore };
