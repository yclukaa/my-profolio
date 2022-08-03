import { useRef } from "react";

import CallToAction from "../components/cta/CallToAction";
import DownwardIcon from "../components/icons/DownwardIcon";
import classes from "./Home.module.css";

function HomePage() {
  const myWorkRef = useRef();
  function seeMyWorkButtonOnClick() {
    myWorkRef.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className={classes.home}>
      <div className={classes.hero}>
        <h3>Hey, I’m Issac</h3>
        <h1>
          A fresh graduate from the Hong Kong University of Science and
          Technology
        </h1>
        <div>
          <p>
            I did several projects during my studies. You can find the
            highlights below.
          </p>
          <button onClick={seeMyWorkButtonOnClick}>
            <div>
              <h6>See my work</h6>
              <DownwardIcon />
            </div>
          </button>
        </div>
      </div>
      <div className={classes.workingExp}>
        <h5>I had the pleasure of working in these great companies</h5>
        <div className={classes.hkjcLogo}></div>
      </div>
      <div>
        <div className={classes.myWork} ref={myWorkRef}>
          <h3 className="h3_bold">My Work</h3>
          <p>
            I specialize in website design and development, but I’ve also
            designed successful iOS and Android apps.
          </p>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

export default HomePage;
