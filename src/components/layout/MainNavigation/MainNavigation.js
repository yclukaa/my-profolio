import { Link } from "react-router-dom";

import SocialMediaIconsList from "../../icons/SocialMediaIconsList";
import Logo from "../../logo/Logo";
import SideMenu from "./SideMenu/SideMenu";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <div>
      <header className={classes.header}>
        <nav>
          <ul className={classes.header_left}>
            <li>
              <Link to="/" className={classes.logo}>
                {/* <div className={classes.logo}></div> */}
                <Logo />
              </Link>
            </li>
            <li>
              <Link to="about-me">About Me</Link>
            </li>
            <li>
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <div className={classes.header_right}>
          <div className={classes.contact}>
            <p className={classes.email}>yinchai6@gmail.com</p>
            <p>(852) 6113 1718</p>
          </div>
          <div className={classes.line}></div>
          <SocialMediaIconsList />
          <SideMenu />
        </div>
      </header>
      <div className={classes.underline}></div>
    </div>
  );
}

export default MainNavigation;
