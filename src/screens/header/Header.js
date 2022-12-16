import React from "react";
import "./header.css";
import Typed from "react-typed";

function Header() {
  return (
    <div className="main-info">
      <h1>Software Engineer</h1>
      <Typed
        strings={[
          " ",
          "Motivated by poroblem solving and completing challenges",
          " ",
          " ",
        ]}
        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  );
}

export default Header;
