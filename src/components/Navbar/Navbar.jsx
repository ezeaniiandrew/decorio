import DesktopNav from "components/DesktopNav/DesktopNav";
import MobileNav from "components/MobileNav/MobileNav";
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

  return <>{isMobile ? <MobileNav /> : <DesktopNav />}</>;
}

export default Navbar;
