/* eslint-disable react/prop-types */
import { IconContext } from "react-icons";

function CustomizedIcon({ children, size }) {
  return (
    <IconContext.Provider value={{ size: size ? size : "1.5rem" }}>
      {children}
    </IconContext.Provider>
  );
}

export default CustomizedIcon;
