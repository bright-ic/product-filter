import React from "react";

export const Header = ({showHomePage}) => (
  <header>
    <button onClick={()=>showHomePage()}>Home</button>
  </header>
)