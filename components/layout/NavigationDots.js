import React from "react";
import classes from "./NavigationDots.module.css";

const NavigationDots = () => {
  return (
    <nav className={classes.navbar}>
      <ul>
        <li>
          <a href="#home" className={classes.dot} data-scroll="home"></a>
        </li>

        <li>
          <a href="#about" className={classes.dot} data-scroll="about"></a>
        </li>

        <li>
          <a href="#works" className={classes.dot} data-scroll="works"></a>
        </li>

        <li>
          <a href="#footer" className={classes.dot} data-scroll="footer"></a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDots;
