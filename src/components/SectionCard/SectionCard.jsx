import c from "./section-card.module.css";

function SectionCard({ children }) {
  return <section className={c.sectionCard}>{children}</section>;
}

export default SectionCard;
