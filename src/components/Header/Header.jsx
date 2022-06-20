import * as React from "react";
import "./Header.css";
import { appInfo } from "../../App";

export function Header({ title, tagline, description }) {
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <h4 className="tagline">{tagline}</h4>
      <p className="description">{description}</p>
    </header>
  );
}

// Header.defaultProps = {
//   title: "appInfo.title",s
// };

export default Header;
