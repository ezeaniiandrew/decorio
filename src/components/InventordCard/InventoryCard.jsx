import c from "./inventory-card.module.css";

function InventoryCard({ children }) {
  return <div className={c.container}>{children}</div>;
}

export default InventoryCard;
