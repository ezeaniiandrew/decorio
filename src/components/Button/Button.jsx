import c from "./button.module.css";

function Button({ children, variant, pd, size }) {
  const style = {
    padding: pd ? "10px 0px" : "16px 16px",
    borderRadius: "52px",
    width: size ? size : "100%",
    border: variant === "outlined" ? "1px solid var(--brandColor)" : "none",
    fontWeight:
      variant === "text" ? "var(--fw-semi-bold)" : "var(--fw-semi-bold)",
    color: variant ? "var(--brandColor)" : "var(--neutralColor)",
    fontSize: "var(--fs-2xs)",
    display: "flex",
    alignItems: "center",
    justifyContent: variant === "text" ? "flex-end" : "center",
    gap: "20px",
    backgroundColor: variant ? "transparent" : "var(--brandColor)",
    textTransform: "capitalize",
  };

  return <button style={style}>{children}</button>;
}

export default Button;
