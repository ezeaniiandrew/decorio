import c from "./mobile-nav.module.css";
import headerLogo from "assets/header-logo.png";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { TbShoppingCartFilled } from "react-icons/tb";
import { useState } from "react";
import NavLink from "components/NavLink/NavLink";
import CustomizedIcon from "components/CustomizedIcon/CustomizedIcon";
import { navLinks } from "data/index";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={c.header}>
      <div className={c.menu}>
        <div className={c.logoBox}>
          <img src={headerLogo} alt="company logo" />
        </div>
        <div className={c.iconBox}>
          <CustomizedIcon>
            <AiOutlineSearch />
          </CustomizedIcon>
          <CustomizedIcon>
            <TbShoppingCartFilled />
          </CustomizedIcon>
        </div>
      </div>

      <div className={c.navbar}>
        <nav className={isOpen ? c.active : ""}>
          <ul>
            {navLinks.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </ul>
        </nav>
        <div onClick={() => setIsOpen(!isOpen)}>
          <CustomizedIcon>
            {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
          </CustomizedIcon>
        </div>
      </div>
    </header>
  );
}

export default MobileNav;
