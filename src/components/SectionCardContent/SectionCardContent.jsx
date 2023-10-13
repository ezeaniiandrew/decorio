import c from "./section-card-content.module.css";

function SectionCardContent({ children }) {
  return <div className={c.container}>{children}</div>;
}

export default SectionCardContent;
