import classes from "./Navbar.module.css";
import Image from "next/image";
import { images } from "/public/images/constant";

import FlyOutCard from "../ui/FlyOutCard";
const Navbar = () => {
  return (
    <main className={classes.container}>
      <a href="#home">
        <h1>kaanarslan.dev</h1>
      </a>

      <FlyOutCard />
    </main>
  );
};

export default Navbar;
