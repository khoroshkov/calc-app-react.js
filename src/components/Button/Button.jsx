import React from "react";

export default function Button({ name, value, handleClick }) {
  let addStyle;
  if (value === "ac") {
    addStyle = "reset-btn";
  } else if (value === "=") {
    addStyle = "equal-btn";
  } else if (value === "/" || value === "+" || value === "-" || value === "*") {
    addStyle = "operation-btn";
  }

  return (
    <button
      onClick={(e) => {
        handleClick(e.target.value);
      }}
      value={value}
      className={`button ${addStyle}`}
    >
      {name}
    </button>
  );
}
