import { PropsWithChildren, ReactEventHandler } from "react";

type OptionalProps = {
  handleToggleClick: React.MouseEventHandler;
};
export default function NavToggle(props: PropsWithChildren<OptionalProps>) {
  return (
    <div className="navbar-toggle" onClick={props.handleToggleClick}>
      <div className="line1"></div>
      <div className="line2"></div>
      <div className="line3"></div>
    </div>
  );
}
