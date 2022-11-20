import React from "react";
import ColorItem from "./ColorItem";

export const ColorsList = ({ colors, delColorHandler }) => {
  return (
    <div className="color__list">
      {colors.map((color) => (
        <ColorItem
          color={color}
          key={color.id}
          delColorHandler={delColorHandler}
        />
      ))}
    </div>
  );
};

export default ColorsList;
