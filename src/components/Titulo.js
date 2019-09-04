import React from "react";

const Titulo = props => {
  const style = {
    color: props.textColor,
    backgroundColor: "#561dc1"
  };

  return <h1 style={style}>{props.children}</h1>;
};

export default Titulo;
