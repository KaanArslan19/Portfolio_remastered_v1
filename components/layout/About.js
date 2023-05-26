import Image from "next/image";
import classes from "./About.module.css";
import { images } from "/public/images/constant";

const About = () => {
  return (
    <section id="about" className={classes.container}>
      <div className={classes.left}>
        <h2>Design</h2>
        <p>
          I design, even though I'm probably not an ordinary designer sitting in
          front of an Illustrator artboard tweaking pixels. You'll find me
          immersed in stylesheets, adjusting font sizes and creating layouts.
          I'm dedicated to delivering smooth user experiences while being
          aesthetic.
        </p>
        <div className={classes.imgContainerLeft}>
          <Image
            src={images.designIcon}
            width={150}
            height={150}
            alt="engineerIcon"
          />
        </div>
      </div>
      <div className={classes.right}>
        <div className={classes.imgContainer}>
          <Image
            src={images.engineerIcon}
            width={150}
            height={150}
            alt="engineerIcon"
          />
        </div>
        <h2>Engineering</h2>
        <p>
          I have the right resources for developing JavaScript applications, and
          I can definitely work without them to produce quick, durable solutions
          that are designed for growth – performance and scalability are top
          objectives on my radar.
        </p>
      </div>
    </section>
  );
};

export default About;
