/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";
import c from "./customized-icon.module.css";

function CustomizedIcon({ children }) {
  return (
    <IconContext.Provider value={{ className: c.icon }}>
      {children}
    </IconContext.Provider>
  );
}

export default CustomizedIcon;
