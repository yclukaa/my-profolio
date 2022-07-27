import classes from "./CallToAction.module.css";

function CallToAction() {
    return (
        <div className={classes.cta}>
            <div className={classes.ctaMain}>
                <h4>I’m currently available for a full-time job.</h4>
                <p>If you’re looking for a developer/engineer who is willing to take challenges and grow,</p>
            </div>
            <div className={classes.ctaContact}>
                <h5>Contact Me:</h5>
                <div className={classes.ctaContactInfo}>
                    <p className={classes.email}>yinchai6@gmail</p>
                    <p>(852) 6113 1718</p>
                </div>
            </div>
        </div>
    );
}

export default CallToAction;