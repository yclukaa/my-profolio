import { useRef, useState } from "react";

import CallToAction from "../components/cta/CallToAction";
import DownwardIcon from "../components/icons/DownwardIcon";
import Switch from "../components/Switch/Switch";
import Card from "../components/ui/Card";
import HkjcIcon from "../components/icons/HkjcIcon";
import ImageGallery from "../components/ImageGallery/ImageGallery";
import classes from "./Home.module.css";

import homePageImg from "../assets/images/home/imageGallery/fyp/homePage.png";
import loginPageImg from "../assets/images/home/imageGallery/fyp/loginPage.png";
import registerPageImg from "../assets/images/home/imageGallery/fyp/registerPage.png";
import userAddTransactionImg from "../assets/images/home/imageGallery/fyp/userAddTransaction.png";
import userHomePageImg from "../assets/images/home/imageGallery/fyp/userHomePage.png";
import userProfolioPageImg from "../assets/images/home/imageGallery/fyp/userProfolioPage.png";
import userProfolioPageImg2 from "../assets/images/home/imageGallery/fyp/userProfolioPage2.png";

import monstersImg from "../assets/images/home/imageGallery/tower-defense/monsters.PNG";
import monsterTooltipImg from "../assets/images/home/imageGallery/tower-defense/monsterTooltip.PNG";
import towersImg from "../assets/images/home/imageGallery/tower-defense/towers.PNG";
import towerTooltipImg from "../assets/images/home/imageGallery/tower-defense/towerTooltip.PNG";
import towerOptionsImg from "../assets/images/home/imageGallery/tower-defense/towerOptions.PNG";

function HomePage() {
  const myWorkRef = useRef();
  function seeMyWorkButtonOnClick() {
    myWorkRef.current.scrollIntoView({ behavior: "smooth" });
  }

  /******** Defining Switch ********/
  const [activeTabID, setActiveTabID] = useState(0);
  function tabOnClickHandler(id) {
    setActiveTabID(id);
  }

  const tabs = [
    {
      id: 0,
      text: "Final Year Project",
      imgs: [
        { img: homePageImg, altText: "Home Page" },
        { img: loginPageImg, altText: "Login Page" },
        { img: registerPageImg, altText: "Register Page" },
        { img: userAddTransactionImg, altText: "User Add Transaction" },
        { img: userHomePageImg, altText: "User Home Page" },
        { img: userProfolioPageImg, altText: "User Profolio Page" },
        { img: userProfolioPageImg2, altText: "User Profolio Page 2" },
      ],
    },
    {
      id: 1,
      text: "Tower Defense Game",
      imgs: [
        { img: monstersImg, altText: "monsters" },
        { img: monsterTooltipImg, altText: "monster tooltip" },
        { img: towersImg, altText: "towers" },
        { img: towerTooltipImg, altText: "tower tooltip" },
        { img: towerOptionsImg, altText: "tower options" },
      ],
    },
  ];

  const imageStyle = {
    width: "265px",
    height: "165px",
  };

  const tabActiveStyle = {
    color: "#ffffff",
    // background: "linear-gradient(90deg, #4b6ed6 0%, #4b70d5 6.25%, #4d89c0 100%)",
    backgroundColor: "#4B6ED6",
    boxShadow: "0px 4px 4px 6px rgba(38, 47, 54, 0.25)",
  };
  const tabInactiveStyle = {
    color: "rgba(38, 47, 54, 0.75)",
    cursor: "pointer",
  };

  const normalCardStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "16px",
    gap: "16px",
    backgroundColor: "rgba(38, 47, 54, 0.25)",

    transition: "opacity 0.3s ease-in",

    position: "absolute",
    /* h3 line height (72px)+
    gap (32px)+
    p line height (14px)+
    gap (32px)+
    Switch top-bottom padding (16px)+
    Tab top-bottom padding (32px)+
    Tab(h6) line height (30px)+
    gap (32px)*/
    top: "260px",
  };
  /******** Defining Switch ********/
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
        {/* <div className={classes.hkjcLogo}></div> */}
        <HkjcIcon />
      </div>
      <div>
        <div className={classes.myWork} ref={myWorkRef}>
          <h3 className="h3_bold">My Work</h3>
          <p>
            I can design and code website using React, below are the highlights
            of several projects I did during my studies.
          </p>
          <Switch
            tabs={tabs}
            activeTabID={activeTabID}
            tabOnClick={tabOnClickHandler}
            tabActiveStyle={tabActiveStyle}
            tabInactiveStyle={tabInactiveStyle}
            backgroundColor={"#4BB8D6"}
          />
          {tabs.map((tab) => (
            <Card
              className={classes.imageGallery}
              key={tab.id}
              cardStyle={
                tab.id === activeTabID
                  ? { opacity: "1", ...normalCardStyle }
                  : { opacity: "0", ...normalCardStyle }
              }
            >
              {/* <p style={{ fontSize: "18px", lineHeight: "21px" }}>{tab.text}</p> */}
              <ImageGallery imgs={tab.imgs} imageStyle={imageStyle} />
            </Card>
          ))}
          <div className={classes.extraSpaceForOutOfFlowImageGallery}></div>
        </div>
      </div>
      <CallToAction />
    </div>
  );
}

export default HomePage;
