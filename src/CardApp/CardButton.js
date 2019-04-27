import React from "react";

const CardButton = ({ id, children, onClick, title }) => {
  return (
    <button id={id} onClick={onClick} type="button">
      {children}
    </button>
  );
};

export default CardButton;
