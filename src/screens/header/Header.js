import React from "react";
import "./header.css";
import Typed from "react-typed";


function Header() {
  return (
    <div className="main-info">
      <h1 style={{ fontSize: '50px' }}>Laura Telqiu</h1>
      <h5>Software Engineer</h5>

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
