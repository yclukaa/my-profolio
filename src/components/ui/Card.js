import classes from "./Card.module.css";

// https://reactjs.org/docs/dom-elements.html

function Card(props) {
  return (
    <div className={classes.card} style={props.cardStyle}>
      {props.children}
    </div>
  );
}

export default Card;
