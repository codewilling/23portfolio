import { PropsWithChildren, useState } from "react";

type OptionalProps = {
  image?: any;
  link: string;
};
export default function NavItem(props: PropsWithChildren<OptionalProps>) {
  return (
    <li className="navbar-item">
      <a href={props.link} className="icon-button">
        <img className="icon-button" src={props.image}></img>
      </a>
    </li>
  );
}
