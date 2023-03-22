import { PropsWithChildren, ReactEventHandler, useState } from "react";
import NavToggle from "./NavToggle";

type OptionalProps = {
  text?: string;
};
export default function NB2(props: PropsWithChildren<OptionalProps>) {

    const [listClass, setListClass] = useState("navbar-list")
    function handleToggleClick () {
        setListClass(listClass==="navbar-list"? "navbar-list active":"navbar-list")
  };
  return (
    <nav className="navbar">
      <ul className={listClass}>{props.children}</ul>
      <NavToggle handleToggleClick={handleToggleClick}></NavToggle>
    </nav>
  );
}
