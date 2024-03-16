import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  /*nav scroll */

  const [show, handShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handShow(window.scrollY > 100));
    return () =>
      window.removeEventListener("scroll", handShow(window.scrollY > 100));
  }, []);
  return (
    <div className="nav">
      <div className={`nav ${show && "nav__black"}`}>
        <div className="nav__contents">
          <img
            className="nav__logo"
            src="https://pngimg.com/d/netflix_PNG10.png"
            alt=""
          />

          <img
            className="nav__avatar"
            src="https://i.pinimg.com/474x/44/78/1b/44781ba4ac0c63f2ecf0793a533bf8dc.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
export default Nav;
