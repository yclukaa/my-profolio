import TwitterIcon from "./TwitterIcon";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import classes from "./SocialMediaIconsList.module.css";

function SocialMediaIconsList() {
  return (
    <ul className={classes.socialMediaIconsList}>
      <li className={classes.iconContainer}>
        <TwitterIcon />
      </li>
      <li className={classes.iconContainer}>
        <InstagramIcon />
      </li>
      <li className={classes.iconContainer}>
        <FacebookIcon />
      </li>
    </ul>
  );
}

export default SocialMediaIconsList;
