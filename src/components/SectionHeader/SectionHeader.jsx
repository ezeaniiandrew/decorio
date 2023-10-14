import c from "./section-header.module.css";

function SectionHeader({ title, actionElement }) {
  return (
    <div className={c.sectionHeader}>
      <h2>{title}</h2>
      <div>{actionElement}</div>
    </div>
  );
}

export default SectionHeader;
