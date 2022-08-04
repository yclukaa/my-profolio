import { useState } from "react";
import { CSSTransition } from "react-transition-group";

import MenuIcon from "../../../icons/MenuIcon";
import Menu from "./Menu";
import Backdrop from "./Backdrop";

// Need to locally import the css file which defined the transition of the component wrapped by CSSTransition
// so that the library could automatically apply the defined(in a specific way) css classes
// to the component during the transition
import "./SideMenu-transition.css";

//http://reactcommunity.org/react-transition-group/css-transition

function SideMenu(props) {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  function openMenuHandler() {
    setMenuIsOpen(true);
  }

  function closeMenuHandler() {
    setMenuIsOpen(false);
  }
  return (
    <div className={props.className}>
      <MenuIcon onClick={openMenuHandler} />
      <CSSTransition
        in={menuIsOpen}
        timeout={300}
        classNames="menu"
        unmountOnExit
      >
        <Menu closeHandler={closeMenuHandler} />
      </CSSTransition>
      {/* {menuIsOpen && <Menu closeHandler={closeMenuHandler} />} */}
      <CSSTransition
        in={menuIsOpen}
        timeout={300}
        classNames="backdrop"
        unmountOnExit
      >
        <Backdrop backdropOnClick={closeMenuHandler} />
      </CSSTransition>
      {/* {menuIsOpen && <Backdrop backdropOnClick={closeMenuHandler} />} */}
    </div>
  );
}

export default SideMenu;
