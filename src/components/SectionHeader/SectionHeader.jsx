import c from "./section-header.module.css";

function SectionHeader({ title, actionElement }) {
  return (
    <div className={c.sectionHeader}>
      <h3>{title}</h3>
      <span>{actionElement}</span>
    </div>
  );
}

export default SectionHeader;
