import React from "react";

export const ColorItem = ({ color, delColorHandler }) => {
  return (
    <div className="color__item" style={{ backgroundColor: color.color }}>
      <div className="color__item_text">
        <h4>{color.color}</h4>
        <div
          className="color__item_del_btn"
          onClick={() => delColorHandler(color.id)}
        />
      </div>
    </div>
  );
};

export default ColorItem;
