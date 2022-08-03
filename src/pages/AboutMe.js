import { useState } from "react";

import CallToAction from "../components/cta/CallToAction";
import Switch from "../components/Switch/Switch";
import FigmaIcon from "../components/icons/FigmaIcon";
import AdobeIllustratorIcon from "../components/icons/AdobeIllustratorIcon";
import VSCodeIcon from "../components/icons/VSCodeIcon";
import PythonIcon from "../components/icons/PythonIcon";
import GitIcon from "../components/icons/GitIcon";
import Card from "../components/ui/Card";
import classes from "./AboutMe.module.css";

import medalImg from "../assets/images/aboutMe/imageGallery/medal.jpg";
import logoExtractImg from "../assets/images/aboutMe/imageGallery/logoExtract.png";
import figmaImg from "../assets/images/aboutMe/imageGallery/websiteDesignFigma.PNG";
import figmaImg2 from "../assets/images/aboutMe/imageGallery/websiteDesignFigma2.PNG";
import ImageGallery from "../components/ImageGallery/ImageGallery";

function AboutMePage() {
  const [activeTabID, setActiveTabID] = useState(0);
  function tabOnClickHandler(id) {
    setActiveTabID(id);
  }

  const tabs = [
    {
      id: 0,
      text: "Tools I Use for Design",
      toolsData: [
        { icon: <FigmaIcon />, name: "Figma" },
        { icon: <AdobeIllustratorIcon />, name: "Adobe Illustrator" },
      ],
    },
    {
      id: 1,
      text: "Tools I Use for Development",
      toolsData: [
        { icon: <VSCodeIcon />, name: "VS Code" },
        { icon: <PythonIcon />, name: "Python" },
        { icon: <GitIcon />, name: "Git" },
      ],
    },
  ];

  const tabActiveStyle = {
    color: "#ffffff",
    backgroundColor: "#262F36",
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
    padding: "32px",
    gap: "16px",
    backgroundColor: "rgba(38, 47, 54, 0.25)",

    transition: "opacity 0.3s ease-in",
  };

  const myImgs = [
    { img: medalImg, altText: "medal" },
    { img: logoExtractImg, altText: "logo extract" },
    { img: figmaImg, altText: "website design" },
    { img: figmaImg2, altText: "websiste design 2" },
  ];

  const imageStyle = {
    width: "100%",
    height: "100%",
  };

  const swiperContainerStyle = {
    width: "98%",
  };

  return (
    <div className={classes.aboutMe}>
      <div className={classes.hero}>
        <div className={classes.heroText}>
          <h2>I’m Issac Luk.</h2>
          <div className={classes.heroParagraph}>
            <p>
              I’m interested in fintech. I built a system for predicting stock
              price and offering financial advice with my teammates in my final
              year project.
            </p>
            <p>I am able to design and code responsive website.</p>
            <p>
              I had the pleasure of working in the Hong Kong Jockey Club as an
              intern.
            </p>
            <p>I’m always eager to learn and ready for challenges.</p>
          </div>
        </div>
        <ImageGallery imgs={myImgs} imageStyle={imageStyle} swiperContainerStyle={swiperContainerStyle} />
      </div>
      <div className={classes.myTools}>
        <Switch
          tabs={tabs}
          activeTabID={activeTabID}
          tabOnClick={tabOnClickHandler}
          tabActiveStyle={tabActiveStyle}
          tabInactiveStyle={tabInactiveStyle}
          backgroundColor={"rgba(38, 47, 54, 0.25)"}
        />
        {tabs.map((tab) => (
          <div key={tab.id} className={classes.myToolsList}>
            {tab.toolsData.map((toolData) => (
              <Card
                key={toolData.name}
                cardStyle={
                  tab.id === activeTabID
                    ? { opacity: "1", ...normalCardStyle }
                    : { opacity: "0", ...normalCardStyle }
                }
              >
                {toolData.icon}
                <p style={{ fontSize: "18px", lineHeight: "21px" }}>
                  {toolData.name}
                </p>
              </Card>
            ))}
          </div>
        ))}
      </div>
      <CallToAction />
    </div>
  );
}

export default AboutMePage;
