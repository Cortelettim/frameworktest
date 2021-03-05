import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <>
      <div>
        <div className="headerDiv">
          <h1>framework wars</h1>
        </div>
        <div className="menu">
          <Link to="/post" className="menuLink">
            <h2>Postagens</h2>
          </Link>

          <Link to="/album" className="menuLink">
            <h2>Albums</h2>
          </Link>

          <Link to="/to-do" className="menuLink">
            <h2>TO-DO</h2>
          </Link>
        </div>
      </div>
    </>
  );
}
