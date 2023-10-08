import MobileNav from "./MobileNav/MobileNav";
import c from "./navbar.module.css";
import { useState, useEffect } from "react";

const mediaQuery = window.matchMedia("(max-width: 600px)");

function Navbar() {
  const [isMobile, setIsMobile] = useState(mediaQuery.matches);

  useEffect(() => {
    const handleMediaQueryChange = (e) => setIsMobile(e.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <>
      {isMobile ? (
        <header className={c.header}>
          <MobileNav />
        </header>
      ) : (
        <p>Hello</p>
      )}
    </>
  );
}

export default Navbar;
