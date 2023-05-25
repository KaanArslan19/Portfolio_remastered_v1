import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import About from "./About";
import Works from "./Works";
import Footer from "./Footer";
import classes from "./Layout.module.css";
import NavigationDots from "./NavigationDots";

const Layout = ({ children }) => {
  return (
    <main>
      <Navbar />
      <div>
        <Header />
        <About />
        <Works />
        <Footer />
      </div>
      <NavigationDots />
    </main>
  );
};

export default Layout;
