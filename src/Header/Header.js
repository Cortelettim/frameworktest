import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>

        <div className="containerHeader">
          <Link to="/" className="headerLink">
           Menu
          </Link>
        </div>

    </>
  );
}
