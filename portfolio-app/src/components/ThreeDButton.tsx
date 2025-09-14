import React from "react";

const ThreeDButton: React.FC<{ label: string; onClick?: () => void }> = ({
  label,
  onClick,
}) => {
  return (
    <button className="key-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default ThreeDButton;