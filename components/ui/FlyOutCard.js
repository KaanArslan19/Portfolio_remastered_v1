import { useState } from "react";
import classes from "./FlyOutCard.module.css";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";
import { HiOutlineMenuAlt1 } from "react-icons/hi";

const FlyoutCard = () => {
  const [showCard, setShowCard] = useState(false);

  const showCardHandler = () => {
    setShowCard(true);
    if (showCard) {
      setShowCard(false);
    }
  };
  return (
    <button onClick={showCardHandler} className={classes.button}>
      {showCard ? (
        <IoCloseOutline className={classes.icon} />
      ) : (
        <HiOutlineMenuAlt1 className={classes.icon} />
      )}
      {showCard && (
        <div className={classes.container}>
          <ul className={classes.list}>
            {["home", "about", "work", "skills"].map((item) => (
              <Link href={`#${item}`}>
                <li className={classes.linkItem} key={`link-${item}`}>
                  {item}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      )}
    </button>
  );
};

export default FlyoutCard;
