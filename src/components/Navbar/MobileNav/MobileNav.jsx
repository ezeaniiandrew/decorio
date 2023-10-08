import c from "./mobile-nav.module.css";
import headerLogo from "assets/header-logo.png";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbShoppingCartFilled } from "react-icons/tb";
import { IconContext } from "react-icons";
import { useState } from "react";
import NavLink from "components/NavLink/NavLink";

const links = ["home", "explore", "about", "support", "product comparison"];

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className={c.logoBox}>
        <img src={headerLogo} alt="company logo" />
      </div>
      <div className={c.iconBox}>
        <IconContext.Provider value={{ size: "1.5rem" }}>
          <div>
            <AiOutlineSearch />
          </div>
          <div>
            <TbShoppingCartFilled />
          </div>
          <div className={c.menuIcon} onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </div>
        </IconContext.Provider>
      </div>
      <div className={`${!isOpen ? c.blur + c.show : c.blur}`}>
        <nav className={c.nav}>
          <ul className={c.navLinks}>
            {links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
}

export default MobileNav;
