import React, { useEffect, useState } from "react";
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import Main from "./layouts/Main";

function App() {
  const [color, setColor] = useState("");
  const [colorsList, setColorsList] = useState([]);

  useEffect(() => {
    setColor(localStorage.getItem("color"));
  }, []);

  const colorInputHandler = (event) => {
    setColor(event.target.value);
    localStorage.setItem("color", event.target.value);
  };

  const textInputHandler = (event) => {
    if (event.target.value) {
      setColor(event.target.value);
      localStorage.setItem("color", event.target.value);
    }
  };

  const textInputHandlerKey = (event) => {
    if (color.length !== 0) {
      if (event.key === "Enter") {
        setColorsList([
          { id: colorsList.length + 1, color: color },
          ...colorsList,
        ]);
      }
      if (event.key === "Escape") {
        setColor("");
      }
    }
  };

  const addColorHandler = () => {
    if (color.length !== 0)
      setColorsList([
        { id: colorsList.length + 1, color: color },
        ...colorsList,
      ]);
  };

  const delColorHandler = (id) => {
    setColorsList(colorsList.filter((color) => color.id !== id));
  };

  return (
    <>
      <Header color={color} />
      <Main
        colors={colorsList}
        color={color}
        colorInputHandler={colorInputHandler}
        textInputHandler={textInputHandler}
        addColorHandler={addColorHandler}
        textInputHandlerKey={textInputHandlerKey}
        delColorHandler={delColorHandler}
      />
      <Footer color={color} />
    </>
  );
}

export default App;
