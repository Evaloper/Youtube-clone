import React from "react";
import { h1, h2, h3, p } from "../../../theme/styleDefinition";

export const Text = (props) => {
  const {type, children } = props;

  if (type === "h1") {
    return <h1 style={h1}>{children}</h1>;
  }

  if (type === "h2") {
    return <h2 style={h2}>{children}</h2>;
  }

  if (type === "h3") {
    return <h3 style={h3}>{children}</h3>;
  }
  if (type === "p") {
    return <p style={p}>{children}</p>;
  }

  return <div>{children}</div>;
};
