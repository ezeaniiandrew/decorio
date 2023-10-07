import c from "./navbar.module.css";
import MobileNav from "components/MobileNav/MobileNav";

function Navbar() {
  return (
    <header className={c.header}>
      <MobileNav />
    </header>
  );
}

export default Navbar;
