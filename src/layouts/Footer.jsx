import React from "react";

export const Footer = ({ color }) => {
  return (
    <div className="footer">
      <h4 className="footer__create_by">
        Created by{" "}
        <strong
          style={{
            color: "#0fffc3", // color: color
          }}
        >
          mare-viz
        </strong>{" "}
        with <big style={{ color: "red" }}>❤</big>
      </h4>
    </div>
  );
};

export default Footer;
