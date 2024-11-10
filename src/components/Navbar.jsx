import React from "react";

export default function Navbar(props) {
  return (
    <>
      <nav>
        <h1>
          {props.name}Loves{props.lover}
        </h1>
      </nav>
    </>
  );
}
