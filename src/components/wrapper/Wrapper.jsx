import React from "react";
import "./Wrapper.style.scss";
function Wrapper({ children }) {
  return <div className="wrapper">{children}</div>;
}

export default Wrapper;
