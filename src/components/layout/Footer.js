import SocialMediaIconsList from "../icons/SocialMediaIconsList";
import classes from "./Footer.module.css";

function Footer () {
    return(
        <div>
            <div className={classes.underline}></div>
            <footer className={classes.footer}>
                <div className={classes.logo}></div>
                <div>
                    <p className={classes.copyright}>(c) Copyright Issac Luk 2022. All rights reserved.</p>
                </div>
                <SocialMediaIconsList />
            </footer>
        </div>
    );
}

export default Footer;