import c from "./product-card.module.css";

function ProductCard({ children }) {
  return <div className={c.container}>{children}</div>;
}

export default ProductCard;
