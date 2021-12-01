import React, { createContext, useContext, useState } from "react";
import "./Popover.css";

const PopoverContext = createContext();

export const PopoverTrigger = ({ children }) => {
  //lo que esté dentro de este componente abrirá el popover

  const { on, toggle } = useContext(PopoverContext);
  //si no esta abierto el popup muestro el contenido con trigger
  return !on ? <div onClick={toggle}>{children}</div> : null;
};

export const PopoverContent = ({ children }) => {
  //lo que esté dentro de este componente será el contenido del Popover
  const { on } = useContext(PopoverContext);
  return on ? <div className="popup"> {children} </div> : null;
};

export const PopoverCloseButton = () => {
  const { on, toggle } = useContext(PopoverContext);
  return on ? (
    <button className="btn mb-2" onClick={toggle}>
      X
    </button>
  ) : null;
};

export const Popover = ({ children }) => {
  const [on, setOn] = useState(true);
  const toggle = () => setOn(!on);

  return (
    <PopoverContext.Provider value={{ on, toggle }}>
      {children}
    </PopoverContext.Provider>
  );
};
