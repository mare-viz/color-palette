import React from "react";
import ColorsList from "../components/ColorsList";

export const Main = ({
  colors,
  color,
  colorInputHandler,
  textInputHandler,
  addColorHandler,
  textInputHandlerKey,
  delColorHandler,
}) => {
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <div className="main__input">
            <input
              type="color"
              className="color__input"
              value={color}
              onChange={(event) => colorInputHandler(event)}
            />
            <input
              type="text"
              className="text__input"
              placeholder="Enter color hex (with #)"
              value={color}
              onChange={(event) => textInputHandler(event)}
              onKeyDown={(event) => textInputHandlerKey(event)}
            />
          </div>
          <div className="main__color_list" onClick={addColorHandler}>
            Add color
          </div>
          <ColorsList colors={colors} delColorHandler={delColorHandler} />
        </div>
      </div>
    </div>
  );
};

export default Main;
