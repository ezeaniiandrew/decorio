/* eslint-disable react/prop-types */
import c from "./section-content.module.css";

function SectionContent({ children }) {
  return <div className={c.container}>{children}</div>;
}

export default SectionContent;
