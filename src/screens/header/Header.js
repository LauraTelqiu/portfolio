import React from 'react'
import './header.css'
import Typed from 'react-typed';

function Header() {
  return (
    <div className="main-info">
      <h1>Who am I?</h1>
      <Typed
        strings={[
          " ",
          "Software Engineer",
          "Front-End Developer",
          "Motivated by poroblem solving and completing challenges",
          " ",
          " ",
        ]}

        typeSpeed={40}
        backSpeed={50}
        loop
      />
    </div>
  )
}

export default Header

