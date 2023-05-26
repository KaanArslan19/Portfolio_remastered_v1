import classes from "./Header.module.css";
import { Waves } from "../../assets/svgs";

const Header = () => {
  return (
    <main id="home" className={classes.section}>
      <div className={classes.left}>
        <div className={classes.header}>
          <h1>
            Frontend <br />
            Developer
          </h1>
          <span className={classes.intro}>
            I enjoy designing frontend solutions that are reliable, scalable,
            while offering outstanding user experiences.
          </span>
        </div>
        {/*         <Waves className={classes.waves} />
         */}
        <div className={classes.content}>
          <p>
            An electric and electronic engineer specialized in interface design
            and communication between various hardware and motion control
            software to make the machines work.
          </p>
          <p>
            Decided to switch career to build web and mobile applications for
            clients which is relevant to the area that I had proven experience.
          </p>
        </div>
      </div>
      <div className={classes.right}>
        <h1>Header</h1>
        <span></span>
        <div className={classes.content}>
          <p>lorem</p>
          <p>lorem</p>
        </div>
      </div>
    </main>
  );
};

export default Header;
