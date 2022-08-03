import Tab from "./Tab";
import classes from "./Switch.module.css";

function Switch(props) {
  return (
    <div className={classes.switch} style={{background: props.backgroundColor}}>
      {props.tabs.map((tab) =>
        tab.id === props.activeTabID ? (
          <Tab
            key={tab.id}
            id={tab.id}
            text={tab.text}
            style={props.tabActiveStyle}
            onClick={null}
          />
        ) : (
          <Tab
            key={tab.id}
            id={tab.id}
            text={tab.text}
            style={props.tabInactiveStyle}
            onClick={props.tabOnClick}
          />
        )
      )}
    </div>
  );
}

export default Switch;
