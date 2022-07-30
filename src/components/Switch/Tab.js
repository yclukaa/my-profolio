import classes from "./Tab.module.css";

function Tab(props) {
  function tabOnClickHandler() {
    props.onClick(props.id);
  }
  return props.onClick ? (
    <h6 className={classes.tab} style={props.style} onClick={tabOnClickHandler}>
      {props.text}
    </h6>
  ) : (
    <h6 className={classes.tab} style={props.style}>
      {props.text}
    </h6>
  );
}

export default Tab;
