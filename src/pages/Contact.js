import classes from "./Contact.module.css";

function ContactPage() {
    return(
        <div className={classes.contact}>
            <h3>I’m currently available for a full-time job.</h3>
            <p>If you’re looking for a developer/engineer who is willing to take challenges and grow,</p>
            <div className={classes.contactMe}>
                <h3>Contact me:</h3>
                <div className={classes.contactInfo}>
                    <h6 className={classes.email}>yinchai6@gmail.com</h6>
                    <h6>(852) 6113 1718</h6>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;