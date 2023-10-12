import Button from "components/Button/Button";
import c from "./header.module.css";
import CustomizedIcon from "components/CustomizedIcon/CustomizedIcon";
import { BsArrowRight } from "react-icons/bs";

function Hero() {
  return (
    <section className={c.hero}>
      <div className={c.content}>
        <h2>good furniture that brightens your home</h2>
        <p>
          The right furniture pieces, thoughtfully chose, infuse every room with
          warmth, character, and style, creating a haven that reflects your
          personality and elevates your living experience
        </p>
        <div className={c.btnContainer}>
          <Button>Shop Now</Button>
          <Button variant="outlined">
            Explore
            <CustomizedIcon>
              <BsArrowRight />
            </CustomizedIcon>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
