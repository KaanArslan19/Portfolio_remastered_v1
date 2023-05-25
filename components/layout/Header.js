import classes from "./Header.module.css";
import { Waves } from "../../assets/svgs";

const Header = () => {
  return (
    <main id="home" className={classes.section}>
      <h1>Header</h1>
      <Waves className={classes.waves} />
    </main>
  );
};

export default Header;
