import c from "./product-details.module.css";

function ProductDetails({ children }) {
  return <div className={c.container}>{children}</div>;
}

export default ProductDetails;
