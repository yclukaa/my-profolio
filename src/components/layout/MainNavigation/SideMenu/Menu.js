import { Link } from "react-router-dom";

import MenuIcon from "../../../icons/MenuIcon";
import classes from "./Menu.module.css";

function Menu(props) {
  return (
    <div className={classes.menu}>
      <div className={classes.iconContainer}>
        <MenuIcon onClick={props.closeHandler} />
      </div>
      <ul>
        <li>
          <Link to="/" onClick={props.closeHandler}>Home</Link>
        </li>
        <li>
          <Link to="about-me" onClick={props.closeHandler}>About Me</Link>
        </li>
        <li>
          <Link to="contact" onClick={props.closeHandler}>Contact</Link>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
