import { navLinks } from "data/index";
import c from "./desktop-nav.module.css";
import headerLogo from "assets/header-logo.png";
import NavLink from "components/NavLink/NavLink";
import CustomizedIcon from "components/CustomizedIcon/CustomizedIcon";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSolidUser } from "react-icons/bi";
import { MdFavorite } from "react-icons/md";

function DesktopNav() {
  return (
    <nav className={c.nav}>
      <div className={c.logoBox}>
        <img src={headerLogo} alt="company logo" />
      </div>
      <div>
        <ul className={c.navLinks}>
          {navLinks.map((link, index) => (
            <NavLink key={link} index={index}>
              {link}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className={c.icons}>
        <CustomizedIcon>
          <AiOutlineSearch />
        </CustomizedIcon>
        <CustomizedIcon>
          <BiSolidUser />
        </CustomizedIcon>
        <CustomizedIcon>
          <MdFavorite />
        </CustomizedIcon>
      </div>
    </nav>
  );
}

export default DesktopNav;
