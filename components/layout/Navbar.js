import classes from "./Navbar.module.css";
import Image from "next/image";
import { images } from "/public/images/constant";

import FlyOutCard from "../ui/FlyOutCard";
const Navbar = () => {
  return (
    <main className={classes.container}>
      <Image
        className={classes.logo}
        src={images.logo}
        width={75}
        height={75}
        alt="logo"
      />

      <FlyOutCard />
    </main>
  );
};

export default Navbar;
