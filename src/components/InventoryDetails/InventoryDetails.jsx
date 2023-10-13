import c from "./inventory-details.module.css";

function InventoryDetails({ quantity, category }) {
  return (
    <div className={c.container}>
      <p>{quantity} items</p>
      <p>{category}</p>
    </div>
  );
}

export default InventoryDetails;
