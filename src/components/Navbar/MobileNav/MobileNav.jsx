import c from "./mobile-nav.module.css";
import headerLogo from "assets/header-logo.png";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

function MobileNav() {
  return (
    <>
      <div className={c.logoBox}>
        <img src={headerLogo} alt="company logo" />
      </div>
      <div className={c.iconBox}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <div className="icon">
          <AiOutlineShoppingCart />
        </div>
      </div>
      <div className="icon">
        <GiHamburgerMenu />
      </div>
    </>
  );
}

export default MobileNav;
